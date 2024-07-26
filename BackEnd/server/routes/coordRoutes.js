const Coordenadas = require('../models/coordenadas');

module.exports = (app) => {
  app.get('/marks', async (req, res) => {
    try {
      const coords = await Coordenadas.findAll();
      res.json(coords);
    } catch (error) {
      console.error('Erro ao buscar coordenadas:', error);
      res.status(500).json({ error: 'Erro ao buscar coordenadas' });
    }
  });

  app.post('/mandarCoords', async (req, res) => {
    const { latitude, longitude, esportesPraticados, nome, userId } = req.body;
    try {
      const newCoord = await Coordenadas.create({
        Nome: nome,
        Latitude: latitude,
        Longitude: longitude,
        EsportesPraticados: esportesPraticados,
        user_id: userId
      });
      res.json({
        message: 'Coordenadas inseridas com sucesso',
        coordId: newCoord.IdCoord
      });
    } catch (error) {
      console.error('Erro interno do servidor ao inserir coordenadas:', error);
      res.status(500).json({ error: 'Erro interno do servidor ao inserir coordenadas' });
    }
  });
};
