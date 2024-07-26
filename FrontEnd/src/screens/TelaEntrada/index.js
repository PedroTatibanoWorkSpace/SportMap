import { Image, View, Text, BackHandler } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import BorroVerde from "../../assets/Images/BorroVerde.png";
import Icon from "../../assets/Images/Icone.png";
import Label from "../../components/Label";
import { RequestLocation } from "./requestLocation";
import styles from "./styles";
import { VerificarToken } from "../Login/LoginComponents/verifica";


const TelaEntrada = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [isLocationChecked, setIsLocationChecked] = useState(false);

  const checkAuthentication = useCallback(async () => {
    try {
      const tokenExists = await VerificarToken(navigation);
      if (tokenExists) {
        navigation.navigate("TelaPrincipal");
      }
    } catch (error) {
      console.error("Erro ao verificar token:", error);
    }
  }, [navigation]);

  const checkLocation = useCallback(async () => {
    const location = await RequestLocation();
    setLocation(location);
    if (location !== null) {
      setIsLocationChecked(true);
    } else {
      console.log("Permissão de localização não concedida.");
      BackHandler.exitApp();
    }
  }, []);

  useEffect(() => {
    checkAuthentication();
    checkLocation();
  }, [checkAuthentication, checkLocation]);

  useEffect(() => {
    if (isLocationChecked) {
      const timer = setTimeout(() => {
        navigation.navigate("Login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLocationChecked, navigation]);

  return (
    <View style={styles.container}>
      <Image source={BorroVerde} style={styles.BorroVerde} />
      <Image source={Icon} style={styles.Icon} />
      <View style={styles.containerTxt}>
        <Label text={"SPORT"} type="logo" />
        <Label text={"MAP!"} type="logo" color="verde" />
      </View>
      {!isLocationChecked && <Text>Verificando localização...</Text>}
    </View>
  );
};

export default TelaEntrada;
