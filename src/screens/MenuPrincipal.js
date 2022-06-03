import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCardWithButtons from "../components/MaterialCardWithButtons";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialButtonShare from "../components/MaterialButtonShare";

function MenuPrincipal(props) {
  return (
    <View style={styles.container}>
      <MaterialCardWithButtons
        style={styles.materialCardWithButtons}
      ></MaterialCardWithButtons>
      <View style={styles.materialCardWithoutImageStack}>
        <MaterialCardWithoutImage
          style={styles.materialCardWithoutImage}
        ></MaterialCardWithoutImage>
        <MaterialIconTextButtonsFooter
          style={styles.materialIconTextButtonsFooter}
        ></MaterialIconTextButtonsFooter>
      </View>
      <Text style={styles.ubicacionDelMes}>Ubicacion del mes</Text>
      <Text style={styles.noticias}>Noticias</Text>
      <View style={styles.materialButtonShareRow}>
        <MaterialButtonShare
          style={styles.materialButtonShare}
        ></MaterialButtonShare>
        <Text style={styles.bienvenidoUser}>Bienvenido [User]</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(192,116,40,1)"
  },
  materialCardWithButtons: {
    height: 236,
    width: 317,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 10,
    marginTop: 189,
    marginLeft: 22
  },
  materialCardWithoutImage: {
    height: 301,
    width: 315,
    position: "absolute",
    left: 24,
    top: 0
  },
  materialIconTextButtonsFooter: {
    height: 67,
    width: 361,
    position: "absolute",
    left: 0,
    top: 180
  },
  materialCardWithoutImageStack: {
    width: 361,
    height: 301,
    marginTop: 68
  },
  ubicacionDelMes: {
    fontFamily: "aclonica-regular",
    color: "#121212",
    fontSize: 29,
    opacity: 0.84,
    marginTop: -657,
    marginLeft: 37
  },
  noticias: {
    fontFamily: "aclonica-regular",
    color: "#121212",
    fontSize: 29,
    opacity: 0.83,
    marginTop: 278,
    marginLeft: 117
  },
  materialButtonShare: {
    width: 56,
    height: 56
  },
  bienvenidoUser: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 29,
    marginLeft: 20,
    marginTop: 12
  },
  materialButtonShareRow: {
    height: 56,
    flexDirection: "row",
    marginTop: -437,
    marginLeft: 24,
    marginRight: 37
  }
});

export default MenuPrincipal;
