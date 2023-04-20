import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../styles/Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid } from '@mui/material';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="footer-header">
                    <h3>Tripund</h3>
                </div>
                <div className="footer-body">
                    <Grid container columns={12} spacing={2}>
                        <Grid item md={6} sm={12}>
                            <div className="footer-about">
                                <h3>About <span>us</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, perferendis nobis dolor expedita libero sint ex quod autem, unde eius at explicabo iure facilis est dolore facere delectus sed quaerat!</p>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <div className="footer-follow">
                                <h3>Follow <span>us</span></h3>
                                <div className="follow-links">
                                    <a href='#'><FacebookOutlinedIcon className='social-link'/></a>
                                    <a href='#'><InstagramIcon className='social-link' /></a>
                                    <a href='#'><WhatsAppIcon className='social-link' /></a>
                                    <a href='#'><TwitterIcon className='social-link' /></a>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
        // <div className='footer-container'>
        //     <div className="footer">
        //         <div className='footer-title'>
        //             <h3>Tripund</h3>
        //         </div>
        //         <hr/>
        //         <div className='footer-body'>
        //             <div className='footer-about'>
        //                 <h3>About <span>us</span></h3>
        //                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, perferendis nobis dolor expedita libero sint ex quod autem, unde eius at explicabo iure facilis est dolore facere delectus sed quaerat!</p>
        //             </div>
                
        //             <div className='footer-follow'>
        //                 <h3>Follow <span>us</span></h3>
        //                 <div className='follow-links'>
        //                     <a href='#'><FacebookOutlinedIcon className='social-link'/></a>
        //                     <a href='#'><InstagramIcon className='social-link' /></a>
        //                     <a href='#'><WhatsAppIcon className='social-link' /></a>
        //                     <a href='#'><TwitterIcon className='social-link' /></a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Footer;