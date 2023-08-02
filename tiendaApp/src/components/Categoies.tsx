import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

export const Categories = ({ data }: { data: boolean }) => {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;

    switch (selectedCategory) {
      case "all":
        navigate("/");
        break;
      case "electronics":
        navigate("/products/category/electronics");
        break;
      case "jewelery":
        navigate("/products/category/jewelery");
        break;
      case "men":
        navigate("/products/category/men's clothing");
        break;
      case "women":
        navigate("/products/category/women's clothing");
        break;
      default:
        navigate("/");
    }
  };

  const handleFocus = () => {
    setFocus(!focus);
  };

  if (data) {
    return (
      <nav className="headerNav" onClick={handleFocus}>
        <h3 className="menu">Menu</h3>
        <ul className={`submenu ${focus ? "active" : ""}`}>
          <li>
            <a href="/products/category/women's clothing">Woman</a>
          </li>
          <li>
            <a href="/products/category/men's clothing">Men</a>
          </li>
          <li>
            <a href="/products/category/jewelery">Jewelery</a>
          </li>
          <li>
            <a href="/products/category/electronics">Electronics</a>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <>
      <form className="containerForm">
        <h5>Filtro</h5>
        <select onChange={handleCategoryChange} defaultValue="all">
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men">Men's clothing</option>
          <option value="women">Women's clothing</option>
        </select>
      </form>
    </>
  );
};
