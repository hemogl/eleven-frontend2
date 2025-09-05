// Récupérer la localisation
import * as Location from "expo-location";

async function loadDefaultLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    throw new Error("Permission refusée");
  }
  let location = await Location.getCurrentPositionAsync({});
  console.log("current location", location);
  return location;
}

export default loadDefaultLocation;

export const friends = [
  {
    name: "Mattia",
    surname: "Parisi",
    email: "mattiaparisi@gmail.com",
    coords: {
      latitude: 48.855912,
      longitude: 2.36766,
    },
    OnScreen: true,
    id: 0,
    currentLocation: {
      place: "Paname",
      rating: 5,
    },
    friends: 12,
  },
  {
    name: "Alessia",
    surname: "Ciccarello",
    email: "alessiaciccarello@gmail.com",
    coords: {
      latitude: 48.888657,
      longitude: 2.378072,
    },
    OnScreen: true,
    id: 1,
    currentLocation: {
      place: "Bisous Club",
      rating: 5,
    },
    friends: 67,
  },
  {
    name: "Ciccio",
    surname: "Belo",
    email: "cicciobelo@gmail.com",
    coords: {
      latitude: 48.868575,
      longitude: 2.325545,
    },
    OnScreen: true,
    id: 2,
    currentLocation: {
      place: "Rex Club",
      rating: 5,
    },
    friends: 3,
  },
  {
    name: "Santo",
    surname: "Terranova",
    email: "santoterranova@gmail.com",
    coords: {
      latitude: 48.83261,
      longitude: 2.320518,
    },
    OnScreen: false,
    id: 3,
    currentLocation: {
      place: "Montreuil Open Air",
      rating: 5,
    },
    friends: 9,
  },
  {
    name: "Damiano",
    surname: "Pulvirenti",
    email: "damianopulvirenti@gmail.com",
    coords: {
      latitude: 48.871053,
      longitude: 2.343012,
    },
    OnScreen: true,
    id: 4,
    currentLocation: {
      place: "Pigale  Club",
      rating: 5,
    },
    friends: 33,
  },
  {
    name: "Enrico",
    surname: "Bruno",
    email: "enricobruno@gmail.com",
    coords: {
      latitude: 48.847302,
      longitude: 2.314699,
    },
    OnScreen: true,
    id: 5,
    currentLocation: {
      place: "Deux Magots",
      rating: 5,
    },
    friends: 1,
  },
];
