import styled from 'styled-components';
import { TitleCard } from '../Featured/FeaturedStyles';
import { TitleCategoria } from '../Categorias/CategoriasStyles';
import { BtnShopCard } from '../Featured/FeaturedStyles';

export const ContainerProducts = styled.div`
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 20px;
`;

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0px;
  min-height: 150px;
  justify-content: center;

  @media screen and (max-width: 960px) {
    min-height: 380px;
  }
`;

export const TitleProducts = styled(TitleCategoria)`
  z-index: 2;
  text-align: center;
  text-shadow: #2d2d2c94 3px 4px 10px;
  padding: 0px;
`;

export const ChosenCategory = styled.p`
  font-size: 8em;
  color: rgb(121 121 121 / 21%);
  letter-spacing: 5px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  transition: 0.5s all ease;
`;

export const ContainerCardsProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 70px 20px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ButtonVer = styled(BtnShopCard)`
  width: 150px;
  padding: 10px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

// card product

export const ContainerCardProduct = styled.div`
  display: flex;
  min-width: 150px;
  max-width: 250px;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  cursor: pointer;
  transition: 0.5s all ease;
  min-height: 350px;

  &:hover {
    background-color: white;
    transition: 0.8s all ease;
  }
`;

export const ContainerCardImg = styled.div`
  width: 185px;
  transition: all 0.5s ease 0s;
  margin: 0px auto;
  height: 150px;
  display: flex;
  align-items: center;

  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const ContainerCardInfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  line-height: 15px;
`;

export const NameCardProduct = styled(TitleCard)`
  font-size: 1em;
  width: 100%;
  text-align: left;
  height: 40px;
  line-height: 18px;
`;

export const DescCardProduct = styled.p`
  font-size: 0.8em;
  color: #797979;
  min-height: 30px;
`;
