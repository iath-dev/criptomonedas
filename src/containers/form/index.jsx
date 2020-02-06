import React from 'react';
import { Button } from '../../components';
import { useCoin } from '../../hooks';

const Form = () => {

    const [state, Select, setState] = useCoin();

    return ( 
        <form>
            <Select />
            <Button type="submit" value="calcular" />
        </form>
     );
}
 
export default Form;
