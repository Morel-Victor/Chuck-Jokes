import styled from 'styled-components';
import img from './assets/ferme.jpg';

export const Background = styled.div`
  height: 100vw;
  background-image: url(${img});
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ed3330;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  &:hover {
    background: #bb0000;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

export const Title = styled.h1`
  font-size: 85px;
  font-weight: 400;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
