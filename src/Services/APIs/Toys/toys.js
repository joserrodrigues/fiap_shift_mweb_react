import api from "../Common/api";

const getAllToys = () => api.get("/toys/getAll/");
const getToysPaginate = (info, token) => api.get("/toys/?" + info, mountHeader(token));
const uploadToysPhoto = (token, data) => api.post("/toys/uploadImage", data, mountHeader(token));
const addToy = (token, data) => api.post("/toys", data, mountHeader(token));

const mountHeader = (token) => {
    return { headers: { 'Authorization': 'Bearer ' + token } }
}

const exportedObject = {
    getAllToys,
    getToysPaginate,
    uploadToysPhoto,
    addToy
};
export default exportedObject;