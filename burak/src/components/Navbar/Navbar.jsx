import axios from "axios";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.scss';
import './Login.scss';

const Navbar = ({ cart }) => {
  const API_URL = "https://697b4e410e6ff62c3c5ba3df.mockapi.io/Login/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rider, Setrider] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const handleClick2 = async () => {
    try {
      const response = await axios.get(API_URL);

      const users = response.data;

      const foundUser = users.find(
        (user) =>
          user.username === username &&
          user.password === password
      );

      if (foundUser) {
        alert("true");
        Setrider(!rider);
      } else {
        alert("Error: wrong username or password");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  const handleClick1 = () => {
    Setrider(!rider);
  };

  const Forgot_password = () => {
    alert("pastga o'tkizing");
  }
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="hero-section">

      {/* LOGIN FORM */}
      <div className={rider ? 'login_request rider_true' : 'login_request rider_false'}>
        <div className="login-container">
          <div className="login-card">
            <h1>Sign In</h1>
            <p className="subtitle">Enter your credentials to continue</p>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => {
                    handleChange(e);
                    setUsername(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="input-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => {
                    handleChange(e);
                    setPassword(e.target.value);
                  }}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="form-options">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <a href="" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" onClick={handleClick2} className="signin-btn">Sign In</button>
            </form>

            <div className="footer">
              Don't have an account? <NavLink to={'/CreateAccount'} onClick={() => {
                Forgot_password();
                // Setrider(!rider);
              }}>
                <a href="/signup">Create one</a>
              </NavLink>
            </div>
          </div>
        </div>
      </div >

      {/* NAVBAR */}
      < nav className="navbar" >
        <div className="logo">BURAK</div>
        <ul className="nav-links">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/ProductPage'}>ProductPage</NavLink></li>
          <li><NavLink to={'/MyPage'}>MyPage</NavLink></li>
          <li><NavLink to={'/OrderPage'}>OrderPage</NavLink></li>
          <li><NavLink to={'/HelpPage'}>Help</NavLink></li>
          {/* <button onClick={handleClick5}>get</button> */}

          {/* SAVATCHA */}
          <li
            className="cart-wrapper"
            onMouseEnter={() => setShowCart(true)}
            onMouseLeave={() => setShowCart(false)}
          >
            <ShoppingCartIcon fontSize="large" />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            {showCart && (
              <div className="cart-dropdown">
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    {item.title} - ${item.price}
                  </div>
                ))}
              </div>
            )}
          </li>

          <li><button className="btn-login" onClick={handleClick1}>LOGIN</button></li>
        </ul>
      </nav >

      {/* HERO CONTENT */}
      < div className="hero-content" >
        <div className="text-container">
          <h1>World's Most <br /> Delicious Cuisine</h1>
          <p className="subtitle">The Choice, not just a choice</p>
          <p className="hours">24 hours service</p>
          <button className="btn-signup">SIGN UP</button>
        </div>

        <div className="brand-overlay">
          <span className="czn-tag">— CZN —</span>
          <h2 className="main-brand">BURAK</h2>
          <h3 className="sub-brand">GURME</h3>
        </div>
      </div >

    </section >
  );
};

export default Navbar;
