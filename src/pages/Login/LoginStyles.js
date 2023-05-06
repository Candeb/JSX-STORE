import styled from 'styled-components';
import BtnShop from '../../components/Header/Cart/ModalCartStyles';
import { ContainerTextSubs } from '../../components/Subscription/SubscriptionStyles';

export const ContainerLogin = styled.div`
  color: white;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 85vh;
`;

export const ContainerFormLogin = styled.div`
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 70vw;
  background-color: #150b04;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputFormLogin = styled.input``;

export const LabelInputForm = styled.label`
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 0px;
  font-weight: 600;
`;

export const BtnSubmit = styled(BtnShop)`
  color: black;
`;

export const ForgotPassword = styled.p`
  text-align: center;
`;
