import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  /* width: 100vw; */
  /* width: 90%; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #b7d1e8; */
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  background: linear-gradient(#2196f3, #2196f3 30%, #1d3548 30%, #1d3548);
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
`;
const ImgBx = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  z-index: 10000;
  transform-origin: top;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    transform: translateY(10px) scale(0.5);
  }
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
`;
const Title = styled.h2`
  text-align: center;
  font-weight: 300;
  color: #2196f3;
  font-size: 20px;
`;
const Desc = styled.p`
  color: lightgray;
  margin-bottom: 5px;
  font-weight: 200;
  font-size: 15px;
`;
const Button = styled.a`
  background: transparent;
  color: white;
  padding: 5px;
  border: 1px solid white;
  letter-spacing: 1px;
  font-size: 10px;
`;

const Card = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <ImgBx>
          <Image src={item.img} />
        </ImgBx>
        <Content>
          <Details>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Link to={"/description"}>
              <Button>             
                    Read More
              </Button>
            </Link>
          </Details>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Card;

// https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

// https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600

// https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
