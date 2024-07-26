import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  modalizeContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: "#1B2122",
  },
  viewModalize: {
    flex: 1,
    backgroundColor: "#1B2122",
    padding: 15,
  },
  buttonsModalize: {
    marginTop: "1%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
  },
  buttonFav: {
    width: "45%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#64E3A1",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    height: 50,
  },
  buttonVoltar: {
    width: "45%",
    backgroundColor: "#FFF533",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  viewRota: {
    height: 60,
    flexDirection: "row",
    marginTop: "10%",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonRoute: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#000",
    justifyContent: "center",
  },
});
