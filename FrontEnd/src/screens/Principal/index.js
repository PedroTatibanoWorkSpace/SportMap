import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import BorroVerde from "../../assets/Images/BorroVerde.png";
import Compass from "../../assets/Images/Compass.png";
import IconPerfil from "../../assets/Images/IconPerfil.png";
import Icone from "../../assets/Images/Icone.png";
import Label from "../../components/Label";
import React from "react";
import styles from "./styles";

const Login = ({ navigation }) => {

  const TelaMap = () => {
    navigation.navigate("TelaPrincipal");
  };

  return (
    <View style={styles.container}>
      <Image source={BorroVerde} style={styles.BorroVerde} />
      <View style={styles.botao}>
        <TouchableOpacity style={styles.botaoPerfil}>
          <Image source={IconPerfil} style={styles.perfil} />
          <Text style={styles.textPerfil}>PERFIL</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.containerTxt, styles.containerTxt2]}>
        <Label text={"DAR UM"} type="logo" />
      </View>
      <View style={styles.containerTxt}>
        <Label text={"SPORT"} type="logo" />
        <Label text={"MAP!"} type="logo" color="verde" />
      </View>
      <View style={styles.botao}>
        <TouchableOpacity style={styles.botaoLocal} onPress={TelaMap}>
          <Image source={Icone} style={styles.icone} />
          <Text style={styles.textLocal}></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botao}>
        <TouchableOpacity style={styles.botaoCompass}>
          <Image source={Compass} style={styles.compass} />
          <Text style={styles.textPerfil}>LOCAIS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
