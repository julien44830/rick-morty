const { create } = require("../database/models/users.model");

const add = async (req, res) => {
    try {
        const { email, password, is_admin } = req.body;

        const data = await create({ email, password, is_admin });
        console.log("%c⧭", "color: #aa00ff", data);

        res.status(200).send(data, user);
    } catch {
      res.status(500).send({ message: "Error creating user" });
    }
};

module.exports = { add };
