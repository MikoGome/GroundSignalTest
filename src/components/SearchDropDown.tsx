import React from 'react';
import SearchItem from '../containers/SearchItem';
import { dataList } from '../interfaces/interfaces';

const SearchDropDown:React.FC<{results: dataList}> = (props):JSX.Element => {  
  const {results} = props;

  return (
    <div className='SearchDropDown'>
      <div>Found {results.length} Result{results.length != 1 && 's'}:</div>
      <ul>
        {
          results.map((result, idx) => (
            <SearchItem key={'searchresult_' + idx} result={result}/>
          ))
        }
      </ul>
    </div>
  )
}

export default SearchDropDown;