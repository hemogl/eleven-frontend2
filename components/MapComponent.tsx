import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import ToggleButton from "../components/Buttons/ToggleButton";
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

function MapComponent() {
  const [isOnScreen, setIsOnScreen] = useState(true); // état partagé
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={isOnScreen}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.toggle}>
        <ToggleButton isOnScreen={isOnScreen} setIsOnScreen={setIsOnScreen} />
      </View>
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
  toggle: {
    position: "absolute",
    right: 40,
    top: 50,
  },
});

export default MapComponent;
