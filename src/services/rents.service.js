import http from "../http-common";

const getAll = () => {
  return http.get("/rents");
};

const RentsService = { getAll };
export default RentsService;
