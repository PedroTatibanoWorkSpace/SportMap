import { ip } from "../../../environments/develop";

export const addHistory = async (
  userId,
  itemId,
  endereco,
  nome,
  esporte,
  latitude,
  longitude
) => {
  try {
    const response = await fetch(`http://${ip}:3000/addHistorico`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        itemId,
        endereco,
        nome,
        esporte,
        latitude,
        longitude,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Erro desconhecido ao adicionar ao histórico");
    }

    return data.message;
  } catch (error) {
    console.error("Erro ao adicionar ao histórico:", error);
    throw error;
  }
};
