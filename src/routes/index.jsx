import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signup" component={SignUp} />

            <Route path="*" component={SignIn} />
        </Switch>
    )
}

export default Routes