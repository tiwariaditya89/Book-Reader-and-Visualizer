import styled from "styled-components";
import React, { useEffect, useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Card from "./Card";
import { useRef } from "react";
import Slider from "react-slick";
import { bookItems } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  background-color: #f5fafd;
`;
const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;
const SliderTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: #023047;
  letter-spacing: 1px;
`;
const ButtonNavbar = styled.div``;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
`;
const SliderContent = styled.div`
  padding: 20px;
`;

const BookSlider = ({ item }) => {
  const slider = useRef(null);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products`
        );
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  });



  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <Container>
    
        <SliderHeader>
        <Link to={`/products/${item.cat}`}>
          <SliderTitle>{item.title}</SliderTitle>
          </Link>
          <ButtonNavbar>
            <IconButton onClick={() => slider.current.slickPrev()}>
              <PlayCircleIcon
                sx={{
                  transform: "rotate(180deg)",
                  color: "orange",
                  fontSize: "2rem",
                }}
              />
            </IconButton>
            <IconButton onClick={() => slider.current.slickNext()}>
              <PlayCircleIcon sx={{ color: "orange", fontSize: "2rem" }} />
            </IconButton>
          </ButtonNavbar>
        </SliderHeader>
     
      <SliderContent>
        <Slider ref={slider} {...settings}>
          {product.map((item, index) => {
            return <Card item={item} key={item.id} />;
          })}
        </Slider>
      </SliderContent>
    </Container>
  );
};

export default BookSlider;
