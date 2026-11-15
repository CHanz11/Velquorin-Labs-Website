
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function verifyAdminSession() {
  const token = (await cookies()).get("admin_session")?.value;
  const secret = process.env.SESSION_SECRET;

  if (!token || !secret) {
    return false;
  }

  try {
    const secretKey = new TextEncoder().encode(secret);
    const { payload } = await jwtVerify(token, secretKey);

    return payload.role === "admin";
  } catch {
    return false;
  }
}
