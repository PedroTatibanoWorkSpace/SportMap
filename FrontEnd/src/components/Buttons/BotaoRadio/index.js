import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

import styles from "./styles";

const BotaoRadio = ({ favoritadoInicial, onPress }) => {
  const [favoritado, setFavoritado] = useState(favoritadoInicial);

  useEffect(() => {
    setFavoritado(favoritadoInicial);
  }, [favoritadoInicial]);

  const Acao = () => {
    const novoEstado = !favoritado;
    setFavoritado(novoEstado);
    if (onPress) {
      onPress(novoEstado);
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: favoritado ? "#64E3A1" : "#fff" },
        ]}
        onPress={Acao}
      />
    </View>
  );
};

export default BotaoRadio;
