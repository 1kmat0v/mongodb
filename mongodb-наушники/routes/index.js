var express = require('express');
var router = express.Router();

const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/toMongo", function(req,res){
 
async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("akm");
        const collection = db.collection("lmk");
        const info = {name: req.query.name, gmail: req.query.email, age: req.query.password};
        const result = await collection.insertOne(info);
        console.log(result);
        console.log(info);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);

console.log(req.query.name, req.query.email);
console.log(req.query.password);
res.render("111.hbs", {})
})



module.exports = router;

