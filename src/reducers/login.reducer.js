
import {userConstants} from '../constants/user.constants';


let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};

export function login(state = initialState, action) {
    switch(action.type){
       case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: true,
                token: action.payload.token
            };

        default :
         return state;
    }

}
