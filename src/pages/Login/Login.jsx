import React from 'react';
import {
  Container,
  ContainerFormLogin,
  ContainerLogin,
  LabelInputForm,
  InputFormLogin,
  BtnSubmit,
  ForgotPassword,
} from './LoginStyles';

export const Login = () => {
  return (
    <ContainerLogin>
      <ContainerFormLogin>
        <Container>
          <LabelInputForm> nombre </LabelInputForm>
          <InputFormLogin />
        </Container>
        <Container>
          <LabelInputForm> contraseña </LabelInputForm>
          <InputFormLogin />
        </Container>
        <BtnSubmit> iniciar sesion </BtnSubmit>
        <ForgotPassword>Olvide mi contraseña</ForgotPassword>
      </ContainerFormLogin>
    </ContainerLogin>
  );
};
