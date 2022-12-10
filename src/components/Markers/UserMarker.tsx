import { Marker } from '@react-google-maps/api';
import React from 'react';
import userLocation from '../../images/userlocation.png';

const scale = [15, 15];

interface UserMarkerProps {
  location: google.maps.LatLngLiteral
}

// eslint-disable-next-line react/display-name
const UserMarker: React.FC<UserMarkerProps> = React.memo((props) => (
  <Marker
    // eslint-disable-next-line react/prop-types
    position={props.location}
    icon={{
      url: userLocation,
      scaledSize: new window.google.maps.Size(scale[0], scale[1]),
    }}
  />
));

export default UserMarker;
