// Require all necessary dependencies
const express = require("express");
const sequelize = require("./Develop/config/connection");
const routes = require("./Develop/routes");

// Import the sequelize connection to the 3001 Port
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
// Syncs models to the DB and begins the server
// Force False so that existing tables will not be dropped when creating tables
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
