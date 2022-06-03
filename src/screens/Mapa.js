import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialMapView from "../components/MaterialMapView";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialChipBasic from "../components/MaterialChipBasic";

function Mapa(props) {
  return (
    <View style={styles.container}>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter>
      <View style={styles.materialMapViewStack}>
        <MaterialMapView style={styles.materialMapView}></MaterialMapView>
        <MaterialButtonShare
          style={styles.materialButtonShare}
        ></MaterialButtonShare>
        <MaterialChipBasic style={styles.materialChipBasic}></MaterialChipBasic>
      </View>
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
    marginTop: 673
  },
  materialMapView: {
    width: 361,
    height: 653,
    position: "absolute",
    left: 0,
    top: 0
  },
  materialButtonShare: {
    height: 56,
    width: 56,
    position: "absolute",
    left: 292,
    top: 580
  },
  materialChipBasic: {
    width: 150,
    height: 32,
    position: "absolute",
    top: 18,
    left: 105
  },
  materialMapViewStack: {
    width: 361,
    height: 653,
    marginTop: -720
  }
});

export default Mapa;
