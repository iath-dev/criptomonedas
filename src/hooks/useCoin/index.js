import React from 'react';

/**
 * TODO: Hooks, Funciones.....
 * @param {string} label Etiqueta del select
 * @param {string} initial Valor inicias
 */
const useCoin = (label, initial, options = []) => {

    // Estado del custom hook;
    const [state, setState] = React.useState(initial);

    const Select = () => (
        <React.Fragment>
            <label>{label}</label>
            <select onChange={e => setState(e.target.value)} value={state}>
                <option value="">Seleccione</option>
                {options.map(({code, name}) => (
                    <option key={code} value={code}>{name}</option>
                ))}
            </select>
        </React.Fragment>
    )

    // 
    return [state, Select, setState];

}

export default useCoin;
