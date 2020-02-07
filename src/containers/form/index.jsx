import React from 'react';
import { Button, Error } from '../../components';
import { useCoin, useCrypto } from '../../hooks';
import { coins } from '../../data/options';
import Axios from 'axios';

const Form = () => {
    // Opciones de Criptomonedas
    const [options, setOptions] = React.useState([]);
    // Utilizar useCoin
    const [coin, Select] = useCoin('Elige tu moneda', '', coins);
    // Utilizar useCrypto
    const [crypto, SelectCrypto] = useCrypto('Elige tu Crypto-moneda', '', options);
    const [error, setError] = React.useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        if(coin === '' || crypto === '') {
            setError(true);
            return;
        }
        setError(false);
    }

    React.useEffect(() => {
        const consultApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await Axios.get(url);
            setOptions(result.data.Data);
        }
        consultApi();
    }, []);

    return ( 
        <form onSubmit={handleSubmit}>
            { error && <Error>Hay un error</Error>}
            <Select />
            <SelectCrypto />
            <Button type="submit" value="calcular" />
        </form>
     );
}
 
export default Form;
