import styled from 'styled-components';

export const ContainerHero = styled.div`
  display: flex;
  height: 85vh;
  justify-content: center;
`;

export const ContainerDivsHero = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
  font-size: 2em;
  transition: 0.6s all ease;
`;
export const ContainerDivHeroImg = styled(ContainerDivsHero)`
  background-image: url('https://github.com/Candeb/JSX-STORE/blob/main/src/assets/fondoyellow.png?raw=true');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  transition: 0.6s all ease;
`;

export const TitleHero = styled.h2`
  font-family: 'Imbue', serif;
  font-size: 1em;
  cursor: pointer;
  padding: 10px 0px;
  transition: 0.6s all ease;
  width: 100%;
  text-align: center;

  &:hover {
    transition: 2s all ease;
    text-shadow: 1px 1px 10px #ae5052;
  }
`;
