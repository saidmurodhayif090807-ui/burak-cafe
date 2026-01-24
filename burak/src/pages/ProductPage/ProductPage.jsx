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

export default function ProductPage() {
  return (
    <div className="container">
      {/* TOP */}
      <div className="top-bar">
        <h1 className="title">Burak Restaurant</h1>

        <div className="search-box">
          <input type="text" placeholder="Type here" />
          <button>Search</button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="filters">
        <button className="active">NEW</button>
        <button>PRICE</button>
        <button>VIEWS</button>
      </div>

      <div className="main">
        {/* CATEGORIES */}
        <aside className="categories">
          <button className="active">Dish</button>
          <button>Salad</button>
          <button>Drink</button>
          <button>Dessert</button>
          <button>Other</button>
        </aside>

        {/* PRODUCTS */}
        <div className="food-grid">
          {foods.map((item) => (
            <div className="card" key={item.id}>
              <span className="badge">LARGE SIZE</span>

              <img src={item.img} alt={item.title} />

              {/* CART (ICON O‘RNIGA TEXT) */}
              <div className="cart-btn">+</div>

              <h3>{item.title}</h3>
              <p className="price">$ {item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
      </div>

      {/* BRANDS */}
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

      {/* MAP */}
<section className="map-section">
  <h2>Our Address</h2>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.1234567890123!2d69.280123456789!3d41.328987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5e0c12345%3A0xabcdef1234567890!2sCZN%20Burak%20Gurme%2C%20174%2F1%20Babur%20St%2C%20Toshkent%20100003%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v0000000000000"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Burak Restaurant Location"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>

    </div>
  );
}