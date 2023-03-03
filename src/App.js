
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
        <Product />
    </ThemeProvider>
  );
}

export default App;
