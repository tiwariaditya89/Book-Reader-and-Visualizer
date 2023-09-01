import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { Grid, Button } from "@mui/material";
import "./Cart.css";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();
  const [itemCount, setItemCount] = useState(6);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total,
        });
        history("/success", { state:{
          stripeData: res.data,
          products: cart,
        }});
      } catch {}
    };
    stripeToken &&  makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <div className='cart'>
      <Navbar />
      <div className='cart-container'>
        <div className='cart-content'>
          <Grid container columns={12}>
            <Grid item md={7} sm={12} className='shopping-cart-grid'>
              <div className='shopping-cart'>
                <div className='shopping-cart-header'>
                  <h1>Shopping Cart</h1>
                  <p>{itemCount} items</p>
                </div>
                {cart.products.map((product) => (
                  <div className='shopping-cart-content'>
                    <div>
                      <Grid
                        container
                        columns={12}
                        className='shopping-cart-content-grid'
                      >
                        <Grid item md={3} sm={12}>
                          <h3 className='content-heading'>Product Details</h3>
                          <div className='content'>
                            <div className='product-img'>
                              <img src={product.img} />
                            </div>
                          </div>
                        </Grid>
                        <Grid item md={3} sm={12}>
                          <h3 className='content-heading'>Product title</h3>
                          <div className='content'>
                            <p className='content-body'>{product.title}</p>
                          </div>
                        </Grid>

                        <Grid item md={3} sm={12}>
                          <h3 className='content-heading'>Quantity</h3>
                          <div className='content quantity'>
                            <p className='content-body'>
                              <Button className='control'>+</Button>
                              &nbsp;&nbsp;3&nbsp;&nbsp;
                              <Button className='control'>-</Button>
                            </p>
                          </div>
                        </Grid>

                        <Grid item md={3} sm={12}>
                          <h3 className='content-heading'>Price</h3>
                          <div className='content'>
                            <p className='content-body'>{`₹ ${
                              product.price * product.quantity
                            }`}</p>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                ))}
              </div>
            </Grid>

            <Grid item md={5} sm={12}>
              <div className='cart-summary'>
                <div className='cart-summary-header'>
                  <h1>Order Summary</h1>
                </div>
                <div className='cart-summary-content'>
                  <div className='cart-summary-container'>
                    <p>
                      <strong>{itemCount} Items</strong>
                    </p>
                    <p>{cart.total}</p>
                  </div>
                  <div className='cart-summary-container'>
                    <p>
                      <strong>Shipping Address</strong>
                    </p>
                    <p>Dehri on sone, Rohtas, Bihar, 821305</p>
                  </div>
                  <p className='delivery'>Standard Delivery - ₹ 50</p>
                  <hr />
                  <div className='total-cart-price'>
                    <h1>Total Price</h1>
                    <p>{` ${cart.total + 50}`}</p>
                  </div>
                  <StripeCheckout
                    name='Tripund'
                    billingAddress
                    shippingAddress
                    description={`Your total is ₹ ${cart.total}`}
                    amount={cart.total * 100}
                    token={onToken}
                    stripeKey='pk_test_51MvJapSCBJotZpVSpLUtzbi8jq48ZSUd6CwMTKt49Pv1DAdlz9nCdeeJuf6uv2LX4rIwsXNm6J5yEhTrBiNHx2QP00tRm83IqS'
                  >
                    <Button
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        width: "100%",
                      }}
                    >
                      CHECKOUT NOW
                    </Button>
                  </StripeCheckout>
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
