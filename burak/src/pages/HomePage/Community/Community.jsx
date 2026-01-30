import React, { useRef, useState } from 'react';
import './Community.scss';
import Community_img1 from './Community_imgs/Imae (1).png'
import Community_img2 from './Community_imgs/Image (4).png'
import Community_img3 from './Community_imgs/Image (5).png'
import Community_img4 from './Community_imgs/Image (6).png'
const Community = () => {
  const scrollRef = useRef(null);
  const [Scroll_Touch,SetScroll_Touch] = useState(false)
  // Function to handle button clicks
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const users = [
    { id: 1, name: 'Justin', img: Community_img1 },
    { id: 2, name: 'Justin', img: Community_img2 },
    { id: 3, name: 'Rose', img: Community_img3 },
    { id: 4, name: 'Nusret', img: Community_img4 },
  ];

  const events = [
    { id: 1, title: 'Hot Discount Days', chef: 'Chef Deming', loc: 'Turkey, Istanbul', img: 'salmon.jpg', events_id: 'events_id1' },
    { id: 2, title: 'Hot Discount Days', chef: 'Chef Deming', loc: 'Turkey, Istanbul', img: 'hummus.jpg', events_id: 'events_id2' },
    { id: 3, title: 'Hot Discount Days', chef: 'Chef Deming', loc: 'Turkey, Istanbul', img: 'cutlet.jpg', events_id: 'events_id3' },
    { id: 4, title: 'Hot Discount Days', chef: 'Chef Deming', loc: 'Turkey, Istanbul', img: 'kebab.jpg', events_id: 'events_id4' },
    { id: 5, title: 'Weekend Special', chef: 'Chef Deming', loc: 'Turkey, Istanbul', img: 'steak.jpg', events_id: 'events_id5' },
    { id: 6, title: 'Weekend Special', chef: 'Chef Deming', loc: 'Turkey, Istanbul', img: 'steak.jpg', events_id: 'events_id6' },
  ];

  return (
    <section className="community-section">
      {/* Active User Section */}
      <div className="active-users">
        <h2 className="section-title">Active User</h2>
        <div className="user-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <img src={user.img} alt={user.name} />
              <p className="user-name">{user.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className="events-container">
        <h2 className="section-title">Events</h2>

        <div className="events-wrapper">
          <div className="events-slider" ref={scrollRef}>
            {events.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-img" id={event.events_id}></div>
                <div className="event-info">
                  <div className="top-row">
                    <span className="event-tag">{event.title}</span>
                    <span className="chef-name">👨‍🍳 {event.chef}</span>
                  </div>
                  <p className="event-desc">Each Friday we deliver highest discounts</p>
                  <div className="bottom-row">
                    <span>🕒 30 min ago</span>
                    <span>📍 {event.loc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="slider-controls">
          <button className="arrow" onClick={() => {
            scroll('left');
            SetScroll_Touch(!Scroll_Touch)
          }}>←</button>
          <span className={
            Scroll_Touch == false ? "dot active" : "dot"
          }></span>
          <span className={
            Scroll_Touch == true ? "dot active" : "dot"
          }></span>
          <button className="arrow" onClick={() => {
            scroll('right')
            SetScroll_Touch(!Scroll_Touch)
          }}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Community;