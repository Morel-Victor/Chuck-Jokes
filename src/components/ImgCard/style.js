import styled from 'styled-components';

export const ImgChuck = styled.img`
  height: 400px;
  border: solid 3px black;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
`;

export const WhiteBackground = styled.div`
  height: 404px;
  width: 545px;
  background-color: white;
  position: fixed;
  z-index: 1;
`;

export const Tooltip = styled.div`
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  margin-left: 330px;
  z-index: 17;
  bottom: 500px;
  width: 200px;
  height: 40px;
  color: white;
  background: #000000;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  border: solid 2px black;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: '';
    position: absolute;
    right: 100%;
    top: 10px;
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-right: 29px solid black;
    border-bottom: 9px solid transparent;
  }
`;

export const ImgExplosion = styled.img`
  height: 404px;
  width: 545px;
  position: fixed;
  z-index: 2;
  top: 167px;
  animation: fadeIn 3s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
