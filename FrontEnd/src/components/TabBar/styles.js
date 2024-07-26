import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardmap: {
    width: "100%",
    height: 85,
    backgroundColor: "#1B2122",
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  foto: {
    marginTop: 10,
    width: "95%",
    height: 150,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  vwInfo: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
    gap: 5,
  },
  vwText: {
    width: "60%",
    padding: 10,
    gap: 10,
  },
  txtNome: {
    color: "white",
    fontSize: 35,
    fontWeight: "700",
  },
  sportImg: {
    width: 95,
    height: 95,
    borderRadius: 90,
    backgroundColor: "#0E0E0E",
    alignItems: "center",
    justifyContent: "center",
  },
  Menu: {
    width: "90%",
    height: "15%",
    marginHorizontal: "10%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  BotaoFavoritos: {
    width: "45%",
    height: "80%",
    backgroundColor: "#64E3A1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  BotaoVoltar: {
    width: "45%",
    height: "80%",
    backgroundColor: "#FFF533",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  imgSport: {
    width: 70,
    height: 70,
  },
});

export default styles;
