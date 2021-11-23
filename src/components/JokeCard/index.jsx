import PropTypes from 'prop-types';
import { Container, Blockquote } from './style';

export default function JokeCard({ joke }) {
  return (
    <Container>
      <Blockquote>
        {joke}
        <br />
        <br />
        <cite>&nbsp;~ Chuck norris ~</cite>
      </Blockquote>
    </Container>
  );
}

JokeCard.propTypes = {
  joke: PropTypes.string,
};
JokeCard.defaultProps = {
  joke: '',
};
