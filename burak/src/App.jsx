import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/Home';
import MyPage from './pages/MyPage/MyPage';
import NotFound from './pages/NotFound/NotFound';
import OrderPage from './pages/OrderPage/OrderPage';
import Paused from './pages/OrderPage/OrderPages/Paused/Paused';
import Process from './pages/OrderPage/OrderPages/Process/Process';
import Finished from './pages/OrderPage/OrderPages/Finished/Finished';
import ProductPage from './pages/ProductPage/ProductPage';
import HelpPage from "./pages/HelpPage/HelpPage";
import Terms from "./pages/HelpPage/HelpPages/Terms/Terms";
import FAQ from "./pages/HelpPage/HelpPages/FAQ/FAQ";
import Contact from "./pages/HelpPage/HelpPages/Contact/Contact";
import CreateAccount from "./pages/CreateAccount/CreateAccount";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
   
    const newOrder = { ...food, cartId: Date.now() };
    setCart((prev) => [...prev, newOrder]);
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter(item => item.cartId !== cartId));
  };

  return (
    <div className="app-container">
      <Navbar cart={cart} removeFromCart={removeFromCart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ProductPage' element={<ProductPage addToCart={addToCart} />} />
        <Route path='/MyPage' element={<MyPage />} />
        <Route path='/OrderPage' element={<OrderPage />}>
          <Route index element={<Paused />} />
          <Route path="paused" element={<Paused />} />
          <Route path='process' element={<Process />} />
          <Route path='finished' element={<Finished />} />
        </Route>
        <Route path="/HelpPage" element={<HelpPage />}>
          <Route index element={<Terms />} />
          <Route path="terms" element={<Terms/>} />
          <Route path='faq' element={<FAQ/>} />
          <Route path='contact' element={<Contact/>} />
        </Route>
        <Route path='/CreateAccount' element={<CreateAccount/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;