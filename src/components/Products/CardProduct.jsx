import React from 'react';
import * as cartActions from '../../redux/cart/cart-actions';
import { useDispatch } from 'react-redux';
import { PriceCard, BtnShopCard } from '../Featured/FeaturedStyles';
import {
  ContainerCardImg,
  ContainerCardInfoProduct,
  ContainerCardProduct,
  DescCardProduct,
  NameCardProduct,
} from './ProductsStyles';
import { formatPrice } from '../../utils';

export const CardProduct = ({ title, img, descr, price, id }) => {
  const dispatch = useDispatch();

  return (
    <ContainerCardProduct>
      <ContainerCardImg>
        <img src={img} alt={title} />
      </ContainerCardImg>
      <ContainerCardInfoProduct>
        <NameCardProduct> {title} </NameCardProduct>
        <DescCardProduct>{descr}</DescCardProduct>
        <PriceCard> {formatPrice(price)} </PriceCard>
      </ContainerCardInfoProduct>
      <BtnShopCard
        onClick={() =>
          dispatch(cartActions.addToCart({ title, img, price, id }))
        }
      >
        {' '}
        Agregar al carrito{' '}
      </BtnShopCard>
    </ContainerCardProduct>
  );
};
