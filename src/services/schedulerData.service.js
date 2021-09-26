import http from "../http-common";

const getAll = () => {
  return http.get("/schedulerData");
};

const create = (data) => {
  return http.post("/tutorials", data);
};

const SchedulerDataService = { getAll, create };
export default SchedulerDataService;
