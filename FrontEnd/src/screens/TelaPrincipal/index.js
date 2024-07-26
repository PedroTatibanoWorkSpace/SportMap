import React, { useEffect, useState } from "react";

import Map from "../../components/Map";
import TabBar from "../../components/TabBar";
import { VerificarToken } from "../Login/LoginComponents/verifica";
import { View } from "react-native";
import styles from "./styles";

const TelaPrincipal = ({ navigation, route }) => {
  
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const verificarAutenticacao = async () => {
      const tokenExists = await VerificarToken(navigation);
      if (!tokenExists) {
        navigation.navigate("Login");
      } else {
        const marker = route.params?.selectedMarker;
        if (marker) {
          setSelectedMarker(marker);
        }
      }
    };
    verificarAutenticacao();
  }, [navigation, route.params?.selectedMarker]);

  return (
    <View style={styles.Container}>
      <View style={styles.Map}>
        <Map navigation={navigation} route={route} selectedMarker={selectedMarker} />
      </View>
      <View style={styles.cardMap}>
        <TabBar tela={"principal"} />
      </View>
    </View>
  );
};

export default TelaPrincipal;
