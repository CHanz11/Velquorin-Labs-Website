
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const isAuthenticated = await verifyAdminSession();

    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, message: "Unauthorized access." },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);

    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const limit = 10;
    const offset = (page - 1) * limit;

    const search = searchParams.get("search")?.trim() || "";
    const status = searchParams.get("status") || "all";

    const allowedStatuses = [
      "new",
      "contacted",
      "in_progress",
      "completed",
    ];

    if (status !== "all" && !allowedStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid status filter." },
        { status: 400 }
      );
    }

    const searchCondition = `
      (
        name LIKE ?
        OR email LIKE ?
        OR company LIKE ?
        OR service LIKE ?
        OR message LIKE ?
      )
    `;

    const searchValue = `%${search}%`;

    const conditions: string[] = [];
    const params: (string | number)[] = [];

    if (search) {
      conditions.push(searchCondition);
      params.push(
        searchValue,
        searchValue,
        searchValue,
        searchValue,
        searchValue
      );
    }

    if (status !== "all") {
      conditions.push("status = ?");
      params.push(status);
    }

    const whereClause = conditions.length
      ? `WHERE ${conditions.join(" AND ")}`
      : "";

    const [countRows] = await pool.execute(
      `SELECT COUNT(*) AS total FROM contact_submissions ${whereClause}`,
      params
    );

    const total = Number(
      (countRows as { total: number }[])[0].total
    );

    const totalPages = Math.ceil(total / limit);

    const [rows] = await pool.query(
        `SELECT
            id,
            name,
            email,
            company,
            service,
            message,
            status,
            created_at
        FROM contact_submissions
        ${whereClause}
        ORDER BY created_at DESC
        LIMIT ${limit} OFFSET ${offset}`,
        params
    );

    return NextResponse.json({
      success: true,
      submissions: rows,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: total,
        limit,
      },
    });
  } catch (error) {
    console.error("Admin submissions error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to retrieve contact submissions.",
      },
      { status: 500 }
    );
  }
}
