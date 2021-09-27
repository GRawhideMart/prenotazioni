import http from "../http-common";

const getAll = () => {
  return http.get("/inventario");
};

const create = (data) => {
  return http.post("/inventario", data);
};

const removeOne = (id) => {
  return http.delete(`/inventario/${id}`);
};

const InventaryService = { getAll, create, removeOne };
export default InventaryService;
