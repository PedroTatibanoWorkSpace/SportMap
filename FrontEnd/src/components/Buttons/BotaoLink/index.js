import { Text, TouchableOpacity } from "react-native";

import React from "react";
import styles from "./styles";

const BotaoLink = ({ action, text }) => (
  <TouchableOpacity onPress={action}>
    <Text style={styles.botao}>{text}</Text>
  </TouchableOpacity>
);

export default BotaoLink;
