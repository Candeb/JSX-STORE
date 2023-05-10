import styled from 'styled-components';
import { ContainerFormLogin } from '../Login/LoginStyles';

export const ContainerRegister = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  padding: 0px 30px;
`;

export const ContainerImgRegister = styled.div`
  display: flex;
  align-items: center;

  & img {
    transition: 0.5s all ease;
    height: 350px;

    &:hover {
      transform: rotateY(180deg);
      transform-style: preserve-3d;
      transition: 0.5s all ease;
    }
  }
`;

export const ContainerFormRegister = styled(ContainerFormLogin)`
  gap: 10px;
  width: auto;
`;
