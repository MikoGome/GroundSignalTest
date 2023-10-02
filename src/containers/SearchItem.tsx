import React from 'react';
import { dataEntry } from '../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

const SearchItem:React.FC<{result: dataEntry}> = (props):JSX.Element => {
  const dispatch = useDispatch();
  const {result} = props;

  //when a search item is clicked, it sends the data to the reducer
  function openModal():void {
    dispatch(actions.openModal(result))
  }

  //when a search item is hovered over, the map will center on that location
  function changeMapPos():void {
    const payload = {
      lat: result.location.lat,
      lon: result.location.lon
    }
    dispatch(actions.changeMapPos(payload))
  }
  
  return (
    <li className="SearchItem" onClick={openModal} onMouseEnter={changeMapPos}>
      <h4>{result.name}</h4>
      <p>{result.location.lat + ',' + result.location.lon}</p>
    </li>
  )
}

export default SearchItem;