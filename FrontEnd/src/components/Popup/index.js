import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import Basquete from "../../assets/Images/basquete.png";
import BotaoPadrao from "../Buttons/BotaoPadrao";
import Close from "../../assets/Images/x.png";
import Futebol from "../../assets/Images/futebol.png";
import Input from "../Inputs/InputLogin";
import { Registrar } from "./registrar";
import Volei from "../../assets/Images/volei.png";
import styles from "./styles";

const Popup = ({ newMarkerCoords, onClosePopup, openPopup }) => {
  const [localName, setLocalName] = useState("");
  const [selectedSport, setSelectedSport] = useState(null);

  const Clicavel = (buttonName) => {
    setSelectedSport(buttonName);
  };

  return (
    <View style={styles.popup}>
      {openPopup && (
        <>
          <TouchableOpacity style={styles.close} onPress={onClosePopup}>
            <Image source={Close} style={styles.imgClose} />
          </TouchableOpacity>
          <Text style={styles.title}>
            Gostaria de registrar um{" "}
            <Text style={[styles.title, styles.titleGreen]}>novo local</Text>?
          </Text>
          <View style={styles.inputArea}>
            <Text style={styles.label}>INSIRA O NOME DO LOCAL:</Text>
            <Input onChangeText={setLocalName} value={localName} />
          </View>
          <View style={styles.sport}>
            <Text style={styles.label}>
              QUAIS <Text style={styles.titleGreen}>ESPORTES</Text> PODEM SER
              PRATICADOS AQUI?
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={[
                  styles.btnSport,
                  selectedSport === "Futebol" && { backgroundColor: "#64E3A1" },
                ]}
                onPress={() => Clicavel("Futebol")}
              >
                <Image source={Futebol} style={styles.imgSport} />
                <Text style={styles.label}>Futebol</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnSport,
                  selectedSport === "Volei" && { backgroundColor: "#64E3A1" },
                ]}
                onPress={() => Clicavel("Volei")}
              >
                <Image source={Volei} style={styles.imgSport} />
                <Text style={styles.label}>Vôlei</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnSport,
                  selectedSport === "Basquete" && {
                    backgroundColor: "#64E3A1",
                  },
                ]}
                onPress={() => Clicavel("Basquete")}
              >
                <Image source={Basquete} style={styles.imgSport} />
                <Text style={styles.label}>Basquete</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btnRegistrar}>
            <BotaoPadrao
              text="Registrar"
              action={() =>
                Registrar(
                  selectedSport,
                  localName,
                  newMarkerCoords,
                  onClosePopup
                )
              }
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Popup;
