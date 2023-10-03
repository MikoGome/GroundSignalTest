import React, {memo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/actions';
import Locations from '../components/Locations';
import { reducersType, searchStateType } from '../interfaces/interfaces';
import IconSearch from '../components/IconSearch';

const Search:React.FC<{}> = ():JSX.Element => {
  const dispatch = useDispatch();

  //extracts search state from the redux store
  const {input, results} = useSelector((state:reducersType):searchStateType => state.search);
  
  /**
   * takes the text string in the input field and dispatches it to the reducers
   * @param e - React event of HTMLInputElement
   * @returns nothing
   */
  function search(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement
    dispatch(actions.search(target.value));
  }
  
  return (
    <div className="search">
      <div className="search-bar">
        <IconSearch className="search-icon"/>
        <input className="search-box" placeholder="Search..." onChange={search}></input>
      </div>
      {Boolean(input.length) && <Locations results={results}/>}
    </div>
  )
}

export default memo(Search);