import { View, Text } from "native-base";
import React from "react";
import MapView from "react-native-maps";

export default function Location() {
  return (
    <View>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 5.33659,
          longitude: 103.141998,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
