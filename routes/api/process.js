const express = require("express");
const router = express.Router();
require("dotenv").config();

//const MongoClient = MongoDb.MongoClient

router.get("/acquisition/:id", async (req, res, next) => {
  try {
    const { MongoClient } = require("mongodb");
    const mongouri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.MONGOHOST}/myapp0_db?retryWrites=true&w=majority`;
    const client = new MongoClient(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    client.connect((err) => {
      const db = client.db(process.env.DB);
      const collection = db.collection("expense");
      const user = { username: req.params.id };
      const data = collection.find(user);
      client.close();
      console.log(data);
    });
  } catch (err) {
    console.log(err?.message);
  }
  res.send("respond process");
});

module.exports = router;
