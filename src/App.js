import React from 'react';
import { Container, Image, Heading, Spinner } from './components';
import img from './assets/images/cryptomonedas.png'
import { Form, Results } from './containers';
import Axios from 'axios';

function App() {

  const [coin, setCoin] = React.useState('');
  const [crypto, setCrypto] = React.useState('');
  const [result, setResult] = React.useState({});
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    const ConsultApi = async () => {
      if (coin === '' || crypto === '') return;
  
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
  
      const res = await Axios.get(url);
      // Mostrar spinner
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        // Método dinámico de consultar la respuesta.
        setResult(res.data.DISPLAY[crypto][coin]);
      }, 3000);

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
        { load ? <Spinner /> : <Results result={result} />}
      </div>
    </Container>
  );
}

export default App;
