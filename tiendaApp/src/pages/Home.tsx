import { AllProducts } from "../components/AllProducts";
import { Categories } from "../components/Categoies";
import "./Home.css";

export const Home = () => {
  const data = false;
  return (
    <div className="layout">
      <header>
        <Categories data={data} />
        TuTiendaFavotita
        <p> 🛍️ </p>
      </header>
      <main>
        <AllProducts />
      </main>
      <footer>pie de página</footer>
    </div>
  );
};
