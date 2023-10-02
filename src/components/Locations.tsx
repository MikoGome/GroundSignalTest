import React from 'react';
import Location from '../containers/Location';
import { dataList } from '../interfaces/interfaces';

const Locations:React.FC<{results: dataList}> = (props):JSX.Element => {  
  const {results} = props;

  return (
    <div className="locations">
      <header className='locations-header'>Found {results.length} Result{results.length != 1 && 's'}:</header>
      {
        Boolean(results.length) && 
        <ul className="locations-list">
          {
            results.map((result, idx) => (
              <Location key={'searchresult_' + idx} result={result}/>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default Locations;