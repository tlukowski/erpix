import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = process.env.API_URL;
  const CATEGORY_ID = 79;
  
  const authHeader = { Authorization: `Basic ${Buffer.from(`${API_KEY}:`).toString("base64")}` };

  try {
    const apiUrl = new URL(`${BASE_URL}products`);
    apiUrl.searchParams.set("display", "[id, product_features[id,id_feature_value]]");
    apiUrl.searchParams.set("filter[id_category_default]", `[${CATEGORY_ID}]`);
    apiUrl.searchParams.set("output_format", "JSON");

    const res = await fetch(apiUrl.toString(), { headers: authHeader, cache: "no-store" });
    if (!res.ok) throw new Error(`Błąd API: ${res.status} ${res.statusText}`);

    const jsonData = await res.json();
    const products = jsonData.products || [];

    const uniqueFeatureIds = new Set();
    const uniqueFeatureValuesIds = new Set();

    products.forEach(product => {
      product.associations?.product_features.forEach(feature => {
        uniqueFeatureIds.add(feature.id);
        uniqueFeatureValuesIds.add(feature.id_feature_value);
      });
    });

    const featureIdsString = [...uniqueFeatureIds].join('|');
    const featureValuesIdsString = [...uniqueFeatureValuesIds].join('|');

    const [featuresRes, featureValuesRes] = await Promise.all([
      fetch(`${BASE_URL}product_features?filter[id]=[${featureIdsString}]&display=[id,name]&output_format=JSON`, { headers: authHeader }),
      fetch(`${BASE_URL}product_feature_values?filter[id]=[${featureValuesIdsString}]&display=[id,id_feature,value]&output_format=JSON`, { headers: authHeader })
    ]);

    if (!featuresRes.ok || !featureValuesRes.ok) throw new Error("Błąd pobierania cech produktu");

    const [featuresData, featureValuesData] = await Promise.all([featuresRes.json(), featureValuesRes.json()]);
    
    const featuresMap = Object.fromEntries((featuresData.product_features || []).map(f => [f.id, f.name]));
    const featureValuesMap = Object.fromEntries((featureValuesData.product_feature_values || []).map(fv => [fv.id, fv.value]));

    const groupedFeatures = {};

    products.forEach(product => {
      product.associations?.product_features.forEach(feature => {
        const featureName = featuresMap[feature.id] || "Nieznana cecha";
        const featureValue = featureValuesMap[feature.id_feature_value] || "Nieznana wartość";

        if (!groupedFeatures[featureName]) {
          groupedFeatures[featureName] = [];
        }

        if (!groupedFeatures[featureName].some(item => item.id_feature_value === feature.id_feature_value)) {
          groupedFeatures[featureName].push({
            id_feature_value: feature.id_feature_value,
            value: featureValue
          });
        }
      });
    });

    return NextResponse.json(groupedFeatures, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Nie udało się pobrać produktów", details: error.message }, { status: 500 });
  }
}
