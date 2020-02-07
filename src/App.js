import React from 'react';
import { Container, Image, Heading } from './components';
import img from './assets/images/cryptomonedas.png'
import { Form } from './containers';
import Axios from 'axios';

function App() {

  const [coin, setCoin] = React.useState('');
  const [crypto, setCrypto] = React.useState('');

  React.useEffect(() => {
    const ConsultApi = async () => {
      if (coin === '' || crypto === '') return;
  
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
  
      const result = await Axios.get(url);
      console.log(result.data.DISPLAY[crypto][coin]);
    }
    ConsultApi();
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
