const client = require("../client");

const create = async ({ email, password, is_admin }) => {


  const [user] = await client.query("INSERT INTO user (email, password, is_admin) VALUES (?, ?, ?)", [email, password, is_admin]);
  console.log('%c⧭', 'color: #00bf00', user);

  return user;
}


module.exports = { create };