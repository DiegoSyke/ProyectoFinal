import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Configuracion from "./src/screens/Configuracion";
import InterfazEscaneo from "./src/screens/InterfazEscaneo";
import ListadoPInteres from "./src/screens/ListadoPInteres";
import Login from "./src/screens/Login";
import Mapa from "./src/screens/Mapa";
import MenuPrincipal from "./src/screens/MenuPrincipal";
import PantallaInformacion from "./src/screens/PantallaInformacion";

const DrawerNavigation = createDrawerNavigator({
  Configuracion: Configuracion,
  InterfazEscaneo: InterfazEscaneo,
  ListadoPInteres: ListadoPInteres,
  Login: Login,
  Mapa: Mapa,
  MenuPrincipal: MenuPrincipal,
  PantallaInformacion: PantallaInformacion
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Configuracion: Configuracion,
    InterfazEscaneo: InterfazEscaneo,
    ListadoPInteres: ListadoPInteres,
    Login: Login,
    Mapa: Mapa,
    MenuPrincipal: MenuPrincipal,
    PantallaInformacion: PantallaInformacion
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "aclonica-regular": require("./src/assets/fonts/aclonica-regular.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-italic": require("./src/assets/fonts/roboto-italic.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
