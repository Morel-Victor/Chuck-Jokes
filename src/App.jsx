import axios from 'axios';
import { useState } from 'react';
import { Background, Title, Button } from 'style';
import { Reset } from 'styled-reset';
import Cards from './components/ImgCard/index';

import JokeCard from './components/JokeCard/index';

const defaults = [
  'Product Owners never ask Chuck Norris for more features. They ask for mercy.',
];

export default function App() {
  const [joke, setJoke] = useState(defaults);
  const [isShow, setIsShow] = useState(false);

  const getJoke = () => {
    axios
      .get('http://api.icndb.com/jokes/random')
      /* .then((response) => response.data.value.joke) */
      .then(({ data }) => {
        setJoke(data.value.joke);
        console.log(data.value.joke);
      });
  };

  return (
    <div>
      <Background>
        <Reset />
        <Title>Chuck Joke&apos;s</Title>
        <Cards isShow={isShow} />
        <Button
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
          primary
          type="button"
          onClick={getJoke}
        >
          Ramdom Joke
        </Button>
        <JokeCard joke={joke} />
      </Background>
    </div>
  );
}
