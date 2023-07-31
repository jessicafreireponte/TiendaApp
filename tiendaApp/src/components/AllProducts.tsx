import useAllProducts from "../hooks/useAllProducts.ts";
import { ProductCard } from "./ProductCard.tsx";
import "./AllProducts.css";
import { Categories } from "./Categoies.tsx";
import { useParams } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

type Rating = {
  rate: number;
  count: number;
};

export const AllProducts = () => {
  const { products } = useAllProducts();
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product: Product) => product.category === category
  );

  return (
    <>
      <h1 className="text_list">Lista de Productos</h1>
      <Categories />
      {filteredProducts.length === 0 ? (
        <ul className="container">
          {products?.map((product: Product) => (
            <li key={product.id}>
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
                category={product.category}
                rating={product.rating}
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="container">
          {filteredProducts?.map((product: Product) => (
            <li key={product.id}>
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
                category={product.category}
                rating={product.rating}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
