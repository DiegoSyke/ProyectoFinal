import React, { Component } from "react";
import { StyleSheet, View, Slider } from "react-native";

function MaterialSlider(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Slider
        value={50}
        minimumTrackTintColor="rgba(189,16,224,1)"
        style={styles.slider}
      ></Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  slider: {
    height: 30,
    width: 615
  }
});

export default MaterialSlider;
