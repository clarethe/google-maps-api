import React from 'react';
import {GoogleMap, LoadScript, Polyline} from '@react-google-maps/api';
import VehicleMarker from "../Markers/VehicleMarker";
import {getScootersAPI} from "../../redux/servers/vehiclesAPI";
import UserMarker from "../Markers/UserMarker";

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 41.397669,
  lng: 2.176236,
};

//Call getScootersAPI()
//Save data on Redux State

//Example scooters for testing:
const scootersList = [ {"id": 1, "name": "Ruthe", "lat": 41.402825, "lng": 2.201317, "battery": 81, "status": 0}, {"id": 2, "name": "Suzanne", "lat": 41.413807, "lng": 2.185967, "battery": 6, "status": 2}, {"id": 3, "name": "Julianne", "lat": 41.378682, "lng": 2.122197, "battery": 20, "status": 2}, {"id": 4, "name": "Catalina", "lat": 41.394927, "lng": 2.127842, "battery": 12, "status": 2}, {"id": 5, "name": "Craig", "lat": 41.399575, "lng": 2.145365, "battery": 56, "status": 0}, {"id": 6, "name": "Ardella", "lat": 41.392992, "lng": 2.140752, "battery": 31, "status": 0}, {"id": 7, "name": "Gilbert", "lat": 41.399522, "lng": 2.14528, "battery": 69, "status": 0}, {"id": 8, "name": "Bell", "lat": 41.425927, "lng": 2.14041, "battery": 68, "status": 0}, {"id": 9, "name": "Hobart", "lat": 41.37581, "lng": 2.17455, "battery": 64, "status": 0}, {"id": 10, "name": "Daisha", "lat": 41.425477, "lng": 2.191817, "battery": 31, "status": 5}, {"id": 11, "name": "Connor", "lat": 41.405625, "lng": 2.139262, "battery": 45, "status": 4}, {"id": 12, "name": "Alana", "lat": 41.390487, "lng": 2.111602, "battery": 65, "status": 5}, {"id": 14, "name": "Rozella", "lat": 41.393102, "lng": 2.140662, "battery": 89, "status": 1}, {"id": 15, "name": "Nettie", "lat": 41.398077, "lng": 2.147078, "battery": 52, "status": 4}, {"id": 16, "name": "Vincenza", "lat": 41.366597, "lng": 2.143657, "battery": 74, "status": 4}, {"id": 17, "name": "Nikita", "lat": 41.399747, "lng": 2.19245, "battery": 53, "status": 4}, {"id": 18, "name": "Judy", "lat": 41.378657, "lng": 2.150817, "battery": 66, "status": 4}, {"id": 19, "name": "Murray", "lat": 41.394292, "lng": 2.163697, "battery": 48, "status": 1}, {"id": 20, "name": "Kenyatta", "lat": 41.385882, "lng": 2.182417, "battery": 16, "status": 2}, {"id": 21, "name": "Dexter", "lat": 41.385222, "lng": 2.160717, "battery": 31, "status": 1}, {"id": 22, "name": "Margie", "lat": 41.383932, "lng": 2.117125, "battery": 22, "status": 1}, {"id": 23, "name": "Aiden", "lat": 41.397667, "lng": 2.194017, "battery": 37, "status": 0}, {"id": 24, "name": "Hortense", "lat": 41.417692, "lng": 2.19105, "battery": 30, "status": 1}, {"id": 25, "name": "Trudie", "lat": 41.399503, "lng": 2.145277, "battery": 13, "status": 2}, {"id": 26, "name": "Clifford", "lat": 41.406682, "lng": 2.162117, "battery": 48, "status": 5}];

//Example users for testing:
const usersList = [{"lat": 41.3991141,"lng":2.1985041}, {"lat": 41.383178,"lng":2.176864}, {"lat": 41.388529,"lng":2.1448224},{"lat": 41.3813052,"lng":2.1420853}, {"lat": 41.3813052,"lng":2.1420853},{"lat": 41.37951,"lng": 2.1526853}];

//magic()
//Calculate distances with a matrix or an external API

const Map: React.FC = () => (
  <LoadScript
    googleMapsApiKey="AIzaSyBQ_vSlbaVRez2-5i78RYLo8mTbrpT0C5E"
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
    >
      {
        scootersList.map(scooter =>
        // eslint-disable-next-line react/jsx-key
        <VehicleMarker vehicle={scooter}/>
        )
      }
      {
        usersList.map(user =>
        // eslint-disable-next-line react/jsx-key
        <UserMarker location={user}/>
        )
      }
    </GoogleMap>
  </LoadScript>
);

export default Map;
