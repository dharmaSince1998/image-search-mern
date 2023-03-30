// import fetch from "node-fetch";

import axios from "axios";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
// var bodyParser = require("body-parser");
const app = express();
// import { routes } from "./routes/index";
app.use(
  cors({
    origin: "https//localhost:3000",
  })
);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.ul1ec4t.mongodb.net/searchImage?retryWrites=true&w=majority"
);
const db = mongoose.connection;

db.on("success", () => console.log("connected to db"));
db.on("error", (error) => console.log(error));

app.listen(7000, () => console.log("connected to 7000"));
const API_URL = "https://api.unsplash.com";

const routes = express.Router();

const postSchema = new mongoose.Schema({
  urls: {
    type: Object,
    require: true,
  },
});

const Post = mongoose.model("image", postSchema);

const getPhotos = async () => {
  const allPics = await axios.get(
    `${API_URL}/photos/?client_id=XKOL0mtrOsVwum77sPqjIcTPGyRIO8IVJYcx9xiIIpM`
  );
  //   console.log(allPics);
  // let rawUrls = [];
  // print all raw urls
  allPics.data.forEach((element) => {
    // rawUrls.push(element.urls["raw"]);
    const post = new Post({
      urls: element.urls["raw"],
    });
    post.save();
  });
};

getPhotos();

routes.get("/", async (req, res) => {
  try {
    const images = await Post.find();
    res.json(images);
  } catch (err) {
    res.send("error" + err);
  }
});

app.use("/image", routes);

export default Post;
