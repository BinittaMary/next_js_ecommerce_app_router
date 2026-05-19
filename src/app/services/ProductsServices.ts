// 

export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products;
}

export async function getProduct(id: string) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const text = await res.text();

    // Prevent parsing empty response
    if (!text) {
      return null;
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}