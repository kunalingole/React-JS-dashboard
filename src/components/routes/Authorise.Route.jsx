import React from 'react';
import { Route, Redirect } from 'react-router-dom';

 const AuthoriseRoute = ({ component: Component,routes, ...rest }) => (
    <Route {...rest} render={props => (
    
         localStorage.getItem('user')
            ? <Component {...props} routes={routes} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

export default AuthoriseRoute;