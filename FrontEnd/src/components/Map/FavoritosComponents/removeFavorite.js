import { ip } from "../../../environments/develop";

export const removerFavorito = async (itemId, userId) => {
  try {
    const response = await fetch(`http://${ip}:3000/removerFavorito`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId, userId }),
    });

    if (!response.ok) {
      throw new Error("Erro ao remover favorito");
    }

    return response.json();
  } catch (error) {
    console.error("Erro ao remover favorito:", error);
    throw error;
  }
};
