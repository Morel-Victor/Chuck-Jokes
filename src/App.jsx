import axios from 'axios';
import { useState } from 'react';
import { Background, Title, Button } from 'style';
import { Reset } from 'styled-reset';
import ImgCards from './components/ImgCard/index';
import JokeCard from './components/JokeCard/index';

const defaults = ['Welcome to my ranch friend Click on the button if you dare'];

export default function App() {
  const [joke, setJoke] = useState(defaults);
  const [isShow, setIsShow] = useState(false);
  const [isOwnRisk, setIsOwnRisk] = useState(false);
  const [explosion, setExplosion] = useState(false);

  const getJoke = () => {
    axios.get('http://api.icndb.com/jokes/random').then(({ data }) => {
      const datas = data.value.joke;
      datas.replace(/['"]+/g, '');
      setJoke(datas);
    });
  };

  const getExplosion = () => {
    setExplosion(true);
    const timer = setTimeout(() => setExplosion(false), 3000);
    return () => clearTimeout(timer);
  };

  function HatUp() {
    setIsShow(true);
    setIsOwnRisk(true);
  }

  function HatDown() {
    setIsShow(false);
    setIsOwnRisk(false);
  }

  return (
    <div>
      <Background>
        <Reset />
        <Title>Chuck Joke&apos;s</Title>
        <ImgCards isShow={isShow} isOwnRisk={isOwnRisk} explosion={explosion} />
        <Button
          onMouseEnter={() => HatUp()}
          onMouseLeave={() => HatDown()}
          primary
          type="button"
          onClick={() => {
            getJoke();
            getExplosion();
            setIsOwnRisk(false);
          }}
        >
          Ramdom Joke
        </Button>
        <JokeCard joke={joke} />
      </Background>
    </div>
  );
}
