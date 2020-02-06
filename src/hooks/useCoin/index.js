import React from 'react';

/**
 * TODO: Hooks, Funciones.....
 */
const useCoin = () => {

    // Estado del custom hook;
    const [state, setState] = React.useState('');

    const Select = () => (
        <React.Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </React.Fragment>
    )

    // 
    return [state, Select, setState];

}

export default useCoin;
