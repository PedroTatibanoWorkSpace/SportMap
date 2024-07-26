import { StyleSheet } from "react-native";

export default StyleSheet.create({
  withBorder: {
    width: 300,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Inter_400Regular",
    backgroundColor: "#0E0E0E",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#64E3A1",
    borderRadius: 30,
  },
  withoutBorder: {
    width: 300,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Inter_400Regular",
    backgroundColor: "#0E0E0E",
    alignItems: "center",
    borderRadius: 30,
  },

  inputB: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  x: {
    height: 25,
    width: 25,
    marginRight: 15,
  },
  Buscar: {
    width: 25,
    height: 25,
    marginLeft: 15,
  },
});
