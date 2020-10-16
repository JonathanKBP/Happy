import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi'; 
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

import mapIcon from '../utils/mapIcon';

function OrphangesMap() {
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
        center={[-23.6815315,-46.8754964]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

        <Marker 
          icon={mapIcon}
          position={[-23.6815315,-46.8754964]}
        >
          <Popup closeButton={false} minWidth={248} maxWidth={248} className="map-popup">
           Casa da criança   
           <Link to="/orphanages/1">
            <FiArrowRight size={20} color="#FFF"/>
           </Link>
          </Popup>  
        </Marker>

      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="FFF" />
      </Link>
    </div>
  );
}

export default OrphangesMap;