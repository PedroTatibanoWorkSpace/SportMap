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
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  PrimeiraLinha: {
    flexDirection: "row",
    marginLeft: -20,
    gap: 10,
    marginTop: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardMap: {
    position: "absolute",
    bottom: "0%",
    width: "100%",
    height: "10%",
    backgroundColor: "#1B2122",
    borderRadius: 15,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
