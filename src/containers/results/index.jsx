import React from 'react';
import { Result, Paragraph, Price } from '../../components';
import PropTypes from 'prop-types';

const Results = ({ result }) => {
    if(Object.keys(result).length < 1) return null;

    return ( 
        <Result>
            <Price>Es precio es: <span>{result.PRICE}</span></Price>
            <Paragraph>Precio mas alto del dia: <span>{result.HIGHDAY}</span></Paragraph>
            <Paragraph>Precio mas bajo del dia: <span>{result.LOWDAY}</span></Paragraph>
            <Paragraph>Variación ultimas 24 Horas: <span>{result.CHANGEPCT24HOUR}</span></Paragraph>
            <Paragraph>Ultima actualización: <span>{result.LASTUPDATE}</span></Paragraph>
        </Result>
     );
}

Results.propTypes = {
    result: PropTypes.object.isRequired,
}
 
export default Results;
