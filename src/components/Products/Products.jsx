import React, { useEffect, useState } from 'react';
import {
  ButtonVer,
  ChosenCategory,
  ContainerButtons,
  ContainerCardsProducts,
  ContainerProducts,
  ContainerTitles,
  TitleProducts,
} from './ProductsStyles';
import { CardProduct } from './CardProduct';
import { useSelector } from 'react-redux';
import { INITIAL_LIMIT } from '../../utils';

export const Products = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector((state) => state.products.products);
  let totalProducts = useSelector((state) => state.products.totalProducts);

  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  if (selectedCategory) {
    products = products.filter(
      (producto) => producto.category === selectedCategory
    );
  }

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <ContainerProducts>
      <ContainerTitles>
        <TitleProducts> NUESTROS PRODUCTOS</TitleProducts>
        <ChosenCategory>{selectedCategory} </ChosenCategory>
      </ContainerTitles>
      <ContainerCardsProducts>
        {products.map((producto, i) => {
          if (limit > i) {
            return <CardProduct key={producto.id} {...producto} />;
          }
          return null;
        })}
      </ContainerCardsProducts>

      <ContainerButtons>
        {' '}
        <ButtonVer
          onClick={() => setLimit(limit - INITIAL_LIMIT)}
          disabled={INITIAL_LIMIT === limit}
        >
          Ver menos
        </ButtonVer>
        <ButtonVer
          onClick={() => setLimit(limit + INITIAL_LIMIT)}
          disabled={totalProducts <= limit}
        >
          Ver mas
        </ButtonVer>
      </ContainerButtons>
    </ContainerProducts>
  );
};
