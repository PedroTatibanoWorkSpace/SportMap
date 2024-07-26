//favoritosRoutes.js

const Favorites = require("../models/favorites");

module.exports = (app) => {
  app.get("/pegarFavoritos", async (req, res) => {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "userId ausente na query da requisição" });
    }

    try {
      const favoritos = await Favorites.findAll({ where: { user_id: userId } });
      res.json(favoritos);
    } catch (error) {
      console.error("Erro ao buscar favoritos:", error);
      res.status(500).json({ error: "Erro ao buscar favoritos" });
    }
  });

  app.post("/adicionarFavoritos", async (req, res) => {
    const { itemId, userId, endereco, nome, esporte, latitude, longitude } = req.body;

    if (!itemId || !userId || !endereco || !nome || !esporte || !latitude || !longitude) {
      return res.status(400).json({ error: "Dados incompletos no corpo da requisição" });
    }

    try {
      const newFavorite = await Favorites.create({
        item_id: itemId,
        user_id: userId,
        endereco,
        nome,
        esporte,
        latitude,
        longitude,
      });

      res.json({
        message: "Favorito adicionado com sucesso",
        favoritoId: newFavorite.id,
      });
    } catch (error) {
      console.error("Erro ao adicionar favorito:", error);
      res.status(500).json({ error: "Erro ao adicionar favorito" });
    }
  });

  app.delete("/removerFavorito", async (req, res) => {
    const { itemId, userId } = req.body;

    if (!itemId || !userId) {
      return res.status(400).json({ error: "Dados incompletos no corpo da requisição" });
    }

    try {
      await Favorites.destroy({ where: { item_id: itemId, user_id: userId } });
      res.json({ message: "Favorito removido com sucesso" });
    } catch (error) {
      console.error("Erro ao remover favorito:", error);
      res.status(500).json({ error: "Erro ao remover favorito" });
    }
  });
};
