import React from 'react';
import { Button } from '../../components';
import { useCoin, useCrypto } from '../../hooks';
import { coins } from '../../data/options';
import Axios from 'axios';

const Form = () => {
    // Opciones de Criptomonedas
    const [options, setOptions] = React.useState([]);
    // Utilizar useCoin
    const [state, Select, setState] = useCoin('Elige tu moneda', '', coins);
    // Utilizar useCrypto
    const [crypto, SelectCrypto] = useCrypto('Elige tu Crypto-moneda', '', options);

    React.useEffect(() => {
        const consultApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await Axios.get(url);
            setOptions(result.data.Data);
        }
        consultApi();
    }, []);

    return ( 
        <form>
            <Select />
            <SelectCrypto />
            <Button type="submit" value="calcular" />
        </form>
     );
}
 
export default Form;
