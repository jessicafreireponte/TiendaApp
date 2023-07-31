import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllProducts } from "./components/AllProducts";
import { SingleProduct } from "./components/SingleProduct";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products/category/:category" element={<AllProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
