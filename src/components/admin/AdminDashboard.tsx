
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Submission {
  id: number;
  name: string;
  email: string;
  company: string | null;
  service: string;
  message: string;
  status: "new" | "contacted" | "in_progress" | "completed";
  created_at: string;
}

const statusLabels: Record<Submission["status"], string> = {
  new: "New",
  contacted: "Contacted",
  in_progress: "In Progress",
  completed: "Completed",
};

export default function AdminDashboard() {
  const router = useRouter();

  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        limit: 10,
    });

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingStatus, setUpdatingStatus] = useState(false);

  useEffect(() => {
  async function loadSubmissions() {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        page: String(currentPage),
        search,
        status: statusFilter,
      });

      const response = await fetch(
        `/api/admin/submissions?${params.toString()}`
      );

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to load submissions.");
      }

      const records: Submission[] = result.submissions || [];

      setSubmissions(records);
      setPagination(result.pagination);

      setSelectedId(records[0]?.id ?? null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to load submissions."
      );
    } finally {
      setLoading(false);
    }
  }

  loadSubmissions();
}, [currentPage, search, statusFilter, router]);


  const selectedSubmission = submissions.find(
    (item) => item.id === selectedId
  );

  async function handleLogout() {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
    } finally {
      router.replace("/admin/login");
      router.refresh();
    }
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  async function handleStatusChange(newStatus: Submission["status"]) {
  if (!selectedSubmission || updatingStatus) return;

  setUpdatingStatus(true);
  setError("");

  try {
    const response = await fetch(
      `/api/admin/submissions/${selectedSubmission.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Unable to update status.");
    }

    setSubmissions((previous) =>
      previous.map((item) =>
        item.id === selectedSubmission.id
          ? { ...item, status: newStatus }
          : item
      )
    );
  } catch (err) {
    setError(
      err instanceof Error ? err.message : "Status update failed."
    );
  } finally {
    setUpdatingStatus(false);
  }
}


async function handleDeleteSubmission() {
  if (!selectedSubmission) return;

  const confirmed = window.confirm(
    `Are you sure you want to permanently delete the inquiry from ${selectedSubmission.name}?`
  );

  if (!confirmed) return;

  try {
    const response = await fetch(
      `/api/admin/submissions/${selectedSubmission.id}`,
      { method: "DELETE" }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Unable to delete submission.");
    }

    const remaining = submissions.filter(
      (item) => item.id !== selectedSubmission.id
    );

    setSubmissions(remaining);
    setSelectedId(remaining[0]?.id ?? null);
    setError("");
  } catch (err) {
    setError(
      err instanceof Error ? err.message : "Delete operation failed."
    );
  }
}


  return (
    <main className="min-h-screen bg-[#f8f5ff] text-[#172554]">
      <header className="border-b border-purple-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div className="flex flex-col items-start gap-1">
            <Image
                src="/images/velquorin-labs-logo-horizontal.png"
                alt="Velquorin Labs"
                width={180}
                height={60}
                priority
                className="h-auto w-[150px] object-contain"
            />
            </div>

          <button
            onClick={handleLogout}
            className="rounded-full border border-purple-200 px-5 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-50"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Contact Submissions</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage inquiries received through your website.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[380px_1fr]">
          {/* Inquiry List */}
          <section className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm">
            <div className="border-b border-gray-100 p-4">
              <input
                type="search"
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value);
                    setCurrentPage(1);
                }}
                placeholder="Search inquiries..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
              />

              <p className="mt-3 text-xs text-gray-500">
                {pagination.totalItems} inquiries found
              </p>
              <select
                value={statusFilter}
                onChange={(event) => {
                    setStatusFilter(event.target.value);
                    setCurrentPage(1);
                }}
                className="mt-3 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
                </select>

            </div>

            <div className="max-h-[650px] overflow-y-auto">
              {loading ? (
                <p className="p-6 text-center text-sm text-gray-500">
                  Loading inquiries...
                </p>
              ) : error ? (
                <p className="p-6 text-center text-sm text-red-500">
                  {error}
                </p>
              ) : submissions.length === 0 ? (
                <p className="p-6 text-center text-sm text-gray-500">
                  No inquiries found.
                </p>
              ) : (
                submissions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`w-full border-b border-gray-100 p-4 text-left transition hover:bg-purple-50 ${
                      selectedId === item.id
                        ? "border-l-4 border-l-purple-600 bg-purple-50"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-gray-800">
                          {item.name}
                        </p>

                        <p className="mt-1 truncate text-xs text-gray-500">
                          {item.email}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-purple-100 px-2 py-1 text-[10px] font-medium text-purple-700">
                        {statusLabels[item.status]}
                      </span>
                    </div>

                    <p className="mt-3 line-clamp-1 text-sm text-gray-600">
                      {item.message}
                    </p>

                    <p className="mt-2 text-xs text-gray-400">
                      {formatDate(item.created_at)}
                    </p>
                  </button>
                ))
              )}
                        </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between border-t border-gray-100 p-4">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage <= 1 || loading}
                className="rounded-lg border border-purple-200 px-3 py-2 text-xs font-medium text-purple-700 transition hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>

              <span className="text-xs text-gray-500">
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.min(pagination.totalPages, page + 1)
                  )
                }
                disabled={
                  currentPage >= pagination.totalPages || loading
                }
                className="rounded-lg border border-purple-200 px-3 py-2 text-xs font-medium text-purple-700 transition hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </section>

          {/* Inquiry Details */}
          <section className="min-h-[400px] rounded-2xl border border-purple-100 bg-white p-6 shadow-sm sm:p-8">
            {selectedSubmission ? (
              <>
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-100 pb-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-purple-600">
                      Contact Inquiry
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {selectedSubmission.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Received {formatDate(selectedSubmission.created_at)}
                    </p>
                  </div>

                  <select
                    value={selectedSubmission.status}
                    onChange={(event) =>
                        handleStatusChange(event.target.value as Submission["status"])
                    }
                    disabled={updatingStatus}
                    className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-semibold text-purple-700 outline-none disabled:opacity-50"
                    >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    </select>

                    <button
                        type="button"
                        onClick={handleDeleteSubmission}
                        className="rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                        >
                        Delete Inquiry
                    </button>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium text-gray-400">EMAIL</p>
                    <p className="mt-2 break-all text-sm">
                      {selectedSubmission.email}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-400">
                      COMPANY
                    </p>
                    <p className="mt-2 text-sm">
                      {selectedSubmission.company || "Not provided"}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="text-xs font-medium text-gray-400">
                      SERVICE REQUESTED
                    </p>
                    <p className="mt-2 text-sm">
                      {selectedSubmission.service}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-medium text-gray-400">MESSAGE</p>

                  <div className="mt-3 whitespace-pre-wrap rounded-xl bg-[#f8f5ff] p-5 text-sm leading-7 text-gray-700">
                    {selectedSubmission.message}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex min-h-[350px] items-center justify-center text-center">
                <div>
                  <h3 className="font-semibold text-gray-700">
                    No inquiry selected
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Select an inquiry from the list to view its details.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
