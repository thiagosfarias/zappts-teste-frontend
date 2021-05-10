import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

const Routes = props => {
    return (

            <Switch>
                <Route exact path="/">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="*">
                    <SignIn />
                </Route>
            </Switch>
    )
}

export default Routes