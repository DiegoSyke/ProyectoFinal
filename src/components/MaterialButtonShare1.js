import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MaterialButtonShare1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="camera" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(189,16,224,1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 2,
    minWidth: 40,
    minHeight: 40
  },
  icon: {
    color: "#fff",
    fontSize: 38,
    alignSelf: "center"
  }
});

export default MaterialButtonShare1;
