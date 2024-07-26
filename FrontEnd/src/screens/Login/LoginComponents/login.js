import AsyncStorage from "@react-native-async-storage/async-storage";
import { ip } from "../../../environments/develop";

export const LoginRoute = async (email, senha) => {

  try {
    const response = await fetch(`http://${ip}:3000/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (response.ok) {
      if (data.token && data.userId) {
        const token = data.token;
        const userId = data.userId;
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("userId", userId.toString());
        return { success: true, token, userId };
      } else {
       alert("Erro de credenciais")
      }
    } else {
      alert("Credenciais Invalidas");
    }
  } catch (error) {
    console.error("Erro de rede:", error);  
    return { success: false, error: "Erro de rede: " + error.message };
  }
};

