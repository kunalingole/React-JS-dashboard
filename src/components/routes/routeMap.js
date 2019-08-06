import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { routes} from './routeConfig';

import Header from '../layout/header';
import LayoutContainer from '../layout/layoutContainer';
import AuthoriseRoute from './Authorise.Route';

export  function SubRoute({ routes }) {
  return (
    <div>
      <LayoutContainer routes={routes}/>
    </div>
  );
}

export function RouteWithSubRoutes(route) {
  return (
    <div>
      {route.authentication ? (
        <AuthoriseRoute
         path={route.path}
         component={route.component}
         routes={route.routes}
          />
       )
     
       : (
        <Route
          path={route.path}
          render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
         )}
       />

      )}
    </div>
  );  
}

export  function MainRoute() {
  return (
    <Router>
      <div>
      
       {/* <ul>
          {routes.map((key,i)=>{
              return (
                <li key={i}>
                    <NavLink to={key.path}>{key.label}</NavLink>
                </li>
              )
          })}
         </ul>
        */}

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}




