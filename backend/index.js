import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";
dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
  process.env.REST_REVIEWS_DB_URI,
  { native_parser: true },
  function (err, db) {
    assert.equal(null, err);

    db.collection(process.env.RESTREVIEWS_NS).update(
      { a: 1 },
      { b: 1 },
      { upsert: true },
      function (err, result) {
        // assert.equal(null, err);
        // assert.equal(1, result);
        console.log(`connectio entering............`);
        db.close();
      }
    );
  }
);

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
//     console.log(`----------------${client}`)
//     await RestaurantsDAO.injectDB(client)
//     await ReviewsDAO.injectDB(client)
//     app.listen(port, () => {
//       console.log(`listening on port ${port}`)
//     })
//   })
