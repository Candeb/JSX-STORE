import React, { useRef } from 'react';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Recycle } from '../../components/Recycle/Recycle';
import { Featured } from '../../components/Featured/Featured';
import { Categorias } from '../../components/Categorias/Categorias';
import { Products } from '../../components/Products/Products';
import { Subscription } from '../../components/Subscription/Subscription';

import { HomeWrapper } from './HomeStyles';

export const Home = () => {
  const productsRef = useRef();

  const doScroll = () => {
    console.log(productsRef.current.getBoundingClientRect());
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y
    );
  };

  return (
    <HomeWrapper>
      <Header />
      <Hero doScroll={doScroll} />
      <Recycle />
      <Featured />

      <Categorias />
      <Products />
      <Subscription />
    </HomeWrapper>
  );
};
