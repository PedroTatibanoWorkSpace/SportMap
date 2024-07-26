import { Image, View } from "react-native";

import BorroVerde from "../../assets/Images/BorroVerde.png";
import BotaoVoltar from "../../components/Buttons/BotaoVoltar";
import Editarimg from "../../assets/Images/CanetaEditar.png";
import FotoPerfil from "../../assets/Images/fotoperfil.png";
import ImagemVisual from "../../components/FotoUsuario";
import Label from "../../components/Label";
import NoClickInput from "../../components/Inputs/InputNaoClicavel";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const EditarCadastro = () => {
  const navigation = useNavigation();

  const EditarNome = () => {};

  const Voltar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={BorroVerde} style={styles.BorroVerde} />
      <View style={styles.PrimeiraLinha}>
        <BotaoVoltar action={Voltar} />
        <Label text={"Conta"} type={"tittle"} />
      </View>
      <View style={{ marginTop: "5%" }}>
        <ImagemVisual foto={FotoPerfil} />
      </View>
      <View style={{ marginTop: 15 }}>
        <Label text={"Usuario"} type={"tittle"} />
      </View>
      <View style={{ width: "100%" }}>
        <NoClickInput
          TextoLabel={"NOME REGISTRADO"}
          placeholderx={`Nome Usuario`}
          imagem={Editarimg}
          action={EditarNome}
        />
        <NoClickInput TextoLabel={"E-MAIL REGISTRADO"} placeholderx={`Email`} />

        <NoClickInput
          TextoLabel={"ESPORTE MAIS PRATICADO"}
          placeholderx={`Esporte`}
        />

        <NoClickInput
          TextoLabel={"SENHA"}
          placeholderx={`senha`}
          imagem={Editarimg}
          action={EditarNome}
        />
      </View>
    </View>
  );
};

export default EditarCadastro;
