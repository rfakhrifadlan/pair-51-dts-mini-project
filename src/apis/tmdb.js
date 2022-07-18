import axios from "axios";

// Di sini kita membuat instance dari axios
const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3c2f28c6251d9df950e023993dbec9e5",
  },
});

export default tmdbInstance;
