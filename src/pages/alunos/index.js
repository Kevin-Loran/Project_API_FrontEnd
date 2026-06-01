import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation
} from 'react-icons/fa';

import { Conteiner } from '../../styles/GlobalStyles';
import { AlunosConteiner, Profilepicture, NovoAluno } from './styled';
import axios from '../../services/axios';
import { toast } from 'react-toastify';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }

    getData();
  }, []);

  const handleDeleteAsk = e => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('style', 'display: block');
    e.currentTarget.remove();
  }

  const handleDelete = async (e, id, index) => {
    e.persist();

    try{
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [ ...alunos ];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
    }catch(err){
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Voce precisa fazer login');
      }  else {
        toast.error('Ocorreu um erro ao excluir aluno.')
      }

      setIsLoading(false);
    }
  }
  return (
    <Conteiner>
      <h1>alunos</h1>

        <NovoAluno to="/aluno/">Novo aluno</NovoAluno>


      <AlunosConteiner>
        {alunos.map((aluno, index) => {
          const foto = get(aluno, 'Fotos[0].url', false);

          return (
            <div key={String(aluno.id)}>
              <Profilepicture>
                {foto ? (
                  <img src={foto} alt="" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </Profilepicture>

              <span>{aluno.nome}</span>
              <span>{aluno.email}</span>

              <Link to={`/aluno/${aluno.id}/edit`}>
                <FaEdit size={16} />
              </Link>

              <Link  onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose size={16} />
              </Link>

              <FaExclamation 
              size={16}
               style={{ display: 'none', cursor: 'pointer' }}
               onClick={e => handleDelete(e, aluno.id, index)}
               />
            </div>
          );
        })}
      </AlunosConteiner>
    </Conteiner>
  );
}