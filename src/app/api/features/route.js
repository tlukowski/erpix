import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = process.env.API_URL;
  const authHeader = { Authorization: `Basic ${Buffer.from(`${API_KEY}:`).toString("base64")}` };

  try {
    const productsRes = await fetch("http://localhost:3000/api/products");
    if (!productsRes.ok) throw new Error("Błąd pobierania produktów");

    const { products } = await productsRes.json();

    const productFeatures = products.map(p => p.features).flat(); 

    if (!productFeatures.length) {
      return NextResponse.json({ error: "Brak cech dla produktów" }, { status: 404 });
    }

    console.log("📡 Pobieranie cech dla produktów:", productFeatures);

    const featuresRes = await fetch(`${BASE_URL}product_features?display=[id,name]&output_format=JSON`, {
      headers: authHeader,
    });
    if (!featuresRes.ok) throw new Error(`Błąd pobierania cech: ${featuresRes.statusText}`);

    const featuresData = await featuresRes.json();
    const featuresMap = Object.fromEntries(featuresData.product_features.map(f => [f.id, f.name]));

    const featureValuesRes = await fetch(`${BASE_URL}product_feature_values?display=[id,id_feature,value]&output_format=JSON`, {
      headers: authHeader,
    });
    if (!featureValuesRes.ok) throw new Error(`Błąd pobierania wartości cech: ${featureValuesRes.statusText}`);

    const featureValuesData = await featureValuesRes.json();
    const featureValuesMap = featureValuesData.product_feature_values.reduce((acc, fv) => {
      if (!acc[fv.id_feature]) acc[fv.id_feature] = {};
      acc[fv.id_feature][fv.id] = fv.value;
      return acc;
    }, {});

    // 4️⃣ Tworzenie dynamicznych filtrów na podstawie `productFeatures`
    const filters = {};

    productFeatures.forEach(({ id, id_feature_value }) => {
      const featureName = featuresMap[id] || "Nieznana cecha";
      const featureValue = featureValuesMap[id]?.[id_feature_value] || "Nieznana wartość";

      if (!filters[featureName]) filters[featureName] = new Set();
      filters[featureName].add(featureValue);
    });

    // 5️⃣ Zamiana `Set` na `Array` (usuwa duplikaty)
    const filtersObject = Object.fromEntries(
      Object.entries(filters).map(([key, values]) => [key, Array.from(values)])
    );

    return NextResponse.json(filtersObject, { status: 200 });

  } catch (error) {
    console.error("❌ Błąd API Features:", error.message);
    return NextResponse.json({ error: "Nie udało się pobrać filtrów", details: error.message }, { status: 500 });
  }
}
