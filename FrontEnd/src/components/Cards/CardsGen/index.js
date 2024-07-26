import { TouchableOpacity, View } from "react-native";

import BotaoVoltar from "../../Buttons/BotaoVoltar";
import Label from "../../Label";
import React from "react";
import styles from "./styles";

const CardsGen = ({ nome, endereco, esporte, acao }) => {
  return (
    <TouchableOpacity style={styles.viewPrincipal} onPress={acao}>
      <View style={styles.viewSecundaria}>
        <View style={styles.nome}>
          <Label text={nome} type={"tittle"} />
        </View>
        <View style={styles.endereco}>
          <Label text={endereco} type={"medium"} />
        </View>
        <View style={styles.cidade}>
          <Label text={esporte} type={"normal"} color={"verde"} />
        </View>
      </View>
      <BotaoVoltar type={"next"} action={acao} />
    </TouchableOpacity>
  );
};

export default CardsGen;
