import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';


function OrphanagesMap() {
    return (
      <div id="page-map">
        <aside>
            <header>
                <img src={mapMarkerImg} alt="Happy" />

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
                <strong>{process.env.REACT_APP_CITY_NAME}</strong>
                <p>{process.env.REACT_APP_DISTRICT}</p>
            </footer>
         </aside>

         <Map 
            center={[-22.9686635,-43.4163019]}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
        </Map>

         <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
         </Link>
      </div> 
    );
}

export default OrphanagesMap;