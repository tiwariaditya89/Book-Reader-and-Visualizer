import React from 'react';
import Header from './components/Header/Header';
import Promotion from './components/Promotion/Promotion';
import Special from './components/Special/Special';
import Footer from './components/Footer/Footer';

import { ThemeProvider } from "@mui/system";
import theme from "./styles/themes";
import { useEffect } from "react";
import AppBar from "./components/appbar";
import Product from "./components/products";

import Search from "./components/Search/Search";
import '../src/App.css';
import Checkout from './components/Checkout/Checkout';
import Description from './components/Description/Description';
import Cart from './components/Cart/Cart';
import Reader from './components/Reader/Reader';

function App() {
  useEffect(() => {
    document.title = "Tripund- Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
        {/* <AppBar />  
        <Header />
        <Product />
        <Special />
        <Product />
        <Product />
        <Footer /> */}
        {/* <Search /> */}
        {/* <Checkout /> */}
        {/* <Description /> */}
        {/* <Cart /> */}
        <Reader />
    </ThemeProvider>
  );
}

export default App;
