import { Image, TouchableOpacity } from "react-native";

import React from "react";
import Voltar from "../../../assets/Images/voltar.png";
import styles from "./styles";

const BotaoVoltar = ({ action, type }) => {
  let selectedStyle = "";

  switch (type) {
    case "back":
      selectedStyle = styles.back;
      break;
    case "next":
      selectedStyle = styles.next;
      break;
  }

  return (
    <TouchableOpacity style={selectedStyle} onPress={action}>
      <Image source={Voltar} style={{ width: 10, height: 13 }} />
    </TouchableOpacity>
  );
};

export default BotaoVoltar;
