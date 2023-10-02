import React from 'react';
import { dataEntry } from '../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import IconPin from '../components/IconPin';

const Location:React.FC<{result: dataEntry}> = (props):JSX.Element => {
  const dispatch = useDispatch();
  const {result} = props;

  //when a search item is hovered over, the map will center on that location
  function changeMapPos():void {
    const payload = {
      lat: result.location.lat,
      lon: result.location.lon
    }
    dispatch(actions.changeMapPos(payload))
  }
  
  return (
    <li className="location" onClick={changeMapPos}>
      <IconPin className="location-icon-pin"/>
      <div>
        <h4 className="location-name">{result.name}</h4>
        <p className="location-coordinates">{result.location.lat + ', ' + result.location.lon}</p>
      </div>
    </li>
  )
}

export default Location;