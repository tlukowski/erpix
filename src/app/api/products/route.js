import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = process.env.API_URL;
  const CATEGORY_ID = 79;

  const apiUrl = new URL(`${BASE_URL}products`);
  apiUrl.searchParams.set("display", "[id,name,price,visibility,id_default_image,product_features[id], product_features[id_feature_value]]");
  apiUrl.searchParams.set("filter[id_category_default]", `[${CATEGORY_ID}]`);
  apiUrl.searchParams.set("output_format", "JSON");

  const authHeader = { Authorization: `Basic ${Buffer.from(`${API_KEY}:`).toString("base64")}` };

  try {
    const res = await fetch(apiUrl.toString(), {
      headers: authHeader,
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Błąd API: ${res.status} ${res.statusText}`);

    const jsonData = await res.json();
  
    const products = jsonData.products?.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price * 1.23,
      visibility: product.visibility,
      features: product.associations?.product_features || [],
      image_url: `${BASE_URL}images/products/${product.id}/${product.id_default_image}`,
    })) || [];

    return NextResponse.json(products, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Nie udało się pobrać produktów", details: error.message }, { status: 500 });
  }
}
