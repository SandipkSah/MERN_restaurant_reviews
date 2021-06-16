import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT;
const url = process.env.RESTREVIEWS_DB_URI;

// const client = new MongoClient.connect(uri, {
//   poolSize: 50,
//   wtimeout: 2500,
//   useNewUrlParse: true,
//   useUnifiedTopology: true
// })
//   .catch((err) => {
//     console.error(err.stack);
//     //process.exit(1)
//   })
//   .then(async (client) => {
//     await RestaurantsDAO.injectDB(client);
//     await ReviewsDAO.injectDB(client);
//     app.listen(port, () => {
//       console.log(`listening on port ${port}`);
//     });
//   });

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect((err) => {
//   await client.db(process.env.RESTREVIEWS_NS)
//   .collection("restaurants");
//   console.log("database connected")
//   // perform actions on the collection object
//   client.close();
// });

// MongoClient.connect(
//   process.env.RESTREVIEWS_DB_URI,
//   {
//     poolSize: 50,
//     wtimeout: 2500,
//     useNewUrlParse: true }
//   )
//   .catch(err => {
//     console.error(err.stack)
//     //process.exit(1)
//   })
//   .then(async client => {
//     await RestaurantsDAO.injectDB(client)
//     await ReviewsDAO.injectDB(client)
//     app.listen(port, () => {
//       console.log(`listening on port ${port}`)
//     })
//   })

MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  RestaurantsDAO.injectDB(client);
  ReviewsDAO.injectDB(client);
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });

  const db = client.db(dbName);
});
