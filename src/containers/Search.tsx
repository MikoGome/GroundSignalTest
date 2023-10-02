import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/actions';
import Locations from '../components/Locations';
import { dataList } from '../interfaces/interfaces';
import iconSearch from '../assets/icon-search.svg';

const Search:React.FC<{}> = ():JSX.Element => {
  const dispatch = useDispatch();
  const {input, results} = useSelector((state): {input: string, results: dataList} => state.search);
  
  //dispatches the value in the input field to the reducers
  function search(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement
    dispatch(actions.search(target.value));
  }
  
  return (
    <div className="search">
      <div className="search-bar">
        <img className="search-icon" src={iconSearch}/>
        <input className="search-box" placeholder="Search..." onChange={search}></input>
      </div>
      {Boolean(input.length) && <Locations results={results}/>}
    </div>
  )
}

export default Search;