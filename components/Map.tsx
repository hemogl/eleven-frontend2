import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import ToggleSwitch from "../components/Switch";
import { StyleSheet, View } from "react-native";

function Map() {
  return (
    <View style={styles.container}>
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
      />
      <View style={styles.toggle}>
        <ToggleSwitch />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // occupe tout l’écran
  },
  map: {
    flex: 1, // la map occupe tout l’espace du parent
  },
  toggle: {
    position: "absolute",
    right: 40,
    top: 50,
  },
});

export default Map;
