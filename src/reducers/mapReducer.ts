import * as actionTypes from '../constants/actionTypes';
import { mapState } from '../interfaces/interfaces';

const initialState: mapState = {
  coordinates: {
    lat: 42.354022, 
    lon: -71.046245
  }
}

function mapReducer(state = initialState, action): mapState {
  switch(action.type) {
    case actionTypes.CHANGE_MAP_POS:
      return {
        coordinates: {
          lat: action.payload.lat,
          lon: action.payload.lon
        }
      }
    default:
      return state;
  }
}

export default mapReducer;