import http from "../http-common";

const getAll = () => {
  return http.get("/inventario");
};

const create = (data) => {
  return http.post("/inventario", data);
};

const update = (id, data) => {
  return http.put(`/inventario/${id}`, data);
};

const removeOne = (id) => {
  return http.delete(`/inventario/${id}`);
};

const InventaryService = { getAll, create, update, removeOne };
export default InventaryService;
