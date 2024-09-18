const express = require('express')
const app = express()
const router = express.Router();

require('dotenv').config()
const port = process.env.APP_PORT

app.use(express.json());

// Router area

const rickCharacterRouter = require("./src/router/rickCharacter/rickCharacter.routes");
router.use("/api", rickCharacterRouter);

const userRouter = require("./src/router/users/user.router");
router.use("/api", userRouter);

app.use(router);


// Listening server

app.listen(port, () => {
  console.log(`Rick and Morty server is listening on port ${port}`)
})