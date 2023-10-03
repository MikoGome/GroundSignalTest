import * as actionTypes from '../constants/actionTypes';
import { modalStateType } from '../interfaces/interfaces';
import { deepCopy } from '../utils/helperFunctions';

const initialState: modalStateType = {
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

    //opens the modal by setting isOpen to true and copies the payload into state
    case actionTypes.OPEN_MODAL:
      return {
        isOpen: true,
        data: deepCopy(action.payload)
      }

    //closes modal by changing state to initial state
    case actionTypes.CLOSE_MODAL:
      return deepCopy(initialState);

    default:
      return state;
  }
}

export default moduleReducer;