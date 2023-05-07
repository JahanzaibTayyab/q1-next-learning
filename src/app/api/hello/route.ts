import { NextResponse, NextRequest } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json("Hello");
}
