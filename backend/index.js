import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";
// const { Mongoose } =Mongoose
dotenv.config();
import mongoose from "mongoose";

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT ;
const uri = process.env.REST_REVIEWS_DB_URI;

MongoClient.connect(uri, {
  poolSize: 50,
  // wtimeout: 2500,
  useUnifiedTopology:true,
  // useNewUrlParse: true,
})
  .catch((err) => {
    console.log("====================\n",err,);
    process.exit(1)
  })
  .then(async (client) => {
    // console.log(client)
    await RestaurantsDAO.injectDB(client);
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });

