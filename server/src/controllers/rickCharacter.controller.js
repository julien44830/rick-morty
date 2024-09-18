const { readAll } = require("../database/models/rickCharacter.model");

const browse = async (req, res) => {
  const data = await readAll();

  res.status(200).send(data);
};

module.exports = { browse }