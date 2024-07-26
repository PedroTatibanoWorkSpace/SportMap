import { ip } from "../../environments/develop";

const BuscarFavs = async (userId) => {
  try {
    const response = await fetch(`http://${ip}:3000/pegarFavoritos?userId=${userId}`);

    if (!response.ok) {
      throw new Error("Erro desconhecido ao buscar favoritos");
    }

    const data = await response.json();

    const favoritos = data.map(fav => ({
      id: fav.id,
      userId: fav.user_id,
      itemId: fav.item_id,
      endereco: fav.endereco,
      nome: fav.nome,
      esporte: fav.esporte,
      coords: {
        latitude: parseFloat(fav.latitude),
        longitude: parseFloat(fav.longitude),
      }
    }));

    return favoritos;
  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    return [];
  }
};

export default BuscarFavs;
