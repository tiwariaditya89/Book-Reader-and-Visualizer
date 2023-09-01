import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";


const Container = styled.div`
  height: 60px;
  background-color: #023047;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Logo = styled.span`
  color: white;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 2px;
`;

const Center = styled.div`
  flex: 2;
`;

const SearchContianer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.409);
  border-radius: 25px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  background: none;
  border: none;
  border-radius: 25px;
  font-size: 15px;
  color: white;
  font: inherit;
  &::placeholder {
    color: white;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MenuItem = styled.div`
  cursor: pointer;

  margin-left: 20px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Navbar = () => {
  const quantity  = useSelector(state => state.cart.quantity);
  
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={"/"}>
            <Logo>Tripund</Logo>
          </Link>
        </Left>
        <Center>
          <SearchContianer>
            <Input placeholder='Search for books...' />
            <SearchIcon
              style={{ color: "white", fontSize: 20, marginRight: 12 }}
            />
          </SearchContianer>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color='warning'>
              <NotificationsIcon style={{ color: "white" }} />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Link to={"/cart"}>
              <Badge badgeContent={quantity} color='secondary'>
                <ShoppingCartOutlinedIcon style={{ color: "white" }} />
              </Badge>
            </Link>
          </MenuItem>
          <MenuItem>
            <Image src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
