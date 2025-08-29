import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";

function Map() {
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
        latitude: 48.866667,
        longitude: 2.333333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    ></MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
