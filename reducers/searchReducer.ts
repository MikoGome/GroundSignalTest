import * as actionTypes from '../constants/actionTypes';
import {sampleData} from '../sample-data';
import { dataList } from '../interfaces/interfaces';

interface searchState {
  input: string
  results: dataList
};

const initialState: searchState = {
  input: '',
  results: []
};

function searchReducer(state=initialState, action): searchState {
  switch(action.type) {
    
    case actionTypes.SEARCH:
    //compare the name of payload to the name of each entries of sample-data.js and filter out any results that doesn't match
    const filteredResults = sampleData.filter((el) => {
      return el.name.toLowerCase().includes(action.payload.toLowerCase());
    })
    return {
      input: action.payload,
      results: action.payload.length ? filteredResults : []
    };

    default:
      return state;
  } 
}

export default searchReducer;