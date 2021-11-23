import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f3f3f3d5;
  border-radius: 15px;
  width: 70%;
  padding: 1rem 1.2rem;
  border: solid 3px black;
  height: 150px;
`;

export const Blockquote = styled.div`
  font-size: 25px;
  color: #000000;
  padding-right: 50px;
  padding-left: 50px;
  display: grid;
  align-content: center;
  position: relative;
  text-align: center;
  height: 120px;
  margin-bottom: 20px;
  margin-top: 18px;
  margin-right: 20px;
  margin-left: 20px;
  background: linear-gradient(to right, #000000 4px, transparent 4px) 0 100%,
    linear-gradient(to left, #000000 4px, transparent 4px) 100% 0,
    linear-gradient(to bottom, #000000 4px, transparent 4px) 100% 0,
    linear-gradient(to top, #000000 4px, transparent 4px) 0 100%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
`;
