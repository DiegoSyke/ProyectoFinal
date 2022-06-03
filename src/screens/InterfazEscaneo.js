import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";

function InterfazEscaneo(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/image_UzUl..png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Icon name="arrow-left" style={styles.icon1}></Icon>
        <MaterialButtonShare1
          style={styles.materialButtonShare1}
        ></MaterialButtonShare1>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(192,116,40,1)"
  },
  image: {
    height: 1048,
    width: 512,
    marginTop: -142
  },
  image_imageStyle: {},
  icon1: {
    color: "rgba(189,16,224,1)",
    fontSize: 50,
    height: 54,
    width: 50,
    marginTop: 179,
    marginLeft: 8
  },
  materialButtonShare1: {
    height: 82,
    width: 84,
    marginTop: 543,
    marginLeft: 138
  }
});

export default InterfazEscaneo;
