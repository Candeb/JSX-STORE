import React from 'react';
import {
  ContainerCardsCategorias,
  ContainerCategorias,
  TitleCategoria,
} from './CategoriasStyles';
import { Categoria } from './Categoria';
import { useSelector } from 'react-redux';

export const Categorias = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <ContainerCategorias>
      <TitleCategoria>¿Que buscas hoy?</TitleCategoria>
      <ContainerCardsCategorias>
        {categories.map((categoria) => (
          <Categoria key={categoria.id} {...categoria} />
        ))}
      </ContainerCardsCategorias>
    </ContainerCategorias>
  );
};
