import React from 'react';
import { dataEntry } from '../interfaces/interfaces';

const SearchItem:React.FC<{result: dataEntry}> = (props):JSX.Element => {
  const {result} = props;
  
  return (
    <li className="SearchItem">
      <h4>{result.name}</h4>
      <p>{result.location.lat + ',' + result.location.lon}</p>
    </li>
  )
}

export default SearchItem;