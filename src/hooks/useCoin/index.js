import React from 'react';
import { Label, Select } from '../../components';

/**
 * TODO: Hooks, Funciones.....
 * @param {string} label Etiqueta del select
 * @param {string} initial Valor inicias
 */
const useCoin = (label, initial, options = []) => {

    // Estado del custom hook;
    const [state, setState] = React.useState(initial);

    const Selection = () => (
        <React.Fragment>
            <Label>{label}</Label>
            <Select onChange={e => setState(e.target.value)} value={state}>
                <option value="">Seleccione</option>
                {options.map(({code, name}) => (
                    <option key={code} value={code}>{name}</option>
                ))}
            </Select>
        </React.Fragment>
    )

    // 
    return [state, Selection, setState];

}

export default useCoin;
