const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./configDB");

const app = express();
app.use(bodyParser.json());
app.use(cors());

require("./routes/authRoutes")(app);
require("./routes/coordRoutes")(app);
require("./routes/favoritosRoutes")(app);
require("./routes/historicoRoutes")(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
