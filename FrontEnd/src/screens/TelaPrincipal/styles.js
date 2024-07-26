import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
    justifyContent: "flex-start",
  },
  ViewInput: {
    marginTop: "10%",
    zIndex: 1,
    position: "absolute",
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
  map: {
    flex: 1,
    width: "100%",
  },
  Map: {
    height: "100%",
    width: "100%",
  },
});
