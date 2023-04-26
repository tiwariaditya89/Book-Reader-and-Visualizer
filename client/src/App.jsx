import React from "react";
import Home from "./pages/Home";
import Search from "./pages/Search/Search";
import Checkout from "./pages/Checkout/Checkout";
import Description from "./pages/Description/Description";
import Cart from "./pages/Cart/Cart";
import Reader from "./components/Reader/Reader";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from './pages/Product'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/products/:category' element={<ProductList />} />
      <Route exact path='/product' element={<ProductList />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/description' element={<Description />} />
      <Route exact path='/product/:id' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/reader' element={<Reader />} />
    </Routes>

    /* <Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='/products/:category' element={<ProductList />} />
<Route exact path='/product/:id' element={<Product />} />
<Route exact path='/cart' element={<Cart />} />
<Route
  exact
  path='/login'
  element={user ? <Navigate replace to={"/"} /> : <Login />}
/>
<Route
  exact
  path='/register'
  element={user ? <Navigate replace to={"/"} /> : <Register />}
/>
</Routes> */
  );
}

export default App;
