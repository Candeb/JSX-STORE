import React from 'react';
import {
  ContainerCardsFeatured,
  ContainerFeatured,
  TitleFeatured,
} from './FeaturedStyles';
import { CardFeatured } from './CardFeatured';
import { useSelector } from 'react-redux';

export const Featured = () => {
  const recommended = useSelector((state) => state.recommended.recommended);

  return (
    <ContainerFeatured>
      <TitleFeatured>DESTACADOS FLASH</TitleFeatured>
      <ContainerCardsFeatured>
        {recommended.map((recomendado) => (
          <CardFeatured key={recomendado.id} {...recomendado} />
        ))}
      </ContainerCardsFeatured>
    </ContainerFeatured>
  );
};
