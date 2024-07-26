import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    minWidth: windowWidth * 0.9,
    flexDirection: "row",
    marginHorizontal: 20,
    paddingVertical: 30,
    borderTopWidth: 2,
    borderTopColor: "white",
    gap: 5,
  },
  imgView: {
    minHeight: 90,
    minWidth: 120,
  },
  img: {
    minHeight: 90,
    minWidth: 120,
    borderRadius: 20,
  },
  textView: {
    width: windowWidth * 0.6,
    alignSelf: "center",
    gap: 5,
  },
});
