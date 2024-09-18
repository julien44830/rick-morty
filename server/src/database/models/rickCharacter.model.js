const client = require("../client");

const readAll = async () => {
  const [character] = await client.query("SELECT * FROM rick_character");

  return character;
}


module.exports = { readAll };