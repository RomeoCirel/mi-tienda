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

export default { customFetch };
