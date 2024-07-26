import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: "100%",
  },

  inputC: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    borderRadius: 10,
    textAlign: "left",
    backgroundColor: "#0A0A0A85",
    height: height * 0.06,
    marginHorizontal: width * 0.05,
    paddingLeft: width * 0.04,
    color: "#EEFAFC",
  },
});
