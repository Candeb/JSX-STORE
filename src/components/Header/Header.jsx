import React, { useState } from 'react';
import {
  Container,
  LogoContainer,
  Menu,
  MenuIcon,
  MobileIcon,
  NavBar,
  NavBarLinks,
  Wrapper,
} from './HeaderStyles';
import {
  IoPersonOutline,
  IoMenuOutline,
  IoCloseOutline,
} from 'react-icons/io5';
import ModalCart from './Cart/ModalCart';
import * as cartActions from '../../redux/cart/cart-actions';
import { CartIcon } from './Cart/CartIcon';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [click, setClick] = useState(false);

  const handlerMenu = () => {
    setClick(!click);
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <LogoContainer>
            <img
              src="https://github.com/Candeb/JSX-STORE/blob/main/src/assets/logo.png?raw=true"
              alt="Logo"
            />
          </LogoContainer>
        </Link>

        <NavBar click={click}>
          <Link to="/">
            <NavBarLinks onClick={() => handlerMenu()}>Home</NavBarLinks>
          </Link>
          <NavBarLinks onClick={() => handlerMenu()}>Sneakers</NavBarLinks>

          <NavBarLinks onClick={() => handlerMenu()}>Suscribite</NavBarLinks>
        </NavBar>

        <Menu>
          <CartIcon />

          <ModalCart />
          <MenuIcon>
            <IoPersonOutline />
          </MenuIcon>
          <MobileIcon onClick={() => handlerMenu()}>
            {click ? <IoCloseOutline /> : <IoMenuOutline />}
          </MobileIcon>
        </Menu>
      </Wrapper>
    </Container>
  );
};
