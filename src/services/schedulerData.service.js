import http from "../http-common";

const getAll = () => {
  return http.get("/schedulerData");
};

const create = (data) => {
  return http.post("/schedulerData", data);
};

const remove = (id) => {
  return http.delete(`/schedulerData/${id}`);
};

const update = (id, data) => {
  return http.patch(`/schedulerData/${id}`, data);
};

const SchedulerDataService = { getAll, create, remove, update };
export default SchedulerDataService;
