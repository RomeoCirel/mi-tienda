export const customFetch = (time, list, ok = true) =>
  new Promise((resolve, reject) => {
    if (ok) {
      setTimeout(() => {
        resolve(list);
      }, time);
    } else {
      reject(new Error("Error al intentar obtener la lista de productos"));
    }
  });

export const getProduct = (list, id = 101, time = 2000, ok = true) =>
  new Promise((resolve, reject) => {
    if (ok && list && id) {
      setTimeout(() => {
        const product = list.find((item) => item.id === id);
        resolve(product);
      }, time);
    } else {
      reject(new Error("Producto no encontrado"));
    }
  });

export const getProductsByCategory = (
  list,
  categoryId,
  time = 2000,
  ok = true
) =>
  new Promise((resolve, reject) => {
    if (ok && list && categoryId) {
      setTimeout(() => {
        const product = list.filter((item) => item.categoriId === categoryId);
        resolve(product);
      }, time);
    } else {
      reject(
        new Error(
          "Error al intentar obtener la lista de productos de la categoria solicitada"
        )
      );
    }
  });
export default { customFetch, getProduct, getProductsByCategory };
