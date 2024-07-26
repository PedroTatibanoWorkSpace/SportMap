const History = require("../models/history");

module.exports = (app) => {
  app.get("/historico", async (req, res) => {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "userId ausente na query da requisição" });
    }

    try {
      const historico = await History.findAll({ where: { user_id: userId } });
      res.json(historico);
    } catch (error) {
      console.error("Erro ao buscar histórico:", error);
      res.status(500).json({ error: "Erro ao buscar histórico" });
    }
  });

  app.post("/addHistorico", async (req, res) => {
    const { itemId, userId, endereco, nome, esporte, latitude, longitude } = req.body;

    if (!itemId || !userId || !endereco || !nome || !esporte || !latitude || !longitude) {
      return res.status(400).json({ error: "Dados incompletos no corpo da requisição" });
    }

    try {
      const newHistory = await History.create({
        item_id: itemId,
        user_id: userId,
        endereco,
        nome,
        esporte,
        latitude,
        longitude,
      });

      res.json({
        message: "Histórico adicionado com sucesso",
        historicoId: newHistory.id,
      });
    } catch (error) {
      console.error("Erro ao adicionar histórico:", error);
      res.status(500).json({ error: "Erro ao adicionar histórico" });
    }
  });

  app.delete("/removerHistorico", async (req, res) => {
    const { itemId, userId } = req.body;

    if (!itemId || !userId) {
      return res.status(400).json({ error: "Dados incompletos no corpo da requisição" });
    }

    try {
      await History.destroy({ where: { item_id: itemId, user_id: userId } });
      res.json({ message: "Histórico removido com sucesso" });
    } catch (error) {
      console.error("Erro ao remover histórico:", error);
      res.status(500).json({ error: "Erro ao remover histórico" });
    }
  });
};
