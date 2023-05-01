import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { Grid, Button } from "@mui/material";
import "./Description.css";
import Navbar from "../../components/Navbar";
import { Product } from "../../components/Product";
import { Link, useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

function Description() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
 
  return (
    <div className='description'>
      <Navbar />
      <div className='description-container'>
        <div className='description-header'>
          <Grid container columns={12} spacing={3}>
            <Grid item md={3} sm={12}>
              <div className='description-image'>
                <img src={product.img} />
              </div>
            </Grid>
            <Grid item md={9} sm={12}>
              <div className='description-details'>
                <h1>{Product.title}</h1>
                <p>
                  {product.desc}
                </p>
                <div className='description-action'>
                  <Link to={"/reader"}>
                    <Button variant='contained' className='read'>
                      Read
                    </Button>
                  </Link>
                  <Link to={`/product/${product._id}`}>
                    <Button variant='outlined' className='buy'>
                      Buy Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className='also-like'>
          <h1>May You Like This</h1>
          <div className='product'>
            {/* <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Description;
