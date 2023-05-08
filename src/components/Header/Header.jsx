import React, { useState } from 'react';
import {
  Container,
  LogoContainer,
  Menu,
  MenuIcon,
  MobileIcon,
  NavBar,
  NavBarLinks,
  QuantityProductsCart,
  Wrapper,
} from './HeaderStyles';
import {
  IoSearchOutline,
  IoBagOutline,
  IoPersonOutline,
  IoMenuOutline,
  IoCloseOutline,
} from 'react-icons/io5';
import ModalCart from './Cart/ModalCart';
import * as cartActions from '../../redux/cart/cart-actions';
import { useDispatch, useSelector } from 'react-redux';
import { CartIcon } from './Cart/CartIcon';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const [showSearchBar, setshowSearchBar] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <LogoContainer>
            <img src="../assets/logo.png" alt="Logo" />
          </LogoContainer>
        </Link>

        <NavBar open={showMobileMenu}>
          <Link to="/">
            <NavBarLinks onClick={() => setshowMobileMenu(!showMobileMenu)}>
              Home
            </NavBarLinks>
          </Link>
          <Link to="/login">
            <NavBarLinks onClick={() => setshowMobileMenu(!showMobileMenu)}>
              Login
            </NavBarLinks>
          </Link>

          <NavBarLinks onClick={() => setshowMobileMenu(!showMobileMenu)}>
            Suscribite
          </NavBarLinks>
        </NavBar>

        <Menu>
          <CartIcon />

          <ModalCart />
          <MenuIcon>
            <IoPersonOutline />
          </MenuIcon>
          <MobileIcon onClick={() => setshowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <IoCloseOutline /> : <IoMenuOutline />}
          </MobileIcon>
        </Menu>
      </Wrapper>
    </Container>
  );
};
