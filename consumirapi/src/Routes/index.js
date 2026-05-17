import React from 'react';
import { Switch} from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './myRoute';
import Login from '../pages/Login/index';
import page404 from '../pages/page404/index';

export default function Routes() {
    return (
        <Switch>
          <MyRoute exact path='/login' component={Login}/>
          <MyRoute exact path='*' component={page404} />
        </Switch>
    );
}
