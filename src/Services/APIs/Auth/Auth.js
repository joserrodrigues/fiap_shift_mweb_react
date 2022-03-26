import api from "../Common/api";

const login = (data) => api.post("/authPersons/login", data);

const exportedObject = {
    login,
};
export default exportedObject;