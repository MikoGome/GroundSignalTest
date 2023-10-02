import * as actionTypes from '../constants/actionTypes';
import { dataEntry } from '../interfaces/interfaces';
import { deepCopy } from '../utils/helperFunctions';

interface modalState {
  isOpen: boolean,
  data: dataEntry
}

const initialState: modalState = {
  isOpen: false,
  data: {
    id: -1,
    name: '',
    location: {
      lat: -1,
      lon: -1
    }
  }
};

function moduleReducer(state=initialState, action) {
  switch(action.type) {
    
    case actionTypes.OPEN_MODAL:
      return {
        isOpen: true,
        data: deepCopy(action.payload)
      }
    
    case actionTypes.CLOSE_MODAL:
      return deepCopy(initialState);

    default:
      return state;
  }
}

export default moduleReducer;