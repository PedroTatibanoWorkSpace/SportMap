import { Image, View } from "react-native";
import React, { useState } from "react";

import BorroVerde from "../../assets/Images/BorroVerde.png";
import BotaoLink from "../../components/Buttons/BotaoLink";
import BotaoPadrao from "../../components/Buttons/BotaoPadrao";
import Input from "../../components/Inputs/InputLogin";
import Label from "../../components/Label";
import { criarUsuario } from "./cadastrar";
import styles from "./styles";
import { verificarEmailCadastrado } from "./verificarEmailCadastrado";

const Cadastro = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const Login = () => {
    navigation.navigate("Login");
  };

  const validarSenha = (senha) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(senha);
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const Criar = async () => {
    if (!user || !email || !senha || !confirmarSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!validarEmail(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    if (!validarSenha(senha)) {
      alert(
        "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número."
      );
      return;
    }

    try {
      const emailCadastrado = await verificarEmailCadastrado(email); 
      if (emailCadastrado) {
        alert("Este e-mail já está cadastrado. Por favor, escolha outro.");
        return;
      }

      await criarUsuario(user, email, senha);
      navigation.navigate("Login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={BorroVerde} style={styles.BorroVerde} />
      <View style={styles.logo}>
        <Label text={"SPORT"} type="logo" />
        <Label text={"MAP!"} type="logo" color="verde" />
      </View>
      <View style={styles.containerTxt}>
        <Label text={"CRIE UM "} type="tittle" />
        <Label text={"CADASTRO"} type="tittle" color="verde" />
      </View>
      <View style={styles.username}>
        <View style={styles.usuarioContainer}>
          <Label text={"USERNAME:"} type="little" />
        </View>
        <Input onChangeText={setUser} value={user} />
      </View>

      <View style={styles.username}>
        <View style={styles.usuarioContainer}>
          <Label text={"EMAIL:"} type="little" />
        </View>
        <Input onChangeText={setEmail} value={email} />
      </View>

      <View style={styles.username}>
        <View style={styles.usuarioContainer}>
          <Label text={"SENHA:"} type="little" />
        </View>
        <Input onChangeText={setSenha} value={senha} secureTextEntry={true} />
      </View>

      <View style={styles.username}>
        <View style={styles.usuarioContainer}>
          <Label text={"CONFIRMAR SENHA:"} type="little" />
        </View>
        <Input
          onChangeText={setConfirmarSenha}
          value={confirmarSenha}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.botaoCriar}>
        <BotaoPadrao text={"CRIAR CONTA"} action={Criar} />
      </View>
      <View style={styles.botaoCriar}>
        <BotaoLink text={"Já tem uma conta?"} action={Login} />
      </View>
    </View>
  );
};

export default Cadastro;
