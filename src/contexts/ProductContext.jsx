/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ProductContext = createContext();

export const productos = [
  {
    id: 100,
    name: "Motherboard Gigabytes x570 Aorus Ultra",
    price: 67999,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_678028-MLA46275878652_062021-O.webp",
    inCart: false,
    inFavorites: true,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod error illo atque iste voluptates fuga ratione, veritatis fugiat, exercitationem hic temporibus eum, molestias nam itaque labore. Ipsam, nemo illum."
  },
  {
    id: 101,
    name: "Placa De Video Zotac Geforce Rtx 3070 Twin Edge Lhr 8 Gb",
    price: 139999,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_758476-MLA49500182252_032022-O.webp",
    inCart: false,
    inFavorites: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod error illo atque iste voluptates fuga ratione, veritatis fugiat, exercitationem hic temporibus eum, molestias nam itaque labore. Ipsam, nemo illum."
  },
  {
    id: 102,
    name: "Disco sólido interno Gigabyte Aorus 2TB",
    price: 72834,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_858090-MLA43220897090_082020-O.webp",
    inCart: false,
    inFavorites: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod error illo atque iste voluptates fuga ratione, veritatis fugiat, exercitationem hic temporibus eum, molestias nam itaque labore. Ipsam, nemo illum."
  },
  {
    id: 103,
    name: "Notebook Hp New Elite I7 11va 32gb 17.3 1tb Ssd 16gb Video",
    price: 479999,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_698455-MLA49976265495_052022-O.webp",
    inCart: false,
    inFavorites: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod error illo atque iste voluptates fuga ratione, veritatis fugiat, exercitationem hic temporibus eum, molestias nam itaque labore. Ipsam, nemo illum."
  },
  {
    id: 104,
    name: "Micrófono Blue Yeti condensador multipatrón blackout",
    price: 24499,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_926212-MLA50186554835_062022-O.webp",
    inCart: false,
    inFavorites: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod error illo atque iste voluptates fuga ratione, veritatis fugiat, exercitationem hic temporibus eum, molestias nam itaque labore. Ipsam, nemo illum."
  },
  {
    id: 105,
    name: "Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM)",
    price: 249990,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp",
    inCart: false,
    inFavorites: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod error illo atque iste voluptates fuga ratione, veritatis fugiat, exercitationem hic temporibus eum, molestias nam itaque labore. Ipsam, nemo illum."
  },
  {
    id: 106,
    name: 'Apple iPad Pro de 12.9" Wi-Fi 256GB Gris espacial (5ª generación)',
    price: 349999,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_922043-MLA46975166576_082021-O.webp",
    inCart: false,
    inFavorites: false,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod error illo atque iste voluptates fuga ratione, veritatis fugiat, exercitationem hic temporibus eum, molestias nam itaque labore. Ipsam, nemo illum."
  },
  {
    id: 107,
    name: "Router TP-Link Archer C80 V1 negro",
    price: 10899,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_628885-MLA42822340742_072020-O.webp",
    inCart: false,
    inFavorites: false,
    inOfert: true,
    percentOff: "25",
    outOfStock: false
  },
  {
    id: 108,
    name: "Memoria RAM Vengeance RGB Pro gamer color negro 16GB 2 Corsair",
    price: 20399,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_684969-MLA47962858193_102021-O.webp",
    inCart: false,
    inFavorites: false,
    inOfert: true,
    percentOff: "25",
    outOfStock: false
  },
  {
    id: 109,
    name: "Amd Ryzen 9 5950x Am4 4.9 Ghz",
    price: 186499,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_957431-MLA47177627550_082021-O.webp",
    inCart: false,
    inFavorites: false,
    inOfert: true,
    percentOff: "25",
    outOfStock: false
  },
  {
    id: 110,
    name: "Samsung 870 EVO MZ-77E1T0BW 1TB negro",
    price: 38999,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_839137-MLA46735174616_072021-O.webp",
    inCart: false,
    inFavorites: false,
    inOfert: true,
    percentOff: "25",
    outOfStock: false
  },
  {
    id: 111,
    name: "Intel Core I9 12900k 5.2 Ghz Alder 1700",
    price: 164719,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_936329-MLA48255412231_112021-O.webp",
    inCart: false,
    inFavorites: false,
    inOfert: true,
    percentOff: "25",
    outOfStock: false
  },
  {
    id: 112,
    name: "Asus Rog Strix X570-e Gaming Atx Motherboard With Pcie 4",
    price: 265029,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_840338-MLA32448766651_102019-O.webp",
    inCart: false,
    inFavorites: false,
    inOfert: true,
    percentOff: "25",
    outOfStock: false
  },
  {
    id: 113,
    name: "Gabinete Pc Case Thermaltake View 71 Tg Argb - Full Tower",
    price: 80000,
    stock: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_883140-MLA50290561723_062022-F.webp",
    inCart: false,
    inFavorites: false,
    inOfert: true,
    percentOff: "25",
    outOfStock: false
  }
];
export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState(productos);
  const [populares, setPopulares] = useState([]);
  return (
    <ProductContext.Provider
      value={[productList, setProductList, populares, setPopulares]}
    >
      {children}
    </ProductContext.Provider>
  );
};
