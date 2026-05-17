import React from 'react';
import { Switch} from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './myRoute';
import aluno from '../pages/aluno/index';
import alunos from '../pages/alunos/index';
import fotos from '../pages/Fotos/index';
import register from '../pages/register/index';
import Login from '../pages/Login/index';
import page404 from '../pages/page404/index';

export default function Routes() {
    return (
        <Switch>
          <MyRoute exact path='/' component={alunos} isClosed={false}/>
          <MyRoute  exact path='/aluno/:id/edit'component={aluno} isClosed/>
          <MyRoute exact path='/aluno/' component={aluno} isClosed/>
          <MyRoute exact path='/fotos/:id' component={fotos} isClosed/>
          <MyRoute exact path='/login/' component={Login} isClosed={false}/>
          <MyRoute exact path='/register/' component={register} isClosed={false}/>
          <MyRoute exact path='*' component={page404} />
        </Switch>
    );
}
