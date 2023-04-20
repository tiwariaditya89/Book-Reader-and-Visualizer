import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../Footer/Footer';
import AppBar from '../appbar/index';
import { useState } from 'react';
import { Grid, Button } from '@mui/material';
import '../../styles/Cart.css';

function Cart() {
    const [itemCount, setItemCount] = useState(6);
    return (
        <div className="cart">
            <AppBar />
            <div className="cart-container">
                <div className="cart-content">
                    <Grid container columns={12}>
                        <Grid item md={7} sm={12} className='shopping-cart-grid'>
                            <div className="shopping-cart">
                                <div className="shopping-cart-header">
                                    <h1>Shopping Cart</h1>
                                    <p>{itemCount} items</p>
                                </div>
                                <div className="shopping-cart-content">
                                    <Grid container columns={12} className='shopping-cart-content-grid'>
                                        <Grid item md={3} sm={12}>
                                            <h3>Product Details</h3>
                                            <div className="content">
                                                <div className="product-img"></div>
                                            </div>
                                        </Grid>
                                        <Grid item md={3} sm={12}>
                                            <h3>Quantity</h3>
                                            <div className="content">
                                                <p>
                                                    <Button className='control'>+</Button>
                                                    &nbsp;&nbsp;3&nbsp;&nbsp;
                                                    <Button className='control'>-</Button>
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item md={3} sm={12}>
                                            <h3>Price</h3>
                                            <div className="content">
                                                <p>$ 10</p>
                                            </div>
                                        </Grid>
                                        <Grid item md={3} sm={12}>
                                            <h3>Total</h3>
                                            <div className="content">
                                                <p>$ 30</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container columns={12} className='shopping-cart-content-grid'>
                                        <Grid item md={3} sm={12}>
                                            <h3>Product Details</h3>
                                            <div className="content">
                                                <div className="product-img"></div>
                                            </div>
                                        </Grid>
                                        <Grid item md={3} sm={12}>
                                            <h3>Quantity</h3>
                                            <div className="content">
                                                <p>
                                                    <Button className='control'>+</Button>
                                                    &nbsp;&nbsp;3&nbsp;&nbsp;
                                                    <Button className='control'>-</Button>
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item md={3} sm={12}>
                                            <h3>Price</h3>
                                            <div className="content">
                                                <p>$ 10</p>
                                            </div>
                                        </Grid>
                                        <Grid item md={3} sm={12}>
                                            <h3>Total</h3>
                                            <div className="content">
                                                <p>$ 30</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={5} sm={12}>
                            <div className="cart-summary">
                                <div className="cart-summary-header">
                                    <h1>Order Summary</h1>
                                </div>
                                <div className="cart-summary-content">
                                    <div className="cart-summary-container">
                                        <p><strong>{itemCount} Items</strong></p>
                                        <p>$ 60</p>
                                    </div>
                                    <div className="cart-summary-container">
                                        <p><strong>Shipping Address</strong></p>
                                        <p>Dehri on sone, Rohtas, Bihar, 821305</p>
                                    </div>
                                    <p className="delivery">
                                        Standard Delivery - $ 50
                                    </p>
                                    <hr />
                                    <div className="total-cart-price">
                                        <h1>Total Price</h1>
                                        <p>$ 110</p>
                                    </div>
                                    <Button variant="contained" className='checkout-btn'>Checkout</Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;