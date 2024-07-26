import Cadastro from "../screens/Cadastro";
import Conta from "../screens/Conta";
import EditarCadastro from "../screens/EditarCadastro";
import EditarNome from "../screens/EditarNome";
import Favoritos from "../screens/Favoritos";
import Historico from "./../screens/Historico/index";
import Login from "../screens/Login";
import MeuPerfil from "../screens/MeuPerfil";
import { NavigationContainer } from "@react-navigation/native";
import Principal from "../screens/Principal";
import React from "react";
import TelaEntrada from "../screens/TelaEntrada";
import TelaPrincipal from "../screens/TelaPrincipal";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="TelaEntrada"
      >
        <Stack.Screen name="TelaEntrada" component={TelaEntrada} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Stack.Screen name="Conta" component={Conta} />
        <Stack.Screen name="EditarCadastro" component={EditarCadastro} />
        <Stack.Screen name="EditarNome" component={EditarNome} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen name="Meu Perfil" component={MeuPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;