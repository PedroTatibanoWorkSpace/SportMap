import { Dimensions, StyleSheet } from "react-native";

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
  logo: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTxt: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    width: "100%",
    marginTop: 20,
  },
  usuarioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "8%",
    marginBottom: "2%",
  },
  termos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "6%",
    marginTop: "5%",
  },
  lembreDeMim: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  botaoCriar: {
    alignItems: "center",
    marginTop: "8%",
  },
});
