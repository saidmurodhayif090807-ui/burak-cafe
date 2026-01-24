import {Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ProductPage' element={<ProductPage/>} />
          <Route path='/MyPage' element={<MyPage />} />
          <Route path='/OrderPage' element={<OrderPage />}>
            <Route index element={<Paused/>} />
            <Route path="paused" element={<Paused/>} />
            <Route path='process' element={<Process/>} />
            <Route path='finished' element={<Finished/>} />
          </Route>
          <Route path="/HelpPage" element={<HelpPage/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
