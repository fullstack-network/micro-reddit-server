import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.use("/", (req, res) => {
  res.send("Hello world");
});

app.listen(4000, () => {
  console.log("Listening on port 3000");
});
