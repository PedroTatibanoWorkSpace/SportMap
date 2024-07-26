import BotaoRadio from "../BotaoRadio";
import Label from "../../Label";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

const BotaoUnico = ({ text, type, color }) => (
  <TouchableOpacity style={styles.botao}>
    <BotaoRadio />
    <Label text={text} type={type} color={color} />
  </TouchableOpacity>
);

export default BotaoUnico;
