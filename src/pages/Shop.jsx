// import "./home.css"
import { useState } from "react";
import {products} from "../data/products";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [category, setCategory] = useState("All");

  // Filter products by category
  const filteredProducts = category === "All"
    ? products
    : products.filter(p => p.category === category);

  const categories = [
  "All",
  "Premier League",
  "La Liga",
  "Bundesliga",
  "Primeira Liga",
  "Ligue 1",
  "UCL",
  "National Team"
];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 mt-5 text-primary">Shop Jerseys</h1>

 
      <div className='filter-buttons'>
        {
          categories.map((cat) => {
            return (
              <button
                key={cat}
                className={category === cat ? "active" : ""}
                onClick={() => setCategory(cat)}
              >{cat}</button>
            )
          })
        }
      </div>

      {/* Products Grid */}
      <div className="row g-3">
        {filteredProducts.map(product => (
     
            <ProductCard {...product} />

        ))}
      </div>
    </div>
  );
};

export default Shop;
