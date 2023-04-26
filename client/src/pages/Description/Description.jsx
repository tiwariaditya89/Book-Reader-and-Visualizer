import React from "react";
import Footer from "../../components/Footer/Footer";
import { Grid, Button } from "@mui/material";
import "./Description.css";
import Navbar from "../../components/Navbar";
import { Product } from "../../components/Product";
import { Link } from "react-router-dom";

function Description() {
  return (
    <div className='description'>
      <Navbar />
      <div className='description-container'>
        <div className='description-header'>
          <Grid container columns={12} spacing={3}>
            <Grid item md={3} sm={12}>
              <div className='description-image'>
                <img src='https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
              </div>
            </Grid>
            <Grid item md={9} sm={12}>
              <div className='description-details'>
                <h1>Book Title</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className='description-action'>
                  <Link to={"/reader"}>
                    <Button variant='contained' className='read'>
                      Read
                    </Button>
                  </Link>
                  <Link to={"/product/slkfj"}>
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
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Description;
