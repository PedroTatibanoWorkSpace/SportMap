import { ip } from "../../environments/develop";

export const buscarHistorico = async (userId) => {
    try {
      const response = await fetch(`http://${ip}:3000/historico?userId=${userId}`);
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error("Erro ao buscar histórico:", error);
      throw error;
    }
};
