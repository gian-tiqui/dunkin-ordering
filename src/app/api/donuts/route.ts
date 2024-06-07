import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hello: "world",
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  return NextResponse.json({
    data,
  });
}

export async function PATCH(req: NextRequest) {
  return NextResponse.json({
    hi: "meow",
  });
}

export async function DELETE(req: NextRequest) {
  return NextResponse.json({
    message: "Donut deleted",
  });
}
