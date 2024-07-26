import { StyleSheet } from "react-native";

export default StyleSheet.create({
  back: {
    backgroundColor: "#0E0E0E",
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  next: {
    backgroundColor: "#0E0E0E",
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scaleX: -1 }],
  },
});
