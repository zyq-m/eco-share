import { useLocationStore } from "@/store/store";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Location() {
  const { setLocation, location } = useLocationStore();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        showsUserLocation
        showsMyLocationButton
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 5.33659,
          longitude: 103.141998,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => setLocation(e.nativeEvent.coordinate)}
      >
        {location && (
          <Marker
            coordinate={{
              longitude: location.longitude,
              latitude: location.latitude,
            }}
          />
        )}
      </MapView>
    </SafeAreaView>
  );
}
