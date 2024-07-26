import { Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import BorroVerde from "../../assets/Images/BorroVerde.png";
import CardsGen from "../../components/Cards/CardsGen";
import History from "../../assets/Images/History.png";
import Label from "../../components/Label";
import TabBar from "../../components/TabBar";
import { buscarHistorico } from "./buscarHistorico";
import styles from "./styles";
import { VerificarToken } from "../Login/LoginComponents/verifica";

const Historico = () => {
  const [historico, setHistorico] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const verificarAutenticacao = async () => {
      const tokenExists = await VerificarToken(navigation);
      if (!tokenExists) {
        navigation.navigate("Login");
      } 
    };
    verificarAutenticacao();
  }, [navigation]);

  useEffect(() => {
    const carregarHistorico = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const dadosHistorico = await buscarHistorico(userId);
        setHistorico(dadosHistorico);
      } catch (error) {
        console.error("Erro ao carregar histórico:", error);
      }
    };
    if (isFocused) {
      carregarHistorico();
    }
  }, [isFocused]);

  const abrirNaTelaPrincipal = (historicoItem) => {
    navigation.navigate("TelaPrincipal", { selectedMarker: historicoItem });
  };

  return (
    <View style={styles.container}>
      <Image source={BorroVerde} style={styles.BorroVerde} />

      <View style={styles.titulo}>
        <Label type="tittle" text="Histórico" />
        <Image style={styles.img} source={History} />
      </View>

      <View style={{ flex: 1 }}>
        {historico.map((item, index) => (
          <CardsGen
            key={index}
            nome={item.nome}
            endereco={item.endereco}
            esporte={item.esporte}
            acao={() => abrirNaTelaPrincipal(item)}
          />
        ))}
      </View>

      <View style={styles.cardMap}>
        <TabBar tela={"historico"} />
      </View>
    </View>
  );
};

export default Historico;
