import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
// overlay

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100vw;

  height: 100vh;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(5px);
    `}

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

// cart

export const ContainerCart = styled.div`
  background-color: #f5f5f5;
  position: fixed;
  width: 40vw;
  min-width: 400px;
  top: 0;
  right: 0;
  flex-direction: column;
  height: 100vh;
  padding: 1.6rem;
  z-index: 99;

  @media screen and (max-width: 450px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BtnCloseCart = styled(motion.button)`
  width: 20px;
  font-size: 25px;
  border: none;
  background: transparent;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const TitleCart = styled.p`
  color: #150b04;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #373739b8;
  font-size: 18px;
  padding: 5px;
  letter-spacing: 1px;
  font-weight: 900;
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  margin: auto;
  scroll-behavior: smooth;
  overflow-y: scroll;
  align-items: center;
  cursor: auto;
`;

export const ContainerInfoPrices = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerSubtotalCart = styled.div`
  display: flex;
  justify-content: space-between;
  color: #373739b8;
  font-family: 'Kanit', sans-serif;
  font-weight: 400;
  padding: 5px 10px;
`;

export const ContainerTotalCart = styled.div`
  display: flex;
  justify-content: space-between;
  color: #150b04;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  padding: 10px 0px;
`;

export const ContainerTextInfo = styled.span`
  font-size: 15px;
  letter-spacing: 1px;
`;

const BtnShop = styled.button`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 8px;
  border: 0.2px solid #150b04;
  background-color: transparent;
  margin: auto;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  color: #150b04;

  &:hover {
    background-color: #150b04;
    color: #f5f5f5;
    transition: 0.8s all ease;
  }
`;

export default BtnShop;

// cart en caso de que este vacio

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 30px;
`;

export const IconEmptyCart = styled.div`
  color: #e3e3e3;
  font-size: 7rem;
`;

export const TextEmptyCart = styled.span`
  color: #373739b8;
  font-weight: 600;
  text-align: center;
  font-size: 1.5rem;
`;
// card cart

export const CardProductCart = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px;
  width: 90%;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  justify-content: center;
`;

export const ImgProductCart = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const DescriptionProductCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
`;

export const TitleProductCart = styled.div`
  font-size: 11px;
  color: #150b04;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
export const TextDescriptionProductCart = styled.span`
  font-size: 11px;
  color: #373739b8;
  font-weight: 600;
`;

export const ContainerQuantityPrice = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-right: 10px;
`;

export const ContainerQuantityProduct = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const QuantityProduct = styled.span`
  font-size: 13px;
  color: #150b04;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const BtnQuantity = styled.button`
  font-size: 13px;
  color: #150b04;
  padding: 2px 4px;
  border: none;
  border-radius: 5px;
  background-color: #e3e3e3;
  cursor: pointer;
`;

export const PriceProductCart = styled.span`
  font-size: 15px;
  color: #150b04;
  display: flex;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
