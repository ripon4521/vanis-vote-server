


const express = require('express')
require('dotenv').config()

const app = express()

const cors = require('cors')
const port = process.env.PORT ||5000;

app.use(cors());
app.use(express.json())







const { MongoClient, ServerApiVersion, ObjectId  } = require('mongodb');
const uri = `mongodb+srv://rechargeDB:usAPIL8MCWvy4zY2@cluster0.xm8ksdz.mongodb.net/?retryWrites=true&w=majority`;
// mongodb+srv://<username>:<password>@cluster0.b1mistq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const ordersCollections = client.db('HarbalShopDB').collection("order");


    app.post('/orders/create', async(req, res) => {
        const data = req.body;
        console.log(data)
        const result = await ordersCollections.insertOne(data);
        res.send(result)
    })
   












    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}






run().catch(console.dir);





app.get('/', (req, res) => {
  res.send('Welcome to Harbel Shop Server')

})

app.listen(port, () => {
  console.log(`Harbel Shop Server listening on port ${port}`)
})