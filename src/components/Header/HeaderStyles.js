import styled from 'styled-components';

// contenedor de todo el header
export const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// header

export const Wrapper = styled.header`
  padding: 0px 20px;
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1300px;
  align-items: center;
  justify-content: space-between;
`;

// contenedor de logo

export const LogoContainer = styled.div`
  height: 70px;
  display: flex;
  transition: 0.5s all ease;
`;

// contenedor de items/rutas/menu hamburguesa

export const NavBar = styled.ul`
  display: flex;
  gap: 30px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 100px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    width: 100%;
    height: 90vh;
    flex-direction: column;
    align-items: center;
    transition: 0.9s all ease;
    background-color: #150b04;
    justify-content: center;
    gap: 0px;
  }
`;

// items, rutas

export const NavBarLinks = styled.li`
  font-size: 15px;
  list-style: none;
  cursor: pointer;
  height: 100px;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: 0.5s all ease;

  @media screen and (min-width: 961px) {
    &:hover {
      transition: 0.5s all ease;
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: 960px) {
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1px;
    flex-wrap: wrap;

    &:hover {
      color: #1a1d3b;
      background-color: #f5f5f5;
      width: 100%;
      display: flex;
      justify-content: center;
      transition: 0.5s all ease;
    }
  }
`;

// contenedor para iconos

export const Menu = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

// contenedor icono cart

export const ContainerCartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// iconos

export const MenuIcon = styled.div`
  color: #f5f5f5;
  height: 80px;
  font-weight: 900;
  font-size: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const QuantityProductsCart = styled.span`
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  padding: 4px 6px;
  position: relative;
  bottom: 8px;
  left: 13px;
  background: #150b04;
  font-weight: 600;
  font-size: 13px;
`;

export const MenuIconCart = styled(MenuIcon)`
  position: absolute;
`;

// icono menu hamburguesa

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    cursor: pointer;
    color: #f5f5f5;
    font-size: 30px;
    display: flex;
    align-items: center;
  }
`;
