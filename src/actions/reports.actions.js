import {reportConst} from '../constants/report.constants';
import  httpService from '../services/GlobalService';

const { FETCH_REPORTS, EDIT_REPORT, FETCH_REPORT,DELETE_REPORT,REPORTS_ERROR } = reportConst;
export const FetchReport =()=>{
     return (dispatch) =>{
        httpService.get('/movies')
        .then((res) =>{
           dispatch({type: FETCH_REPORTS, payload: res.data});
        })
        .catch((error)=> {
           dispatch({type: REPORTS_ERROR, payload: error});
       })
     }
}