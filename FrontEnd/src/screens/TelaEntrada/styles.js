import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2122",
    justifyContent: "center",
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
  Icon: {
    width: "50%",
    aspectRatio: 1,
  },
  containerTxt: {
    paddingTop: "10%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "10%",
  },
});
