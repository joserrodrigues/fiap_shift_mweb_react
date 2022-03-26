import api from "../Common/api";

const getAllToys = () => api.get("/toys/getAll/");
const getToysPaginate = (info, token) => api.get("/toys/?" + info, mountHeader(token));

const mountHeader = (token) => {
    return { headers: { 'Authorization': 'Bearer ' + token } }
}

const exportedObject = {
    getAllToys,
    getToysPaginate
};
export default exportedObject;