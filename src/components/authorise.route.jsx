import React from 'react';
import { Route, Redirect } from 'react-router-dom';

 const AuthoriseRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
         localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

export default AuthoriseRoute;