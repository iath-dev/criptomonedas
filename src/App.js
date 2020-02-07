import React from 'react';
import { Container, Image, Heading } from './components';
import img from './assets/images/cryptomonedas.png'
import { Form } from './containers';

function App() {

  const [coin, setCoin] = React.useState('');
  const [crypto, setCrypto] = React.useState('');

  React.useEffect(() => {
    if (coin === '' || crypto === '') return;
  }, [coin, crypto]);

  return (
    <Container>
      <div>
        <Image src={img} alt="logo_big" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form setCoin={setCoin} setCrypto={setCrypto} />
      </div>
    </Container>
  );
}

export default App;
