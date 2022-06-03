import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function PantallaInformacion(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/image_hBa7..png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.iconRow}>
        <Icon name="arrow-left" style={styles.icon}></Icon>
        <Text style={styles.loremIpsum}>Estatua Abelardo L. Rodriguez</Text>
      </View>
      <Text style={styles.loremIpsum4}>
        Abelardo Rodríguez Luján, conocido como Abelardo L. Rodríguez, fue un
        empresario, militar y político mexicano. Incursionó como militar
        participando en la Revolución mexicana bajo el ejército
        Constitucionalista y rápidamente ascendió de puesto. Tras el fin de la
        guerra, incursionó en la política.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(192,116,40,1)"
  },
  image: {
    height: 478,
    width: 343,
    marginTop: 91,
    alignSelf: "center"
  },
  icon: {
    color: "rgba(189,16,224,1)",
    fontSize: 50
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 21,
    marginTop: 15
  },
  iconRow: {
    height: 54,
    flexDirection: "row",
    marginTop: -532,
    marginLeft: 8,
    marginRight: 16
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 194,
    width: 336,
    fontSize: 18,
    textAlign: "justify",
    marginTop: 493,
    marginLeft: 8
  }
});

export default PantallaInformacion;
