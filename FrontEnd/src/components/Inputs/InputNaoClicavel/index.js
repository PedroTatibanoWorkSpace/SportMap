import { TextInput, View } from "react-native";

import BotaoComImagem from "../../Buttons/BotaoComImagem";
import Label from "../../Label";
import React from "react";
import styles from "./styles";

const NoClickInput = ({
  TextoLabel,
  placeholderx,
  imagem,
  action,
  apenasInput = false,
  colorPlaceholder,
}) => {
  if (apenasInput) {
    return (
      <TextInput
        style={styles.input}
        placeholder={placeholderx}
        editable={false}
      />
    );
  }
  return (
    <View>
      <View
        style={{
          marginBottom: "2%",
          marginTop: "5%",
          justifyContent: "space-between",
          marginHorizontal: "10%",
          flexDirection: "row",
        }}
      >
        <Label text={TextoLabel} type="medium" />
        <BotaoComImagem imagem={imagem} action={action} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholderx}
        editable={false}
        placeholderTextColor={colorPlaceholder}
      />
    </View>
  );
};

export default NoClickInput;
