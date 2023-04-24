import React from 'react';
import ReactDOM from 'react-dom/client';
import './Login.css';
import { Button, Grid, TextField } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import signup from '../images/SignUp_image.jpg';

function Signup() {
    return(
        <div className='login-container'>
            <div className="login-content">
                <Grid container columns={12} >
                    <Grid item lg={6} md={6} sm={12} className='img-grid'>
                        <div className="login-img"><img src={signup} alt="" /></div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} className='form-grid'>
                        <div className="login-form-container">
                            <p className='link'><a href="#">Back to home page</a></p>
                            <div className="login-form">
                                <h1>Sign up</h1>
                                <form>
                                    <div className='form-login'>
                                        <label className='login-label'>Email Address</label>
                                        <TextField id="email" className="form-control" label="Email Address" variant="outlined" />
                                    </div>
                                    <div className='form-login'>
                                        <label className='login-label'>Password</label>
                                        <TextField id="password" className="form-control" label="Password" variant="outlined" />
                                    </div>
                                    <div className='form-login'>
                                        <Button variant="contained">Sign up &nbsp; <TrendingFlatIcon /></Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </div>
    );
}

export default Signup;