import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../Footer/Footer';
import { Grid, Button } from '@mui/material';
import AppBar from '../appbar/index';
import '../../styles/Description.css';

function Description() {
    return (
        <div className="description">
            <AppBar />
            <div className="description-container">
                <div className="description-header">
                    <Grid container columns={12} spacing={3}>
                        <Grid item md={3} sm={12}>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={9} sm={12}>
                            <div className="description-details">
                                <h1>Book Title</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="description-action">
                                    <Button variant="contained" className='read'>Read</Button>
                                    <Button variant="outlined" className='buy'>Buy Now</Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="also-like">
                    <h1>May You Like This</h1>
                    <Grid container className='des-container' columns={12} spacing={2}>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                        <Grid item md={2} sm={12} className='des-grid'>
                            <div className="description-image"></div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Description;