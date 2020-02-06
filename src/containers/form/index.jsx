import React from 'react';
import { Button } from '../../components';
import { useCoin, useCrypto } from '../../hooks';
import { coins } from '../../data/options';

const Form = () => {

    // Utilizar useCoin
    const [state, Select, setState] = useCoin('Elige tu moneda', '', coins);
    // Utilizar useCrypto
    const [crypto, SelectCrypto] = useCrypto('Elige tu Crypto-moneda', '');

    return ( 
        <form>
            <Select />
            <SelectCrypto />
            <Button type="submit" value="calcular" />
        </form>
     );
}
 
export default Form;
