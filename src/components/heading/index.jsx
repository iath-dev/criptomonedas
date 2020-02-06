import styled from "@emotion/styled";

export default styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin-top: 80px;
    margin-bottom: 50px;

    &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
    }

`;
