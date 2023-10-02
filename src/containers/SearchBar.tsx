import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/actions';
import SearchDropDown from '../components/SearchDropDown';
import { dataList } from '../interfaces/interfaces';

const SearchBar:React.FC<{}> = ():JSX.Element => {
  const dispatch = useDispatch();
  const {input, results} = useSelector((state): {input: string, results: dataList} => state.search);
  
  //dispatches the value in the input field to the reducers
  function search(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement
    dispatch(actions.search(target.value));
  }
  
  return (
    <div className="SearchBar">
      <input placeholder="Search..." onChange={search}></input>
      {Boolean(input.length) && <SearchDropDown results={results}/>}
    </div>
  )
}

export default SearchBar;