import React from 'react'
import './Paused.scss'
export default function Paused() {
  return (
    <div className="Paused">

      <div className="container">
        <div className="orders">
          <div className="orderCard" key={1}>
            <div className="items">
              <div className="item">
                <div className="food_click">
                  <span>🥩</span>
                  <p>Steak</p>
                </div>
                <span className="price">$10 x 2 = $20</span>
              </div>
              <div className="item">
                <div className="food_click">
                  <span>🍗</span>
                  <p>Fried chicken</p>
                </div>
                <span className="price">$10 x 2 = $20</span>
              </div>
              <div className="item">
                <div className="food_click">
                  <span>🍜</span>
                  <p>Winner</p>
                </div>
                <span className="price">$10 x 2 = $20</span>
              </div>
            </div>


            <div className="summary">
              <p>Product price <b>$60</b></p>
              <p>Delivery cost <b>$5</b></p>
              <p className="total">Total <b>$65</b></p>
              <span className="time">23-11-04 03:05</span>
              <button>VERIFY TO FULFIL</button>
            </div>
          </div>
          <div className="orderCard" key={2}>
            <div className="items">
              <div className="item">
                <div className="food_click">
                  <span>🥩</span>
                  <p>Steak</p>
                </div>
                <span className="price">$10 x 2 = $20</span>
              </div>
              <div className="item">
                <div className="food_click">
                  <span>🍗</span>
                  <p>Fried chicken</p>
                </div>
                <span className="price">$10 x 2 = $20</span>
              </div>
              <div className="item">
                <div className="food_click">
                  <span>🍜</span>
                  <p>Winner</p>
                </div>
                <span className="price">$10 x 2 = $20</span>
              </div>
            </div>


            <div className="summary">
              <p>Product price <b>$60</b></p>
              <p>Delivery cost <b>$5</b></p>
              <p className="total">Total <b>$65</b></p>
              <span className="time">23-11-04 03:05</span>
              <button>VERIFY TO FULFIL</button>
            </div>
          </div>
        </div>


        <div className="profile">
          <img src="https://www.istockphoto.com/illustrations/generic-person-icon" alt="user" />
          <h3>Justin</h3>
          <span className="role">USER</span>
          <p className="location">📍 South Korea, Busan</p>


          <div className="cardForm">
            <input placeholder="Card number : 5243 4090 2002 7495" />
            <div className="row">
              <input placeholder="07 / 24" />
              <input placeholder="CVV : 010" />
            </div>
            <input placeholder="Justin Robertson" />
          </div>


          <div className="payments">
            <span>💳</span>
            <span>💳</span>
            <span>💳</span>
            <span>💳</span>
          </div>
        </div>
      </div>
    </div>
  );
}