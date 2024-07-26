import AsyncStorage from "@react-native-async-storage/async-storage";

export const Logout = async (navigation) => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("userId");
      navigation.navigate("Login");
      return { success: true };
    } catch (error) {
      console.error("Erro durante o logout:", error);
      return { success: false, error: "Erro durante o logout" };
    }
  };