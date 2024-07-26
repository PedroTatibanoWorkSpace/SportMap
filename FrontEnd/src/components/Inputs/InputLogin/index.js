import { TextInput, View } from "react-native";

import React from "react";
import styles from "./styles";

const Input = ({
  placeholder,
  placeholderColor,
  onChangeText,
  value,
  secureTextEntry,
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.inputC}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor || "#999999"}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCorrect={true}
    />
  </View>
);

export default Input;
