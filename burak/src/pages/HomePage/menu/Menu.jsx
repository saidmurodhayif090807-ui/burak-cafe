import React from 'react';
import './Menu.scss';
import menu from './menu2_imgs/Rectangle (10).png'
import menu_imgswww1 from './munu1_imgs/Rectangle (7).png'
import menu_imgswww2 from './munu1_imgs/Rectangle (9).png'
import menu_imgswww3 from './munu1_imgs/Rectangle (8).png'
import menu_imgswww4 from './munu1_imgs/Rectangle (6).png'
const Menu = () => {
  const popularDishes = [
    { id: 1, surname: 'qwerty1', name: 'Lavash', desc: 'This is Turkish Lavash', img: './menu2_imgs/Rectangle (10).png' },
    { id: 2, surname: 'qwerty2', name: 'Cutlet', desc: 'This is Turkish Cutlet', img: './menu2_imgs/Rectangle (11).png' },
    { id: 3, surname: 'qwerty3', name: 'Kebab', desc: 'Kebab', img: './menu2_imgs/Rectangle (12).png' },
    { id: 4, surname: 'qwerty4', name: 'Kebab', desc: 'This is Turkish Kebab', img: './menu2_imgs/Rectangle (13).png' },
  ];

  const freshMenu = [
    { id: 5, name: 'Cutlet', price: '$7', img: menu_imgswww1 },
    { id: 6, name: 'Kebab', price: '$7', img: menu_imgswww2 },
    { id: 7, name: 'Lavash', price: '$7', img: menu_imgswww3 },
    { id: 8, name: 'Kebab', price: '$7', img: menu_imgswww4 },
  ];

  return (
    <section className="menu-section">
      {/* Popular Dishes Block */}
      <h2 className="section-title">Popular Dishes</h2>
      <div className="card-grid">
        {popularDishes.map((dish) => (
          <div id={dish.surname} key={dish.id} className="popular-card">
            <div className="overlay">
              <h4>{dish.name}</h4>
              <p>📄 {dish.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fresh Menu Block */}
      <h2 className="section-title">Fresh Menu</h2>
      <div className="card-grid">
        {freshMenu.map((item) => (
          <div key={item.id} className="fresh-card">
            <div className="img-container">
              <span className="badge">NORMAL size</span>
              <img src={item.img} alt={item.name} />
            </div>
            <div className="card-footer">
              <span className="name">{item.name}</span>
              <span className="price">{item.price}</span>
              <span className="view-count">👁️ 1</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;