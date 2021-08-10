// import http from "../http-common";
import axios from "axios";

const http = axios.create({
  baseURL:
    "https://restaurantbackend4.herokuapp.com/api/v1/restaurants",
  headers: {
    "Content-type": "application/json",
  },
});

class RestaurantDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  get(id) {
    // console.log("gggggggggggggggg", id)
    // const returnedData = http.get(`?id=${id}`)
    
    return http.get(`/id?${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return http.post("/review-new", data);
  }

  updateReview(data) {
    return http.put("/review-edit", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/review-delete?id=${id}`, {
      data: { user_id: userId },
    });
  }

  getCuisines(id) {
    return http.get(`/cuisines`);
  }
}

export default new RestaurantDataService();
