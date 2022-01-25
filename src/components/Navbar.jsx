import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    @media only screen and (max-width: 380px) {
      height: 50px;
    }
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 380px) {
      padding: 10px 0px;
    }
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    @media only screen and (max-width: 380px) {
      display: none;
    }
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    @media only screen and (max-width: 380px) {
      margin-left: 10px;
    }
`

const Input = styled.input`
    border: none;
    @media only screen and (max-width: 380px) {
      width: 50px;
    }
`

const Center = styled.div`
    text-align: center;
    flex: 1;
`

const Logo = styled.h1`
    font-weight: bold;
    @media only screen and (max-width: 380px) {
      font-size: 15px;
    }
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media only screen and (max-width: 380px) {
      justify-content: center;
      flex: 2;
    }
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    @media only screen and (max-width: 380px) {
      font-size: 12px;
      margin-left: 10px;
    }
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    console.log(quantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>RM Multimarcas</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </Link>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
