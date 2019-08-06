import { userConstants } from '../constants/user.constants';

export function registration(state ={}, action){
 switch(action.type){
     case userConstants.REGISTER_SUCCESS:
            return {
                ...state,
                registerIn: true,
            };
     default:
        return state;
 }


}