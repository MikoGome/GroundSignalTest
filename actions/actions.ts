import * as actionTypes from '../constants/actionTypes';
import { dataEntry } from '../interfaces/interfaces';

//search actions
export const search = (payload: string): {type:string, payload: string} => ({
  type: actionTypes.SEARCH,
  payload: payload
})

//modal actions
export const openModal = (payload: dataEntry): {type:string, payload: dataEntry} => ({
  type: actionTypes.OPEN_MODAL,
  payload: payload
})