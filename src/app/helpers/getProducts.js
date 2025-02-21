export async function getProducts() {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
    });

    if (!res.ok) {
      throw new Error(`Błąd pobierania produktów: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("❌ Błąd pobierania produktów:", error);
    return { products: [] };
  }
}
