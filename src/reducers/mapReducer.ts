import * as actionTypes from '../constants/actionTypes';
import { mapStateType } from '../interfaces/interfaces';

const initialState: mapStateType = {
  coordinates: {
    lat: 42.345000, 
    lon: -71.045000
  }
}

function mapReducer(state = initialState, action): mapStateType {
  switch(action.type) {
    //change position of the leaflet map
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