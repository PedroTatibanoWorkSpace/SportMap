import { Inter_700Bold, useFonts } from "@expo-google-fonts/inter";

import Label from "../../Label";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

const BotaoPadrao = ({ action, text }) => {
  useFonts({ Inter_700Bold });

  return (
    <TouchableOpacity style={styles.botao} onPress={action}>
      <Label type="body" color="preto" text={text} />
    </TouchableOpacity>
  );
};

export default BotaoPadrao;
