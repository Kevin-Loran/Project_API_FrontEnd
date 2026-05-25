import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { Conteiner } from '../../styles/GlobalStyles';
import { Form } from './styled'
import * as action from '../../store/modules/auth.js/actions'

export default function Login(props){
    const dispatch = useDispatch();

    const prevPath = get(props, 'location.state.prevPath', '/')

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();

        let formErrors = false;

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('E-mail inválido.');
        }
        
        if (password.length < 3 || password.length > 50) {
            formErrors = true;
            toast.error('Senha inválida');
        }

        if (formErrors) return;

        dispatch(action.loginRequest({ email, password, prevPath }));
    }

    return (
        <Conteiner>
            <h1>Login</h1>
            
            <Form onSubmit={handleSubmit}>
             <input 
                type='text'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Seu email'
             />
             <input 
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Seu senha'
             />
             <button type='submit'>Acessar</button>
            </Form>
      </ Conteiner>
    );
}
