import React, {useEffect} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map:React.FC<{}> = ():JSX.Element => {
    return (
        <MapContainer center={[42.354022, -71.046245]} zoom={20} zoomControl={false} attributionControl={false}>
            <TileLayer
              url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
        </MapContainer>
        // <div className='map'></div>
    )
}

export default Map;