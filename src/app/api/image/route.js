import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const imagePath = searchParams.get("imagePath");
  if (!imagePath) {
    return NextResponse.json({ error: "Brak ścieżki do obrazka" }, { status: 400 });
  }

  const API_KEY = process.env.API_KEY;
  const url = `${imagePath}`;
  const authHeader = `Basic ${Buffer.from(`${API_KEY}:`).toString("base64")}`

  const response = await fetch(url, {
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!response.ok) {
    return NextResponse.json({ error: "Błąd pobierania obrazka" }, { status: response.status });
  }

  const imageBuffer = await response.arrayBuffer();
  return new NextResponse(imageBuffer, {
    headers: {
      "Content-Type": response.headers.get("Content-Type"),
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}
