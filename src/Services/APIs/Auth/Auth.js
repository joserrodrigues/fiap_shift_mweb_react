import api from "../Common/api";

const login = (data) => api.post("/authPersons/login", data);
const loginGoogle = (data) => api.post("/authPersons/loginGoogle", data);

const exportedObject = {
    login,
    loginGoogle
};
export default exportedObject;