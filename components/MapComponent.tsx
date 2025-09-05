import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import ToggleButton from "../components/Buttons/ToggleButton";
import { StyleSheet, View, Text } from "react-native";
import loadDefaultLocation from "../utils";
import React, { useEffect, useState } from "react";
import { friends } from "../utils";

function MapComponent() {
  const [isOnScreen, setIsOnScreen] = useState(true); // état partagé
  const [myLatitude, setMyLatitude] = useState(null);
  const [myLongitude, setMyLongitude] = useState(null);

  const transformMarker = (friendList) => {
    return friendList.map((friend) => ({
      friendName: friend.name,
      latitude: friend.coords.latitude,
      longitude: friend.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }));
  };

  const markers = transformMarker(friends);
  const onMarkerSelected = (marker: any) => {
    alert(`${marker.friendName} is on`);
  };

  useEffect(() => {
    async function loadLocation() {
      try {
        let location = await loadDefaultLocation();
        setMyLatitude(location.coords.latitude);
        setMyLongitude(location.coords.longitude);
      } catch (error) {
        console.error(error);
      }
    }
    loadLocation();
  }, []);

  if (myLatitude === null || myLongitude === null) {
    return (
      <View>
        <Text>Charging map ... </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={isOnScreen}
          initialRegion={{
            latitude: myLatitude,
            longitude: myLongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker}
              onPress={() => onMarkerSelected(marker)}
              pinColor={"green"}
            />
          ))}
        </MapView>

        <View style={styles.toggle}>
          <ToggleButton isOnScreen={isOnScreen} setIsOnScreen={setIsOnScreen} />
        </View>
      </View>
    );
  }
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
