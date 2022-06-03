import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function MaterialCardWithImageAndTitle6(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBodyStackStack}>
        <View style={styles.cardBodyStack}>
          <View style={styles.cardBody}>
            <View style={styles.bodyContent}>
              <Text style={styles.mariaMorelosYP}>Maria Morelos y P.</Text>
              <Text style={styles.estatua}>Estatua</Text>
            </View>
          </View>
          <Image
            source={require("../assets/images/image_s9AQ..png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.mapa}>Mapa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}>
            <Text style={styles.informacion}>Informacion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    height: 97,
    width: 357
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  mariaMorelosYP: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  estatua: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  image: {
    position: "absolute",
    top: 58,
    left: 184,
    height: 101,
    width: 100
  },
  cardBodyStack: {
    top: 0,
    left: 0,
    width: 357,
    height: 159,
    position: "absolute"
  },
  actionBody: {
    flexDirection: "row",
    position: "absolute",
    top: 97,
    left: 0,
    height: 52,
    width: 357
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  mapa: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  informacion: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  cardBodyStackStack: {
    width: 357,
    height: 159,
    marginTop: 1,
    marginLeft: 1
  }
});

export default MaterialCardWithImageAndTitle6;
