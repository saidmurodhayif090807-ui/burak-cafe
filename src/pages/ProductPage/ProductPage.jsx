import React from "react";
import "./ProductPage.scss";

import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";

import burak1 from "./images/burak1.png";
import burak2 from "./images/burak2.png";
import burak3 from "./images/burak3.png";
import burak4 from "./images/burak4.png";

const foods = [
  { id: 1, title: "Korean Spicy Soup", price: 15, img: img1 },
  { id: 2, title: "Vegetarian Soup", price: 15, img: img2 },
  { id: 3, title: "Salmon Pasta", price: 15, img: img3 },
  { id: 4, title: "Kebuli Rice", price: 15, img: img4 },
  { id: 5, title: "Kebuli Rice", price: 15, img: img5 },
  { id: 6, title: "Kebuli Rice", price: 15, img: img6 },
  { id: 7, title: "Kebuli Rice", price: 15, img: img7 },
  { id: 8, title: "Kebuli Rice", price: 15, img: img8 },
];

const brands = [
  { id: 1, img: burak1 },
  { id: 2, img: burak2 },
  { id: 3, img: burak3 },
  { id: 4, img: burak4 },
];

export default function ProductPage({ addToCart }) {
  return (
    <div className="container">
      <div className="top-bar">
        <h1 className="title">Burak Restaurant</h1>
        <div className="search-box">
          <input type="text" placeholder="Type here" />
          <button>Search</button>
        </div>
      </div>

      <div className="filters">
        <button className="active">NEW</button>
        <button>PRICE</button>
        <button>VIEWS</button>
      </div>

      <div className="main">
        <aside className="categories">
          <button className="active">Dish</button>
          <button>Salad</button>
          <button>Drink</button>
          <button>Dessert</button>
          <button>Other</button>
        </aside>

        <div className="food-grid">
          {foods.map((item) => (
            <div className="card" key={item.id}>
              <span className="badge">LARGE SIZE</span>
              <img src={item.img} alt={item.title} />
              <div className="cart-btn" onClick={() => addToCart(item)}>🛒</div>
              <h3>{item.title}</h3>
              <p className="price">$ {item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
      </div>

      <section className="brands">
        <h2>Our Family Brands</h2>
        <div className="brand-grid">
          {brands.map((item) => (
            <div className="brand-card" key={item.id}>
              <img src={item.img} alt="brand" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
