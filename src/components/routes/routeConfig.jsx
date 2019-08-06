
import StreamList from '../streams/streamList';
import StreamCreate from '../streams/streamCreate';
import StreamEdit from '../streams/streamEdit';
import StreamDelete from '../streams/streamDelete';
import StreamShow from '../streams/streamShow';

import Register from '../auth/Register';
import Login from '../auth/Login';
import ForgotPassword from '../auth/ForgotPassword';
import Logout from '../auth/Logout';

import AppChart from '../charts/Chart';
import Reports from '../reports/Reports';
import Dashboard from '../Dashboard';

import { SubRoute } from './routeMap';

 export const routes = [
     {
      path: "/login",
      component: Login,
      label: "Login",
      authentication:false,
      authorization:false,
     },
     {
        path: "/register",
        component: Register,
        label: "Register",
        authentication:false,
        authorization:false,
     },
     {
        path: "/logout",
        component: Logout,
        label: "Logout",
        authentication:false,
        authorization:false,
     },
     {
        path: "/forgot-password",
        component: ForgotPassword,
        label: "Forgot-Password",
        authentication:false,
        authorization:false,
     },
     {
      path: "/app",
      component: SubRoute,
      label: "App",
      authentication:true,
      authorization:false,
      routes: [
        {
          path: "/app/dashboard",
          component: Dashboard,
          label: "Dashboard",
          authentication:true,
          authorization:false,
        },
        {
          path: "/app/chart",
          component: AppChart,
          label: "Chart",
          authentication:true,
          authorization:false,
        },
        {
          path: "/app/reports",
          component: Reports,
          label: "Reports",
          authentication:true,
          authorization:false,
        }
      ]
    }
  ];
