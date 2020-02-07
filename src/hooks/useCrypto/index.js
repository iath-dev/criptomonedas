import React from 'react';
import { Label, Select } from '../../components';

const useCrypto = (label, initial, options = []) => {

    // Estado del custom hook;
    const [state, setState] = React.useState(initial);

    const SelectCrypto = () => (
        <React.Fragment>
            <Label>{label}</Label>
            <Select onChange={e => setState(e.target.value)} value={state}>
                <option value="">Seleccione</option>
                {/* {options.map(({code, name}) => (
                    <option key={code} value={code}>{name}</option>
                ))} */}
            </Select>
        </React.Fragment>
    )

    // 
    return [state, SelectCrypto, setState];
}

export default useCrypto;
