import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const Label = ({ text, color, type }) => {
  let selectedStyle = "";

  if (type === "negrito") {
    selectedStyle = styles.body.negrito;
  } else {
    switch (type) {
      case "logo":
        selectedStyle =
          color === "verde" ? styles.logo.verde : styles.logo.branco;
        break;
      case "tittle":
        selectedStyle =
          color === "verde" ? styles.tittle.verde : styles.tittle.branco;
        break;
      case "normal":
        selectedStyle =
          color === "verde" ? styles.normal.verde : styles.normal.branco;
        break;
      case "body":
        selectedStyle =
          color === "preto" ? styles.body.preto : styles.body.branco;
        break;
      case "medium":
        selectedStyle =
          color === "verde" ? styles.medium.verde : styles.medium.branco;
        break;
      case "little":
        selectedStyle =
          color === "verde" ? styles.little.verde : styles.little.branco;
        break;
      default:
        selectedStyle = styles.body.branco;
    }
  }

  return <Text style={selectedStyle}>{text}</Text>;
};

export default Label;
