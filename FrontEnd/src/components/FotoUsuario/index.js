import { Image, View } from "react-native";

import styles from "./styles";

export default function ImagemVisual({ foto }) {
  return (
    <View style={styles.ViewImagem}>
      <Image source={foto} style={styles.Imagem} />
    </View>
  );
}
