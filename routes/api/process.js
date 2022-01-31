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

router.get("/acquisition/:id", async (req, res, next) => {
  let data = {};
  try {
    await client.connect();
    const db = client.db(process.env.DB);
    const user = { username: req.params.id };

    var collection = db.collection("expense");
    const expense = await collection.find(user).toArray();
    data.expense = expense;

    collection = db.collection("income");
    const income = await collection.find(user).toArray();
    data.income = income;

    client.close();
    res.json(data);
  } catch (err) {
    //console.log(err?.message);
    console.log(err);
    res.json({ err: true });
  }
});

router.post("/registering/:type", async (req, res, next) => {
  try {
    await client.connect();
    const db = client.db(process.env.DB);

    var collection;
    const type = req.params.type;
    if (type == "expense") {
      collection = db.collection("expense");
    } else {
      collection = db.collection("income");
    }

    const data = JSON.parse(req.body); // 保存対象
    console.log(data);
    await collection.insertMany(data);

    res.status(200); // HTTP ステータスコード返却
    client.close(); // DB を閉じる
  } catch (err) {
    //console.log(err?.message);
    console.log(err);
    res.json({ err: true });
  }
});
module.exports = router;
