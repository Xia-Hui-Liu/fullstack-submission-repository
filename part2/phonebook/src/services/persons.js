import axios from "axios";

const baseUrl = 'http://localhost:4001/api/persons';

const getAll = async() => {
    const request = await axios.get(baseUrl);
    return request
};

const create = async(personObject) => {
    const request = await axios.post(baseUrl, personObject);
    return request
};

const update = async(id, personObject) => {
    const request = await axios.put(`${baseUrl}/${id}`, personObject);
    return request
};

const dele = async(id) => {
    const request = await axios.delete(`${baseUrl}/${id}`);
    return request
};

export default { getAll, create, update, dele }