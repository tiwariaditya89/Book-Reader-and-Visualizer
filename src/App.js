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
import '../src/App.css';

function App() {
  useEffect(() => {
    document.title = "Tripund- Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
        <AppBar />  
        <Header />
        <Product />
        <Special />
        <Product />
        <Product />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
