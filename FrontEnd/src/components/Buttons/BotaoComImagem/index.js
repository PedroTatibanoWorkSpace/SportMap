import { Image, TouchableOpacity } from "react-native";

import React from "react";
import styles from "./styles";

const BotaoComImagem = ({ imagem, action }) => (
  <TouchableOpacity onPress={action} style={styles.botao}>
    <Image source={imagem} style={styles.imagem} />
  </TouchableOpacity>
);

export default BotaoComImagem;
