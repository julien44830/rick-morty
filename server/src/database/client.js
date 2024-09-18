const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const mysql = require("mysql2/promise");

const client = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

client.checkConnection = () => {
  client
    .getConnection()
    .then((connection) => {
      console.info(`👍 Success ! Utilisation de la base de données ${DB_NAME}`);

      connection.release();
    })
    .catch((error) => {
      console.warn(
        "⚠️ Warning :",
        "Impossible de se connecter à la base de données.",
        "Prioritairement, veuillez vérifier les informations du fichier .env"
      );
      console.warn(error.message);
    });
};

client.databaseName = DB_NAME;

module.exports = client;