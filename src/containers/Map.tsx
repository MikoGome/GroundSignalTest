import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import * as actions from '../actions/actions';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pin from '../assets/icon-pin.svg';

const Map:React.FC<{}> = ():JSX.Element => {
  const dispatch = useDispatch();
  const {results} = useSelector(state => state.search);
  const {coordinates} = useSelector(state => state.map);

  const icon = new Icon({
    iconUrl: pin,
    iconSize: [35,35]
  })

  //when marker is clicked, it creates the approriate action object sends it to reducers
  function openModal(result):void {
    dispatch(actions.openModal(result))
  }

  //a popup appears when mouse is hovered over the marker
  function openPopup(e:React.MouseEvent<typeof Icon>):void {
    const target = e.target as Icon; 
    target.openPopup();
  }
  
  //the popup disappears when mouse is hovered away from the marker
  function closePopup(e:React.MouseEvent<typeof Icon>):void {
    const target = e.target as Icon;
    target.closePopup();
  }
  
  return (
    <MapContainer center={[42.354022, -71.046245]} zoom={16} zoomControl={false} attributionControl={false}>
      <TileLayer
        // url= {'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
        url = {'https://mts1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'}
      />
        {
          results.map((result, idx) => (
            <Marker 
              key={'marker_' + idx} 
              position={result.location} 
              icon={icon} 
              eventHandlers={{
                click: () => openModal(result), 
                mouseover: openPopup, 
                mouseout: closePopup
              }}
            >
                <Popup>{result.name}</Popup>
            </Marker>
          ))
        }
        <SetView coords={[coordinates.lat, coordinates.lon]}/>
    </MapContainer>
    )
}

export default Map;

function SetView({coords}) {
    const map = useMap();
    map.setView(coords, map.getZoom(), {animate: true});
    return null;
}
