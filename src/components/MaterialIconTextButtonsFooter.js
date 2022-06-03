import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconTextButtonsFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper1}>
        <MaterialCommunityIconsIcon
          name="map-search"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.mapa}>Mapa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeButtonWrapper}>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.inicio}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <MaterialCommunityIconsIcon
          name="ballot-outline"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.listado}>Listado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  buttonWrapper1: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(189,16,224,1)",
    fontSize: 24,
    opacity: 0.8
  },
  mapa: {
    fontSize: 12,
    color: "rgba(189,16,224,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(189,16,224,1)",
    fontSize: 24,
    opacity: 0.8
  },
  inicio: {
    fontSize: 14,
    color: "rgba(189,16,224,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  buttonWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(189,16,224,1)",
    fontSize: 24,
    opacity: 0.8
  },
  listado: {
    fontSize: 12,
    color: "rgba(189,16,224,1)",
    backgroundColor: "transparent",
    paddingTop: 4
  }
});

export default MaterialIconTextButtonsFooter;
