import axios from "axios";

export default axios.create({
  baseURL: "https://membri.poliradio.it/api/calendario/index.php",
  headers: {
    "Content-Type": "application/www-formurlencoded",
  },
});
