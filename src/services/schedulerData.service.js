import http from "../http-common";

const getAll = () => {
  return http.get("/schedulerData");
};

const SchedulerDataService = { getAll };
export default SchedulerDataService;
