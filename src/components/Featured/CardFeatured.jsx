import React, { useState } from 'react';
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
import { ModalMessage } from '../Products/ModalMessage';

export const CardFeatured = ({ id, title, img, price }) => {
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
    <ContainerCardFeatured>
      <ContainerImg src={img} alt={title} />
      <ContainerInfoCard>
        <TitleCard>{title}</TitleCard>
        <PriceCard>{formatPrice(price)}</PriceCard>
      </ContainerInfoCard>
      <BtnShopCard onClick={handlerModal}>Comprar</BtnShopCard>
      <ModalMessage estado={estadoModal1} cambiarEstado={cambiarEstadoModal} />
    </ContainerCardFeatured>
  );
};
