import styled from 'styled-components';
import * as colors from '../../config/colors'

export const Title = styled.h1 `
  background: green;background: ${({ $isRed }) => $isRed ? 'red' : 'green'};
  text-align: center;


  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    background: #eee;
    border: 5px dashed ${colors.primaryColor};
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
  }

  input {
    display: none;
  }
`;

export const Paragrafo = styled.p``;
