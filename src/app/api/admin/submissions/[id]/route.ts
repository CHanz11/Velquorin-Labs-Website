
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";

const allowedStatuses = [
  "new",
  "contacted",
  "in_progress",
  "completed",
] as const;

type SubmissionStatus = (typeof allowedStatuses)[number];

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const isAuthenticated = await verifyAdminSession();

    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, message: "Unauthorized access." },
        { status: 401 }
      );
    }

    const { id } = await context.params;

    if (!/^\d+$/.test(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid submission ID." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const status = body.status as SubmissionStatus;

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid submission status." },
        { status: 400 }
      );
    }

    const [result] = await pool.execute(
      `UPDATE contact_submissions
       SET status = ?
       WHERE id = ?`,
      [status, id]
    );

    const updateResult = result as { affectedRows: number };

    if (updateResult.affectedRows === 0) {
      return NextResponse.json(
        { success: false, message: "Submission not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Submission status updated successfully.",
    });
  } catch (error) {
    console.error("Update submission status error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to update submission status.",
      },
      { status: 500 }
    );
  }
}


export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const isAuthenticated = await verifyAdminSession();

    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, message: "Unauthorized access." },
        { status: 401 }
      );
    }

    const { id } = await context.params;

    if (!/^\d+$/.test(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid submission ID." },
        { status: 400 }
      );
    }

    const [result] = await pool.execute(
      "DELETE FROM contact_submissions WHERE id = ?",
      [id]
    );

    const deleteResult = result as { affectedRows: number };

    if (deleteResult.affectedRows === 0) {
      return NextResponse.json(
        { success: false, message: "Submission not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Submission deleted successfully.",
    });
  } catch (error) {
    console.error("Delete submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to delete submission.",
      },
      { status: 500 }
    );
  }
}

