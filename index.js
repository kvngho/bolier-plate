// start point of backed server
const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://kangho:%21%40%23%24l7k1h4@bolierplate.c8668.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongDB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world!"));

app.listen(port, () => console.log(`TEST ${port}!!`));
