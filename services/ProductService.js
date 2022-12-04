const url = "https://dummyjson.com/products";

export function getProdutcs() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json.products))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}

export function getProduct(id) {
  return getProduct().find((product) => product.id == id);
}
