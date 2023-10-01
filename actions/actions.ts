import * as actionTypes from '../constants/actionTypes';

export const search = (payload: string): {type:string, payload: string} => ({
  type: actionTypes.SEARCH,
  payload: payload
})