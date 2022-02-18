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

    let collection = db.collection("expense");
    const expense = await collection.find(user).sort({ Date: -1 }).toArray();
    data.expense = expense;

    collection = db.collection("income");
    const income = await collection.find(user).sort({ Date: -1 }).toArray();
    data.income = income;

    client.close();
    res.json(data);
  } catch (err) {
    //console.log(err?.message);
    console.log(err);
    res.json({ err: true });
  }
});

router.get("/searching/:id/:type", async (req, res, next) => {
  try {
    await client.connect();
    const db = client.db(process.env.DB);
    const date = req.query.date;
    const kind = req.query.kind;
    const condition = { username: req.params.id };
    if (date) {
      condition.Date = { $regex: date };
    }
    if (kind) {
      condition.Item = { $eq: kind };
    }

    const collection = db.collection(req.params.type);
    const data = await collection.find(condition).sort({ Date: -1 }).toArray();

    client.close();
    res.json(data);
  } catch (err) {
    console.log(err?.message);
  }
});

router.post("/registering/:type", async (req, res, next) => {
  try {
    await client.connect();
    const db = client.db(process.env.DB);

    const collection = db.collection(req.params.type);
    await collection.insertMany(req.body.data);

    res.status(200); // HTTP ステータスコード返却
    client.close(); // DB を閉じる
  } catch (err) {
    console.log(err?.message);
    res.json({ err: true });
  }
});

router.delete("/item/:type", async (req, res, next) => {
  try {
    await client.connect();
    const db = client.db(process.env.DB);

    const collection = db.collection(req.params.type);
    const id = req.body.id; // 保存対象
    await collection.deleteOne({ _id: new MongoDB.ObjectId(id) });

    res.status(200); // HTTP ステータスコード返却
    client.close(); // DB を閉じる
  } catch (err) {
    console.log(err?.message);
    res.json({ err: true });
  }
});
module.exports = router;
