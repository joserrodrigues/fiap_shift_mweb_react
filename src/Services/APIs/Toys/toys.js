import api from "../Common/api";

const getAllToys = () => api.get("/toys/getAll/");

export default {
    getAllToys
};