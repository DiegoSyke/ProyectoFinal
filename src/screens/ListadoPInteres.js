import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialCardWithImageAndTitle6 from "../components/MaterialCardWithImageAndTitle6";
import MaterialSlider from "../components/MaterialSlider";
import MaterialCardWithImageAndTitle4 from "../components/MaterialCardWithImageAndTitle4";
import MaterialCardWithImageAndTitle5 from "../components/MaterialCardWithImageAndTitle5";
import MaterialCardWithImageAndTitle8 from "../components/MaterialCardWithImageAndTitle8";

function ListadoPInteres(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialIconTextButtonsFooter1Stack}>
        <MaterialIconTextButtonsFooter
          style={styles.materialIconTextButtonsFooter1}
        ></MaterialIconTextButtonsFooter>
        <MaterialCardWithImageAndTitle6
          style={styles.materialCardWithImageAndTitle6}
        ></MaterialCardWithImageAndTitle6>
        <MaterialIconTextButtonsFooter
          style={styles.materialIconTextButtonsFooter2}
        ></MaterialIconTextButtonsFooter>
      </View>
      <View style={styles.materialSliderStack}>
        <MaterialSlider style={styles.materialSlider}></MaterialSlider>
        <MaterialCardWithImageAndTitle4
          style={styles.materialCardWithImageAndTitle4}
        ></MaterialCardWithImageAndTitle4>
      </View>
      <MaterialCardWithImageAndTitle5
        style={styles.materialCardWithImageAndTitle5}
      ></MaterialCardWithImageAndTitle5>
      <MaterialCardWithImageAndTitle8
        style={styles.materialCardWithImageAndTitle8}
      ></MaterialCardWithImageAndTitle8>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(192,116,40,1)"
  },
  materialIconTextButtonsFooter1: {
    height: 67,
    width: 361,
    position: "absolute",
    left: 0,
    top: 117
  },
  materialCardWithImageAndTitle6: {
    height: 158,
    width: 304,
    position: "absolute",
    top: 0,
    left: 19
  },
  materialIconTextButtonsFooter2: {
    height: 67,
    width: 361,
    position: "absolute",
    left: 0,
    top: 117
  },
  materialIconTextButtonsFooter1Stack: {
    width: 361,
    height: 184,
    marginTop: 556
  },
  materialSlider: {
    position: "absolute",
    height: 30,
    width: 623,
    left: 8,
    top: 127,
    transform: [
      {
        rotate: "90.00deg"
      }
    ]
  },
  materialCardWithImageAndTitle4: {
    height: 158,
    width: 304,
    position: "absolute",
    left: 0,
    top: 0
  },
  materialSliderStack: {
    width: 631,
    height: 158,
    marginTop: -528,
    marginLeft: 19
  },
  materialCardWithImageAndTitle5: {
    height: 158,
    width: 304,
    marginTop: 15,
    marginLeft: 19
  },
  materialCardWithImageAndTitle8: {
    height: 158,
    width: 304,
    marginTop: -501,
    marginLeft: 19
  }
});

export default ListadoPInteres;
