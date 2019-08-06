import  httpService from '../services/GlobalService';

import history from '../history';
import { streamConst } from '../constants/stream.constants';
 const  { 
      CREATE_STREAM,
      FETCH_STREAMS,
      FETCH_STREAM,
      DELETE_STREAM,
      EDIT_STREAM } = streamConst;



export const createrStream = (formValue)=> async (dispatch, getState) => {
  const { userId } =getState().auth
    const response=  await httpService.post('/streams', {...formValue, userId});
     dispatch({
         type: CREATE_STREAM,
         payload:response.data
     })

     history.push('/')
  };

  export const fetchStreams =() => async dispatch=>{
    const response = await httpService.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload:response.data
    })
  }

  export const fetchStream =(id) => async dispatch=>{
    const response = await httpService.get(`/streams/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload:response.data
     })
  }

  export const editStream = (id,formValue) => async dispatch => {
     const response = await httpService.patch(`/streams/${id}`,formValue);
     dispatch({
        type:EDIT_STREAM,
        payload:response.data
     })
     history.push('/');
  }

  export const deleteStream = (id) => async  dispatch => {
    await httpService.delete(`/streams/${id}`);
     dispatch({
        type:DELETE_STREAM,
        payload:id
    })
  }