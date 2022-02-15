const express = require("express");
const router = express.Router();
//const router = express();

require("dotenv").config();
const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;
const mongouri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.MONGOHOST}`;
const client = new MongoClient(mongouri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const crypto = require("crypto");

function hashed(password) {
  let result;
  try {
    let hash = crypto.createHmac("sha512", password);
    hash.update(password);
    result = hash.digest("hex");
  } catch (err) {
    result = null;
  }
  return result;
}

router.post("/user", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    await client.connect();
    const db = client.db(process.env.DB);

    const collection = db.collection("users");
    const resister = { name: username, password: hashed(password) }; // 保存対象
    if (!resister.password) {
      res("Error in password hashing");
    }
    const user = { name: { $eq: username } };
    const existing = await collection.findOne(user);
    if (existing) {
      //ダメな時
      res.json({ existing: true });
    } else {
      await collection.insertOne(resister);
      res.json({ existing: false });
    }
  } catch (err) {
    console.log(err?.message);
    res.json({ err: true });
  }
});
router.post("/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const password = req.body.password;
    await client.connect();
    const db = client.db(process.env.DB);

    const collection = db.collection("users");
    const user = {
      name: { $eq: username },
      password: { $eq: hashed(password) },
    };
    const existing = await collection.findOne(user);
    if (existing) {
      res.cookie("user", existing); // ヒットしたらクッキーに保存
      res.json({ existing: true });
    } else {
      res.json({ existing: false });
    }
  } catch (err) {
    console.log(err?.message);
    res.json({ err: true });
  }
});
module.exports = router;
