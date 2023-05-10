import React from 'react';
import { HeaderUser } from '../../components/Header/HeaderUser';
import {
  BtnSubmit,
  Container,
  ContainerFormLogin,
  ContainerLogin,
  InputFormLogin,
  LabelInputForm,
  TitleLogin,
} from '../Login/LoginStyles';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
  return (
    <>
      <HeaderUser />
      <ContainerLogin>
        <TitleLogin>Reestablecer contraseña</TitleLogin>
        <ContainerFormLogin>
          <Container>
            <LabelInputForm>ingrese una contraseña nueva</LabelInputForm>
            <InputFormLogin />
          </Container>
          <Container>
            <LabelInputForm>repita la nueva contraseña</LabelInputForm>
            <InputFormLogin />
          </Container>
          <Link to="/">
            {' '}
            <BtnSubmit> ingresar con la nueva contraseña </BtnSubmit>
          </Link>
        </ContainerFormLogin>
      </ContainerLogin>
    </>
  );
};
