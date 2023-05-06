import React from 'react';
import * as cartActions from '../../redux/cart/cart-actions';
import {
  BtnShopCard,
  ContainerCardFeatured,
  ContainerImg,
  ContainerInfoCard,
  PriceCard,
  TitleCard,
} from './FeaturedStyles';
import { formatPrice } from '../../utils/index';
import { useDispatch } from 'react-redux';

export const CardFeatured = ({ id, title, img, price }) => {
  const dispatch = useDispatch();

  return (
    <ContainerCardFeatured>
      <ContainerImg src={img} alt={title} />
      <ContainerInfoCard>
        <TitleCard>{title}</TitleCard>
        <PriceCard>{formatPrice(price)}</PriceCard>
      </ContainerInfoCard>
      <BtnShopCard
        onClick={() =>
          dispatch(cartActions.addToCart({ title, img, price, id }))
        }
      >
        Comprar
      </BtnShopCard>
    </ContainerCardFeatured>
  );
};
