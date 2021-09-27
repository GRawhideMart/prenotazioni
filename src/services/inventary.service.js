import http from "../http-common";

const getAll = () => {
  return http.get("/inventario");
};

const removeOne = (id) => {
  return http.delete(`/inventario/${id}`);
};

const InventaryService = { getAll, removeOne };
export default InventaryService;
