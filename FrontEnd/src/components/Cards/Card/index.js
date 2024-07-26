import { Image, View } from "react-native";

import BotaoVoltar from "../../Buttons/BotaoVoltar";
import Label from "../../Label";
import React from "react";
import styles from "./styles";

const Card = ({ icon, action, text }) => (
  <View style={styles.card} onPress={action}>
    <View style={styles.primeiraLinha}>
      <View style={styles.iconView}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View style={styles.texto}>
        <Label text={text} type="body" />
      </View>
    </View>
    <View style={styles.botaoView}>
      <BotaoVoltar type="next" />
    </View>
  </View>
);

export default Card;
