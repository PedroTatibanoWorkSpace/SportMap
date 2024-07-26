import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    minHeight: 90,
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#2A2A2A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#2A2A2A",
  },
  iconView: {
    width: 50,
    height: 50,
    backgroundColor: "#0E0E0E",
    borderRadius: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 28,
    width: 28,
    resizeMode: "contain",
  },
  texto: {
    marginLeft: "5%",
  },
  botaoView: {
    justifyContent: "flex-end",
  },
  primeiraLinha: {
    justifyContent: "flex-start",
    gap: 5,
    flexDirection: "row",
    width: "40%",
    alignItems: "center",
  },
});
