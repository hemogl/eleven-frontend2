import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class Settings extends Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 10,
  },
  location: {
    borderColor: "white",
    width: 10,
    height: 10,
  },
  hamburger: {
    borderColor: "white",
    width: 10,
    height: 10,
  },
  name: {
    fontSize: 22,
    color: "black",
    fontWeight: "600",
    fontFamily: "Helvetica",
  },
  headtText: {
    fontFamily: "Helvetica",
    color: "grey",
    fontWeight: "600",
    marginLeft: 20,
    marginTop: 10,
  },
  SubjectText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Helvetica",
    marginLeft: 20,
    marginTop: 10,
  },
  userInfo: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#3B525F",
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: "center",
    elevation: 3,
  },
  body: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center",
  },
  text: {
    color: "white",
    margin: 10,
  },
  RectangleShapeView: {
    marginTop: 20,
    width: "80%",
    height: 80,
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    elevation: 3,
  },
});
