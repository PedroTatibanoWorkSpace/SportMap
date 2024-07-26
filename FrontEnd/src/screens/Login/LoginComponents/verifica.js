import AsyncStorage from "@react-native-async-storage/async-storage";

export const VerificarToken = async (navigation) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        navigation.navigate("Login");
        return false;
      }
      return true;
    } catch (error) {
      console.error("Erro ao verificar token:", error);
      return false;
    }
  };