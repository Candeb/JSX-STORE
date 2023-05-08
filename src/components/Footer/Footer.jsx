import React from 'react';
import { LogoContainer } from '../Header/HeaderStyles';
import {
  ContainerFooter,
  ContainerFooterInfo,
  TitleFooterInfo,
  ContainerFooterByParts,
  ContainerItemsFooter,
  ItemsFooter,
  ContainerFooterNavLinks,
  FooterNavBarLinks,
  Copyright,
} from './FooterStyles';
import {
  SiFacebook,
  SiPaypal,
  SiInstagram,
  SiTwitter,
  SiMercadopago,
} from 'react-icons/si';
import { FaCcVisa, FaBitcoin, FaPinterest } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate;
  return (
    <ContainerFooter>
      <ContainerFooterByParts>
        <ContainerFooterInfo>
          <TitleFooterInfo> medios de pago </TitleFooterInfo>
          <ContainerItemsFooter>
            <ItemsFooter>
              <SiMercadopago />
            </ItemsFooter>
            <ItemsFooter>
              <FaBitcoin />
            </ItemsFooter>
            <ItemsFooter>
              <SiPaypal />
            </ItemsFooter>
            <ItemsFooter>
              <FaCcVisa />
            </ItemsFooter>
          </ContainerItemsFooter>
        </ContainerFooterInfo>

        <Link to="/">
          <LogoContainer>
            <img
              src="https://github.com/Candeb/JSX-STORE/blob/main/src/assets/logo.png?raw=true"
              alt="Logo"
            />
          </LogoContainer>
        </Link>

        <ContainerFooterInfo>
          <TitleFooterInfo>encontranos aca</TitleFooterInfo>
          <ContainerItemsFooter>
            <ItemsFooter>
              <SiInstagram />
            </ItemsFooter>
            <ItemsFooter>
              <SiTwitter />
            </ItemsFooter>
            <ItemsFooter>
              <SiFacebook />
            </ItemsFooter>
            <ItemsFooter>
              <FaPinterest />
            </ItemsFooter>
          </ContainerItemsFooter>
        </ContainerFooterInfo>
      </ContainerFooterByParts>

      <ContainerFooterByParts>
        <ContainerFooterNavLinks>
          <FooterNavBarLinks>Home </FooterNavBarLinks>
          <FooterNavBarLinks>Sneakers</FooterNavBarLinks>
          <FooterNavBarLinks>Suscribite</FooterNavBarLinks>
          <FooterNavBarLinks>Politica de Privacidad</FooterNavBarLinks>
        </ContainerFooterNavLinks>
      </ContainerFooterByParts>

      <Copyright> © 2023 JSX Store creada por Candela Bustos </Copyright>
    </ContainerFooter>
  );
};
