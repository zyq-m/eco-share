import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapLibreGL, { PointAnnotation } from '@rnmapbox/maps';

const { width, height } = Dimensions.get('window');

// Replace with your MapTiler API key (free tier available)
const MAPTILER_API_KEY = 'wzXqBh0Bit4IGM8kIRpJ';

// Set access token for MapLibreGL
MapLibreGL.setAccessToken(MAPTILER_API_KEY);

interface Pin {
  id: string;
  coordinates: [number, number]; // [longitude, latitude]
}

export default function MapScreen(): JSX.Element {
  const [pins, setPins] = useState<Pin[]>([]);

  // Default center coordinate (San Francisco example)
  const initialCoords: [number, number] = [-122.4194, 37.7749];

  const onMapPress = (event) => {
    const { geometry } = event;
    const [longitude, latitude] = geometry.coordinates;
    const newPin: Pin = {
      id: Date.now().toString(),
      coordinates: [longitude, latitude],
    };
    setPins((prevPins) => [...prevPins, newPin]);
  };

  return (
    <View style={styles.container}>
      <MapLibreGL.MapView
        style={styles.map}
        styleURL={`https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_API_KEY}`}
        onPress={onMapPress}
      >
        <MapLibreGL.Camera zoomLevel={12} centerCoordinate={initialCoords} />

        {pins.map((pin) => (
          <MapLibreGL.PointAnnotation
            key={pin.id}
            id={pin.id}
            coordinate={pin.coordinates}
          />
        ))}
      </MapLibreGL.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
