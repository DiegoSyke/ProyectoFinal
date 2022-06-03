import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

function MaterialCardWithImageAndTitle8(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleGoesHere}>Abelardo L. Rodriguez</Text>
          <Text style={styles.estatua}>Estatua</Text>
        </View>
      </View>
      <View style={styles.actionBody}>
        <View style={styles.actionButton1Row}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.mapa}>Mapa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}>
            <Text style={styles.informacion}>Informacion</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require("../assets/images/image_uFC3..png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
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
    left: 0,
    width: 357,
    top: 0,
    height: 112
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  titleGoesHere: {
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
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    height: 36,
    width: 77
  },
  mapa: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton2: {
    height: 36,
    width: 77
  },
  informacion: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton1Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 195,
    marginLeft: 8,
    marginTop: 8
  },
  image: {
    position: "absolute",
    top: 50,
    left: 183,
    height: 107,
    width: 96
  }
});

export default MaterialCardWithImageAndTitle8;
