import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Views Import
import Page1 from './views/Page1/Page1';
import Page2 from './views/Page2/Page2';

export default (
    <Switch>
        <Route exact path='/' component={Page1} />
        <Route path='/Page2' component={Page2} />
    </Switch>
)