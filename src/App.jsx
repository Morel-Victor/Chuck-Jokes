import axios from 'axios';
import { useState } from 'react';
import { Background, Title, Button } from 'style';
import { Reset } from 'styled-reset';
import Cards from './components/ImgCard/index';
import JokeCard from './components/JokeCard/index';

const defaults = ['Welcome to my ranch friend Click on the button if you dare'];

export default function App() {
  const [joke, setJoke] = useState(defaults);
  const [isShow, setIsShow] = useState(false);
  const [isOwnRisk, setIsOwnRisk] = useState(false);

  const getJoke = () => {
    axios.get('http://api.icndb.com/jokes/random').then(({ data }) => {
      const datas = data.value.joke;
      datas.replace(/['"]+/g, '');
      setJoke(datas);
      console.log();
    });
  };

  function animationHat() {
    setIsShow(true);
    setIsOwnRisk(true);
  }

  function animationChuck() {
    setIsShow(false);
    setIsOwnRisk(false);
  }

  return (
    <div>
      <Background>
        <Reset />
        <Title>Chuck Joke&apos;s</Title>
        <Cards isShow={isShow} isOwnRisk={isOwnRisk} />
        <Button
          onMouseEnter={() => animationHat()}
          onMouseLeave={() => animationChuck()}
          primary
          type="button"
          onClick={() => {
            getJoke();
          }}
        >
          Ramdom Joke
        </Button>
        <JokeCard joke={joke} />
      </Background>
    </div>
  );
}
