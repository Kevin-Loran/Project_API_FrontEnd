import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
} from 'react-icons/fa';

import { Conteiner } from '../../styles/GlobalStyles';
import { AlunosConteiner, Profilepicture } from './styled';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }

    getData();
  }, []);

  return (
    <Conteiner>
      <h1>alunos</h1>

      <AlunosConteiner>
        {alunos.map((aluno) => {
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

              <Link to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose size={16} />
              </Link>
            </div>
          );
        })}
      </AlunosConteiner>
    </Conteiner>
  );
}