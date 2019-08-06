import {reportConst} from '../constants/report.constants';
import _ from 'lodash'

const { FETCH_REPORTS, EDIT_REPORT, FETCH_REPORT,DELETE_REPORT } = reportConst;

export default function reportReducer(state=[], action){
  switch(action.type){
    case  FETCH_REPORTS:
    return [...state, ...action.payload ]

    
      default:
        return state;  
  }
}