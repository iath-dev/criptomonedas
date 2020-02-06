import React from 'react';
import { Container, Image, Heading } from './components';
import img from './assets/images/cryptomonedas.png'

function App() {
  return (
    <Container>
      <div>
        <Image src={img} alt="logo_big" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
      </div>
    </Container>
  );
}

export default App;