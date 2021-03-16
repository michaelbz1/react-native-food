import React, { useState } from "react";

import MapView, { Marker }  from "react-native-maps";

const MapScreen = ({ route, navigation }) => {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
    </MapView>
  );
};

export default MapScreen;