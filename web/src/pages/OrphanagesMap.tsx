import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight, FiHome } from 'react-icons/fi'; 
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

import '../styles/pages/orphanages-map.css';

interface Orphanage{
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphangesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  const defaultPosition = {latitude:-23.5394381, longitude: -46.6134418};
  const [mapZoom, setMapZoom] = useState(12);
  const [mapPosition, setMapPosition] = useState({latitude: defaultPosition.latitude, longitude: defaultPosition.longitude});

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);
  
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[mapPosition.latitude, mapPosition.longitude]}
        zoom={mapZoom}
        style={{ width: '100%', height: '100%' }}
        onclick={() => {
          setMapZoom(12);
          setMapPosition({latitude: defaultPosition.latitude, longitude: defaultPosition.longitude})
        }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

        {orphanages.map(orphanage => {
          return(
            <Marker 
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              onclick={() => {
                setMapZoom(20);
                setMapPosition({latitude: orphanage.latitude, longitude: orphanage.longitude})
              }}             
            >
              <Popup closeButton={false} minWidth={248} maxWidth={248} className="map-popup">
                {orphanage.name}   
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF"/>
                </Link>
              </Popup>  
            </Marker>
          )
        })}
      </Map>

      <Link to="/" className="buttonHome">
        <FiHome size={24} color="#FFF"/>
      </Link>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="FFF" />
      </Link>
    </div>
  );
}

export default OrphangesMap;