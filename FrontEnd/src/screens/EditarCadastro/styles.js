import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2122",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  BorroVerde: {
    width: "100%",
    height: windowHeight * 0.5,
    position: "absolute",
    top: 0,
    right: 0,
  },
  PrimeiraLinha: {
    paddingRight: 30,
    flexDirection: "row",
    gap: 5,
    marginTop: "8%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  inputView: {
    width: "100%",
    marginTop: 12,
  },
});
