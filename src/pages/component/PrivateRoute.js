import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
    // const loginUser = JSON.parse(sessionStorage.getItem('user'));
    const loginUser = true

    return (
        <Route {...rest}
               render={(props) => {
                   return loginUser ? <Component {...props} /> : <Redirect to="/"/>;
               }}
        />
    );
}
