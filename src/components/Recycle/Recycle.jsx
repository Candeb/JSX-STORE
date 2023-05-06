import React from 'react';
import {
  ContainerCardRecycle,
  ContainerRecycle,
  ContainerSloganRecycle,
  ContainerTitleRecycle,
  OptionsRecycle,
  TitleRecycle,
} from './RecycleStyles';

export const Recycle = () => {
  return (
    <ContainerRecycle>
      <ContainerCardRecycle>
        <OptionsRecycle>Más flores, menos residuos</OptionsRecycle>
        <OptionsRecycle>Reacondicionamiento</OptionsRecycle>{' '}
        <OptionsRecycle>Nuevas vidas a productos sin uso</OptionsRecycle>
      </ContainerCardRecycle>
      <ContainerTitleRecycle>
        <TitleRecycle>PIEZAS DISEÑADAS PENSANDO EN EL PLANETA</TitleRecycle>
        <ContainerSloganRecycle>
          REFRESH RETHINK & RECYCLE
        </ContainerSloganRecycle>
      </ContainerTitleRecycle>
      <ContainerCardRecycle>
        <OptionsRecycle>Reciclaje y donación</OptionsRecycle>{' '}
        <OptionsRecycle>Materiales con menos impacto</OptionsRecycle>
        <OptionsRecycle>Soluciones circulares</OptionsRecycle>
      </ContainerCardRecycle>
    </ContainerRecycle>
  );
};
