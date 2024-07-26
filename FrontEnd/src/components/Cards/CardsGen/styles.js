import { StyleSheet } from "react-native";

export default StyleSheet.create({
  viewPrincipal: {
    height: 130,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#2A2A2A",
    borderTopWidth: 1,
    borderColor: "#2A2A2A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  viewSecundaria: {
    gap: 5,
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },
  nome: {
    marginBottom: 5,
  },
  endereco: {
    marginBottom: 5,
  },
  cidade: {
    marginBottom: 5,
  },
});
