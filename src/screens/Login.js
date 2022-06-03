import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialButtonPink from "../components/MaterialButtonPink";

function Login(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/image_ZBUy..png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.sonoraMonuments}>Sonora{"\n"}Monuments</Text>
      <Text style={styles.bienvenido}>¡Bienvenido!</Text>
      <MaterialRightIconTextbox
        style={styles.materialRightIconTextbox}
      ></MaterialRightIconTextbox>
      <MaterialUnderlineTextbox
        style={styles.materialUnderlineTextbox}
      ></MaterialUnderlineTextbox>
      <Text style={styles.loremIpsum}>¿Olvidaste la contraseña?</Text>
      <MaterialButtonPink
        style={styles.materialButtonPink}
      ></MaterialButtonPink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(192,116,40,1)",
    borderWidth: 15,
    borderColor: "rgba(148,19,84,1)",
    borderStyle: "dotted"
  },
  image: {
    height: 200,
    width: 200,
    marginTop: 30,
    alignSelf: "center"
  },
  sonoraMonuments: {
    fontFamily: "roboto-italic",
    color: "#121212",
    fontSize: 44,
    textAlign: "center",
    opacity: 0.85,
    letterSpacing: 3,
    lineHeight: 30,
    marginTop: 39,
    marginLeft: 14
  },
  bienvenido: {
    fontFamily: "roboto-italic",
    color: "#121212",
    fontSize: 30,
    opacity: 0.8,
    marginTop: 39,
    marginLeft: 86
  },
  materialRightIconTextbox: {
    height: 43,
    width: 257,
    marginTop: 92,
    marginLeft: 37
  },
  materialUnderlineTextbox: {
    height: 43,
    width: 257,
    marginTop: -111,
    marginLeft: 38
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 105,
    marginLeft: 87
  },
  materialButtonPink: {
    height: 36,
    width: 100,
    marginTop: 40,
    marginLeft: 115
  }
});

export default Login;
