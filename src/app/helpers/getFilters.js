export async function getFilters() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productsfeatures`);

    if (!res.ok) {
      throw new Error(`Błąd pobierania produktów: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("❌ Błąd pobierania produktów:", error);
    return { products: [] };
  }
}
