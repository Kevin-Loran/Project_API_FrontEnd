import React, { useState } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth.js/actions';

import { Conteiner } from '../../styles/GlobalStyles';
import {Title, Form} from './styled';
import axios from '../../services/axios';
import history from '../../services/history';


export default function fotos(match){
    const id = get(match, 'params.id', '');
    const [foto, setFoto] = useState('');
    const dispatch = useDispatch();


    React.useEffect(() => {
        const getData = async () => {
            try {
                const {data} = await axios.get(`/aluno/${id}`);
                setFoto(get(data, 'Fotos[0].url', ''));
            } catch (err) {
                toast.error('Erro ao obter imagem');
                history.push('/');
            }
        }

        getData();
    }, [id])
    const handleChange = async e => {
        const file = e.target.files[0];
        const fotoURL = URL.createObjectURL(file);

        setFoto(fotoURL);

        const formData = new FormData();
        formData.append('aluno_id', id);
        formData.append('foto', file);

        try {
            await axios.post('/fotos/', formData, {
                'Content-Type' : 'multipart/form-data',
            });

            toast.success('Foto enviada com sucesso!');
        } catch (err) {
            const { status } = get(err, 'response', '');
            toast.error('Erro ao enviar foto.');

            if(status === 401) dispatch(actions.loginFailure())
        }
    }

    return (
        <Conteiner>
          <Title>Fotos</Title>

          <Form>
        <label htmlFor="foto">
            {foto ? <img src={foto} alt='Foto' /> : 'Selecionar' }
            <input type='file' id='foto' onChange={handleChange}/>
        </label>
          </Form>
      </ Conteiner>
    );
}

Fotos.PropTypes = {
    match: PropTypes.shape({}).isRequired,
};
