import React from "react";
import styles from "./styles";
import { View, Image } from "react-native";
import Label from "../Label";

const CardCidade = ({ img, nome, esporte, end }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={img} style={styles.img} />
      </View>

      <View style={styles.textView}>
        <Label type="tittle" text={nome} />
        <Label type="normal" text={esporte} />
        <Label type="body" text={end} />
      </View>
    </View>
  );
};

export default CardCidade;
