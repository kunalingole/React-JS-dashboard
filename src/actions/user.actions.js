import { userConstants } from '../constants/user.constants';
import  httpService from '../services/GlobalService';
import history from '../history';

 const  { 
     LOGIN_REQUEST, 
     LOGIN_SUCCESS, 
     LOGIN_FAILURE, 
     REGISTER_REQUEST,
     REGISTER_FAILURE,
     REGISTER_SUCCESS } = userConstants;


 export const login =(user) => {
   return  dispatch=> {
         httpService.post('/auth', user)
         .then((res) =>{
             
            localStorage.setItem('user', res.data.token);

            dispatch({type: LOGIN_SUCCESS, payload: res.data});
         })
         .catch((error)=> {
            dispatch({type: LOGIN_FAILURE, payload: error});
        })
      }
 }

  export const register = (user) => {
     return dispatch => {
        httpService.post('user',user)
        .then( (res) => {
            dispatch({type:REGISTER_SUCCESS,payload:user})

        }).catch((error) =>{
            dispatch({type:REGISTER_FAILURE,payload:user})
        });
     }
  } 