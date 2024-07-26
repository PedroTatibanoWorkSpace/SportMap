import { Image, TextInput, TouchableOpacity, View } from "react-native";

import Buscar from "../../../assets/Images/buscar.png";
import React from "react";
import X from "../../../assets/Images/x.png";
import styles from "./styles";

const InputBusca = ({
  placeholder,
  placeholderColor,
  onChangeText,
  value,
  action,
  type,
}) => {
  let selectedStyle = "";

  switch (type) {
    case "withBorder":
      selectedStyle = styles.withBorder;
      break;
    case "withoutBorder":
      selectedStyle = styles.withoutBorder;
      break;
    default:
      selectedStyle = styles.withBorder;
  }

  return (
    <View style={selectedStyle}>
      <Image source={Buscar} style={styles.Buscar} />
      <TextInput
        style={styles.inputB}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor || "#fff"}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={action}>
        <Image source={X} style={styles.x} />
      </TouchableOpacity>
    </View>
  );
};

export default InputBusca;
