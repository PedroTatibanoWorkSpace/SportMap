import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default StyleSheet.create({
  input: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    borderRadius: 10,
    textAlign: "left",
    backgroundColor: "#0A0A0A85",
    height: height * 0.06,
    marginHorizontal: width * 0.05,
    paddingLeft: width * 0.04,
    color: "#EEFAFC",
    justifyContent: "space-between",
  },
});
