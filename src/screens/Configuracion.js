import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonPink1 from "../components/MaterialButtonPink1";

function Configuracion(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseRow}>
        <Svg viewBox="0 0 69 69" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={35}
            cy={35}
            rx={35}
            ry={35}
          ></Ellipse>
        </Svg>
        <Text style={styles.nombreDeUsuario}>[Nombre de usuario]</Text>
      </View>
      <View style={styles.rect}></View>
      <View style={styles.iconRow}>
        <EntypoIcon name="key" style={styles.icon}></EntypoIcon>
        <Text style={styles.loremIpsum}>
          Cuenta{"\n"}Privacidad, seguridad, informacion.
        </Text>
      </View>
      <View style={styles.icon1Row}>
        <EntypoIcon name="bell" style={styles.icon1}></EntypoIcon>
        <Text style={styles.loremIpsum1}>
          Notificaciones{"\n"}Tonos y ajustes de notificaciones
        </Text>
      </View>
      <View style={styles.icon2Row}>
        <EntypoIcon name="database" style={styles.icon2}></EntypoIcon>
        <Text style={styles.loremIpsum2}>
          Almacenamiento{"\n"}Uso de red, descarga automatica
        </Text>
      </View>
      <View style={styles.icon3Row}>
        <EntypoIcon name="help" style={styles.icon3}></EntypoIcon>
        <Text style={styles.loremIpsum3}>
          Ayuda{"\n"}Centro de ayuda, contactos y politica{"\n"}de privacidad
        </Text>
      </View>
      <View style={styles.icon4Row}>
        <EntypoIcon name="add-user" style={styles.icon4}></EntypoIcon>
        <Text style={styles.invitarAAmigos}>Invitar a amigos</Text>
      </View>
      <MaterialButtonPink1
        style={styles.materialButtonPink1}
      ></MaterialButtonPink1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(192,116,40,1)"
  },
  ellipse: {
    width: 69,
    height: 69
  },
  nombreDeUsuario: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 28,
    marginLeft: 7,
    marginTop: 18
  },
  ellipseRow: {
    height: 69,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 14,
    marginRight: 18
  },
  rect: {
    width: 300,
    height: 1,
    backgroundColor: "#E6E6E6",
    opacity: 0.5,
    marginTop: 29,
    marginLeft: 36
  },
  icon: {
    color: "rgba(189,16,224,1)",
    fontSize: 50
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginLeft: 13,
    marginTop: 9
  },
  iconRow: {
    height: 54,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 36,
    marginRight: 27
  },
  icon1: {
    color: "rgba(189,16,224,1)",
    fontSize: 50
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginLeft: 12,
    marginTop: 9
  },
  icon1Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 44,
    marginLeft: 40,
    marginRight: 36
  },
  icon2: {
    color: "rgba(189,16,224,1)",
    fontSize: 50
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginLeft: 13,
    marginTop: 7
  },
  icon2Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 49,
    marginLeft: 36,
    marginRight: 42
  },
  icon3: {
    color: "rgba(189,16,224,1)",
    fontSize: 50
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginLeft: 13,
    marginTop: 9
  },
  icon3Row: {
    height: 63,
    flexDirection: "row",
    marginTop: 49,
    marginLeft: 36,
    marginRight: 16
  },
  icon4: {
    color: "rgba(189,16,224,1)",
    fontSize: 50
  },
  invitarAAmigos: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 19,
    marginLeft: 13,
    marginTop: 15
  },
  icon4Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 36,
    marginRight: 126
  },
  materialButtonPink1: {
    height: 36,
    width: 100,
    marginTop: 47,
    alignSelf: "center"
  }
});

export default Configuracion;
