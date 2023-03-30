const express = require("express");
const Post = require("../server");

const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const images = await Post.find();
    res.json(images);
  } catch (err) {
    res.send("error" + err);
  }
});

// routes.post("/", async (req, res) => {
//   const data = new Post({
//     urls: urls.body.urls,
//   });
//   try {
//     const result = await data.save();
//     res.status(201).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "something went wrong" });
//   }
// });

export default routes;
