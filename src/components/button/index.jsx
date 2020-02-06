import styled from '@emotion/styled';

export default styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase; /* Transformación de texto a mayúsculas */
  transition: background-color .3s ease; /* Animación de color de fondo */

  &:hover {
    background-color: #326ac0;
    cursor: pointer;  
  }

`;
