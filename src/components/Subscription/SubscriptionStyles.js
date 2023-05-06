import styled from 'styled-components';
import { BtnShopCard } from '../Featured/FeaturedStyles';

export const ContainerSubs = styled.div`
  background-color: #150b04;
  width: 100%;
  height: 60vh;
  padding: 60px 0px;
  display: flex;
`;

export const ContainerTextSubs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  justify-content: center;
  align-items: flex-end;
  color: #f5f5f5;
  padding: 0px 25px;
  text-align: end;
`;

export const TitleSubs = styled.p`
  font-size: 2.1em;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const ContainerFormSubs = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const FormSubs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const InputEmail = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 19px;
  background: #e3e3e3;
  border: none;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.6) 1px 9px 17px 0px;
    transition: 0.5s all ease;
  }
`;

export const BtnSubmit = styled(BtnShopCard)`
  background-color: transparent;

  &:hover {
    background-color: black;
  }
`;
