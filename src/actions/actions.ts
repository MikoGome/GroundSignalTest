import * as actionTypes from '../constants/actionTypes';
import { dataEntry } from '../interfaces/interfaces';

/**
 * Redux Action Creators
 * @param payload 
 * @returns an object to be dispatched to the reducer
 */

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

export const closeModal = (): {type:string} => ({
  type: actionTypes.CLOSE_MODAL
})

//map actions
export const changeMapPos = (payload: {lat: number, lon: number}): {type:string, payload: {lat: number, lon: number}} => ({
  type: actionTypes.CHANGE_MAP_POS,
  payload: payload
})