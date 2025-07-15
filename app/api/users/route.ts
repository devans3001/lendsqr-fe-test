import { NextResponse } from "next/server";
import { generateMockUsers } from "@/utils/generateMockUsers";

export async function GET(): Promise<NextResponse> {
  const users = generateMockUsers(500);

  return NextResponse.json(
    { data: users, message: "Users generated successfully" },
    { status: 200 }
  );
}
