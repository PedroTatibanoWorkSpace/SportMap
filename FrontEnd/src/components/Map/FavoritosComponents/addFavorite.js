import { ip } from "../../../environments/develop";

export const addFavorite = async (
  itemId,
  endereco,
  userId,
  nome,
  esporte,
  latitude,
  longitude
) => {
  try {
    console.log(itemId, endereco, userId, nome, esporte, latitude, longitude);
    const response = await fetch(`http://${ip}:3000/adicionarFavoritos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemId,
        endereco,
        userId,
        nome,
        esporte,
        latitude,
        longitude,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Erro desconhecido ao adicionar favorito");
    }

    return data.favoritoId;
  } catch (error) {
    console.error("Erro ao adicionar favorito:", error);
    throw error;
  }
};
