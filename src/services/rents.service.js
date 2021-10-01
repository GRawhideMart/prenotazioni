import http from "../http-common";

const getAll = () => {
  return http.get("/affitti");
};

const RentsService = { getAll };
export default RentsService;
