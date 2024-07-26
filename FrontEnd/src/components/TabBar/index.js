import { Image, TouchableOpacity, View } from "react-native";

import EstrelaBranca from "../../assets/Images/estrelaBranca.png";
import EstrelaVerde from "../../assets/Images/Fav.png";
import HomeBranco from "../../assets/Images/homeBranco.png";
import HomeVerde from "../../assets/Images/homeVerde.png";
import React from "react";
import RelogioBranco from "../../assets/Images/relogioBranco.png";
import RelogioVerde from "../../assets/Images/relogio.png";
import UserBranco from "../../assets/Images/IconPerfil.png";
import UserVerde from "../../assets/Images/MiniUser.png";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const TabBar = ({ tela }) => {
  const navigation = useNavigation();

  const getIconImage = (screen) => {
    switch (screen) {
      case "principal":
        return tela === "principal" ? HomeVerde : HomeBranco;
      case "historico":
        return tela === "historico" ? RelogioVerde : RelogioBranco;
      case "favoritos":
        return tela === "favoritos" ? EstrelaVerde : EstrelaBranca;
      case "user":
        return tela === "user" ? UserVerde : UserBranco;
      default:
        return null;
    }
  };

  const favoritos = () => {
    navigation.navigate("Favoritos");
  };

  const principal = () => {
    navigation.navigate("TelaPrincipal");
  };

  const historico = () => {
    navigation.navigate("Historico");
  };

  const user = () => {
    navigation.navigate("Meu Perfil");
  };

  return (
    <View style={styles.cardmap}>
      <TouchableOpacity style={styles.Buttons} onPress={principal}>
        <Image
          source={getIconImage("principal")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Buttons} onPress={historico}>
        <Image
          source={getIconImage("historico")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Buttons} onPress={favoritos}>
        <Image
          source={getIconImage("favoritos")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Buttons} onPress={user}>
        <Image
          source={getIconImage("user")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
