import React from 'react';
import { useDispatch } from 'react-redux';


import { Conteiner } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';


export default function Login(){
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

   dispatch(exampleActions.clicaBotaoRequest());

  }

    return (
        <Conteiner>
        <Title $isRed={false}>
           Login
           <small>Oie</small>
        </ Title>
        <Paragrafo> alguma coisa muito bonita </Paragrafo>
        <button type='button' onClick={handleClick}>Enviar</button>
      </ Conteiner>
    )
}
