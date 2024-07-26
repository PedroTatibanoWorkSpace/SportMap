import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2122",
    alignItems: "center",
    height: "100%",
  },
  BorroVerde: {
    width: "100%",
    height: windowHeight * 0.5,
    position: "absolute",
    top: 0,
    right: 0,
  },
  titulo: {
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  img: {
    width: 40,
    height: 40,
    marginTop: 5,
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
