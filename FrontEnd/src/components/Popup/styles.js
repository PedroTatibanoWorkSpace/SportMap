import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  popup: {
    width: "95%",
    minHeight: 600,
    backgroundColor: "#1B2122",
    borderRadius: 15,
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    left: "2%",
    top: "12%",
  },
  close: {
    width: 30,
    height: 30,
    borderRadius: 90,
    backgroundColor: "#0E0E0E",
    alignSelf: "flex-end",
    marginTop: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imgClose: {
    width: 20,
    height: 20,
  },
  title: {
    paddingTop: 30,
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
  titleGreen: {
    color: "#64E3A1",
  },
  inputArea: {
    marginTop: 30,
    width: "100%",
    justifyContent: "center",
    gap: 5,
  },
  label: {
    color: "#EEFAFC",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 1,
    marginHorizontal: 10,
  },
  sport: {
    paddingTop: 40,
  },
  buttons: {
    paddingTop: 20,
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  btnSport: {
    paddingTop: 40,
    width: 100,
    height: 95,
    borderRadius: 90,
    backgroundColor: "#0E0E0E",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  imgSport: {
    width: 70,
    height: 70,
  },
  btnRegistrar: {
    alignItems: "center",
    marginTop: 80,
  },
});

export default styles;
