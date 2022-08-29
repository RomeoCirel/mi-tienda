import { useContext } from "react";
import { CarrucelCardsProduct } from "../components/Productos/CarrucelCardsProduct";
import { ProductContext } from "../contexts/ProductContext";

export default function Home() {
  const [productList] = useContext(ProductContext);
  // HACER: mover esto a ProductContext
  const getProductosPopulares = (lista, max = 8) => {
    const ids = [];
    const maxId = 113;

    for (let index = 0; ids.length < max; index++) {
      const numero = Math.floor(Math.random() * (maxId - 100)) + 100;
      if (!ids.includes(numero)) {
        ids.push(numero);
      }
    }
    return productList.filter((element) => ids.includes(element.id));
  };
  const populares = getProductosPopulares(productList);
  return (
    <div className="min-h-screen">
      <div className="hero h-1/4 max-h-screen bg-amber-50">
        <div className="hero-content text-center">
          <div className="max-w-md pt-4">
            <h1 className="text-5xl font-bold">Mi Tienda</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              minus consequatur saepe aperiam fugiat? Hic quia cupiditate,
              dolorum vitae, quos incidunt minus a quisquam doloremque maxime
              omnis. Ad, eveniet accusamus.
            </p>
            <div className="grid gap-4 grid-cols-2 py-2">
              <button type="button" className="btn btn-secondary">
                Registrarme
              </button>
              <button type="button" className="btn btn-primary">
                Iniciar Sesion
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-secondary">
        <div>
          <h2 className="text-2xl font-bold text-gray-500 text-center">
            Productos Populares
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 p-4 justify-center">
          <CarrucelCardsProduct products={populares} />
        </div>
      </div>
      <div className=" min-h-1/2 bg-gray-50">
        <div className="hero-content flex-col lg:flex-row h-full">
          <img
            src="https://www.notonidas.com/wp-content/uploads/2020/10/newegg-tech-pc-component-wallpaper-4-1.jpg"
            className="max-w-sm min-h-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold text-gray-600">
              Especialistas en Hardware
            </h1>
            <p className="py-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              minus consequatur saepe aperiam fugiat? Hic quia cupiditate,
              dolorum vitae, quos incidunt minus a quisquam doloremque maxime
              omnis. Ad, eveniet accusamus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
