import http from "../http-common";

const getAll = () => {
  return http.get("/inventario");
};

const InventaryService = { getAll };
export default InventaryService;
