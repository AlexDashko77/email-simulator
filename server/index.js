const express = require("express");
const cors = require("cors");
const authRouter = require("./authRouter");
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/chat", authRouter);

const start = () => {
  try {
    app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
