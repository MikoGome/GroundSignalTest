import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map:React.FC<{}> = ():JSX.Element => {
    
    return (
        <MapContainer center={[42.354022, -71.046245]} zoom={16} zoomControl={false} attributionControl={false}>
            <TileLayer
            //   url= {'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
            url = {'https://mts1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'}
            />
        </MapContainer>
    )
}

export default Map;