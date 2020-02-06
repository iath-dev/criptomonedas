import React from 'react';
import { Button } from '../../components';
import { useCoin } from '../../hooks';
import { coins } from '../../data/options';

const Form = () => {

    const [state, Select, setState] = useCoin('Elige tu moneda', '', coins);

    return ( 
        <form>
            <Select />
            <Button type="submit" value="calcular" />
        </form>
     );
}
 
export default Form;
