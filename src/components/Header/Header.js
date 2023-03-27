import React from "react";
import { ReactDOM } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
 import '../../styles/Header.css';
 import img1 from "../../static/images/img1.jpg";
 import img2 from "../../static/images/img2.jpg";
 import StarOutlineIcon from '@mui/icons-material/StarOutline';


function Header () {
    return (
		<div className="header-container">
			<Carousel className="carousel"
				showThumbs={false}
				autoPlay={true}
				transitionTime={3}
				infiniteLoop={true}
				showStatus={false}
			>
				<div className="header-details-container">
					<img src={img1} className="header-image" alt="something went wrong"/>
					<div className="header-details">
						<h2 className="header-title">Book Title</h2>
						<p className="header-subtitle">subtitle of the book</p>
						<p className="header-info">category | 230 pages</p>
						<p className="header-rating">4 <StarOutlineIcon sx={{fontSize: "16px"}}/></p>
					</div>
					<div className="overlay"></div>
				</div>
				<div className="header-details-container">
					<img src={img2} className="header-image" alt="something went wrong"/>
					<div className="header-details">
						<h2 className="header-title">Book Title</h2>
						<p className="header-subtitle">subtitle of the book</p>
						<p className="header-info">category | 230 pages</p>
						<p className="header-rating">4 <StarOutlineIcon sx={{fontSize: "16px"}}/></p>
					</div>
					<div className="overlay"></div>
				</div>
				<div className="header-details-container">
					<img src={img2} className="header-image" alt="something went wrong"/>
					<div className="header-details">
						<h2 className="header-title">Book Title</h2>
						<p className="header-subtitle">subtitle of the book</p>
						<p className="header-info">category | 230 pages</p>
						<p className="header-rating">4.5 <StarOutlineIcon sx={{fontSize: "16px"}}/></p>
					</div>
					<div className="overlay"></div>
				</div>
            </Carousel>
			
		</div>
    );
}

export default Header;