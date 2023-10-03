import * as actionTypes from '../constants/actionTypes';
import {sampleData} from '../../sample-data';
import {searchStateType} from '../interfaces/interfaces';
import {deepCopy} from '../utils/helperFunctions';

const initialState: searchStateType = {
  input: '',
  results: []
};

function searchReducer(state=initialState, action): searchStateType {
  switch(action.type) {

    case actionTypes.SEARCH:
      //if the payload is an empty string, return the intial state
      if(!action.payload.length) {
        return initialState;
      }

      //compare the name of payload to the name of each entries of sample-data.js and filter out any results that doesn't match
      const filteredResults = sampleData.filter((el) => {
        return el.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        input: action.payload,
        results: deepCopy(filteredResults)
      };

    default:
      return state;
  } 
}

export default searchReducer;