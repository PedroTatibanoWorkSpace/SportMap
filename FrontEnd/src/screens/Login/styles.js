import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2122",
    width: "100%",
    height: "100%",
  },
  BorroVerde: {
    width: "100%",
    height: windowHeight * 0.5,
    position: "absolute",
    top: 0,
    right: 0,
  },
  containerTxt: {
    paddingTop: windowHeight * 0.14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Iemail: {
    width: "100%",
    marginTop: 50,
  },
  saudacao: {
    marginTop: 50,
    alignItems: "center",
  },
  usuarioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "8%",
    marginBottom: "1%",
  },
  Isenha: {
    width: "100%",
    marginTop: 25,
  },
  lembreSenha: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "8%",
    marginTop: "2%",
  },
  lembreDeMim: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  esqueceuSenha: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 6,
    marginRight: "8%",
  },
  botaoEntrar: {
    alignItems: "center",
    marginTop: "15%",
  },
  naoTemConta: {
    alignItems: "center",
    marginTop: "6%",
  },
});
