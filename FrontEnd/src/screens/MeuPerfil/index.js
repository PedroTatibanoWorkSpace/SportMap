import { Image, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";

import BorroVerde from "../../assets/Images/BorroVerde.png";
import Card from "../../components/Cards/Card";
import FotoPerfil from "../../assets/Images/IconPerfil.png";
import ImagemVisual from "../../components/FotoUsuario";
import Label from "../../components/Label";
import { Logout } from "../Login/LoginComponents/logout";
import LogoutImg from "../../assets/Images/Logout.png";
import TabBar from "../../components/TabBar";
import { VerificarToken } from "../Login/LoginComponents/verifica";
import styles from "./styles";

const MeuPerfil = ({ navigation }) => {
  useEffect(() => {
    VerificarToken();
  }, []);

  useEffect(() => {
    const verificarAutenticacao = async () => {
      const tokenExists = await VerificarToken(navigation);
      if (!tokenExists) {
        navigation.navigate("Login");
      }
    };
    verificarAutenticacao();
  }, [navigation]);

  async function LogoutPress() {
    const result = await Logout(navigation);
    if (result.success) {
      navigation.navigate("Login");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={BorroVerde} style={styles.BorroVerde} />
      <View style={styles.PrimeiraLinha}>
        <Label text={"Meu perfil"} type={"tittle"} />
      </View>
      <View style={{ marginTop: "5%", alignItems: "center" }}>
        <ImagemVisual foto={FotoPerfil} />
      </View>
      <View style={{ marginTop: 15, alignItems: "center", marginBottom: 30 }}>
        <Label text={"Usuario"} type={"tittle"} />
      </View>

      <View>
        <TouchableOpacity onPress={LogoutPress}>
          <Card text="Fazer Logout" icon={LogoutImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardMap}>
        <TabBar tela={"user"} />
      </View>
    </View>
  );
};

export default MeuPerfil;
