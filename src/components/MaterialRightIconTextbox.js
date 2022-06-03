import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRightIconTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="rgba(144,19,254,1)"
        selectionColor="rgba(144,19,254,1)"
        style={styles.inputStyle}
      ></TextInput>
      <Icon name="eye" style={styles.iconStyle}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "rgba(144,19,254,1)",
    paddingRight: 16,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8
  },
  iconStyle: {
    color: "rgba(144,19,254,1)",
    fontSize: 24,
    paddingRight: 8
  }
});

export default MaterialRightIconTextbox;
