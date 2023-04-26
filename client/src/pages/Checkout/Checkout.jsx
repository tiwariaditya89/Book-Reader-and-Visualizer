import React from 'react';
import { Grid } from '@mui/material';
import './Checkout.css';
import Footer from "../../components/Footer/Footer";
import {TextField, Button} from '@mui/material';
import Navbar from '../../components/Navbar';

function Checkout() {
    return (
        <div className="checkout">
          <Navbar/>
            <div className="checkout-container">
                <div className="checkout-content">
                    <h1 className='checkout-heading'>Checkout</h1>
                    <hr />
                    <Grid container columns={12} spacing={5}>
                        <Grid item md={7} sm={12}>
                            <div className="checkout-form">
                                <h2>Basic Information</h2>
                                <div className='form'>
                                    <TextField id="name" className="form-control" label="Full Name" variant="outlined" />
                                </div>
                                <div className='form'>
                                    <TextField id="email" className="form-control" label="Email Address" variant="outlined" />
                                </div>
                                <div className='form'>
                                    <TextField id="phone" className="form-control" label="Phone Number" variant="outlined" />
                                </div>
                            </div>
                            <div className="checkout-form">
                                <h2>Payment Details</h2>
                                <div className='form'>
                                    <TextField id="holderName" className="form-control" label="Name on card" variant="outlined" />
                                </div>
                                <div className='form'>
                                    <TextField id="cardNumber" className="form-control" label="Card Number" variant="outlined" />
                                </div>
                                <div className='form'>
                                    <Grid container columns={12} spacing={2}>
                                        <Grid item md={6} sm={12}>
                                            <TextField id="expiry" className="form-control" label="Expiry date" variant="outlined" />
                                        </Grid>
                                        <Grid item md={6} sm={12}>
                                            <TextField id="cvv" className="form-control" label="CVV" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={5} sm={12}>
                            <div className="checkout-summary">
                                <h3 className='summary-heading'>Summary</h3>
                                <div className="summary-book">
                                    <Grid container columns={12} spacing={2}>
                                        <Grid item lg={5} md={12} sm={12}>
                                            <div className="book-img"><img src="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" srcset="" /></div>
                                        </Grid>
                                        <Grid item lg={7} md={12} sm={12}>
                                            <div className="book-details">
                                                <h2>Book Title</h2>
                                                <p>$ 10</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="summary-book-form">
                                    <TextField id="code" className="summary-form" label="Full Name" variant="outlined" />
                                    <Button variant="text" className='apply'>Apply</Button>
                                </div>
                                <div className="summary-price">
                                    <p className='price'>
                                        <span className='sub'>Subtotal</span>
                                        <span className='sub-price'>$10</span>
                                    </p>
                                    <p className='price'>
                                        <span className='dis'>Discount</span>
                                        <span className='dis-price'>$0</span>
                                    </p>
                                    <p className='price'>
                                        <span className='total'>Total</span>
                                        <span className='total-price'>$10</span>
                                    </p>
                                </div>
                                <input type='submit' className='submit' value='Checkout now'></input>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout;