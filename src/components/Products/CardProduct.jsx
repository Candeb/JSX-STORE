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
import { useState } from 'react';
import { ModalMessage } from './ModalMessage';

export const CardProduct = ({ title, img, descr, price, id }) => {
  const dispatch = useDispatch();

  const [estadoModal1, cambiarEstadoModal] = useState(false);
  const handlerModal = () => {
    dispatch(cartActions.addToCart({ title, img, price, id }));
    cambiarEstadoModal(!estadoModal1);
    setTimeout(() => {
      cambiarEstadoModal(false);
    }, 2000);
  };

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
      <BtnShopCard onClick={handlerModal}>Agregar al carrito</BtnShopCard>
      <ModalMessage estado={estadoModal1} cambiarEstado={cambiarEstadoModal} />
    </ContainerCardProduct>
  );
};
