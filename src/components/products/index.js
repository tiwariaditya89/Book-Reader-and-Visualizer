import {  IconButton } from "@mui/material";
import {
  ButtonNavBar,
  ProductContianer,
  ProductHeader,
  ProductTitle,
  SliderContainer,
} from "../../styles/Products";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "react-multi-carousel/lib/styles.css";
import MultiActionAreaCard from "./MyCard";
import Slider from "react-slick";
import { items } from "./Items";
import React, { useRef } from "react";

export default function Product() {
  const slider = useRef(null);

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
    <ProductContianer>
      <ProductHeader>
        <ProductTitle>Popular Books</ProductTitle>
        <ButtonNavBar>
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
        </ButtonNavBar>
      </ProductHeader>
      <SliderContainer>
        <Slider ref={slider} {...settings}>
          {items.map((item, index) => {
            return <MultiActionAreaCard />;
          })}
        </Slider>
      </SliderContainer>
    </ProductContianer>
  );
}
