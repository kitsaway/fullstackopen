import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

const addPerson = (data) => {
  const req = axios.post(baseUrl, data);
  return req.then((res) => res.data);
};

const updatePerson = (id, newData) => {
  const req = axios.put(`${baseUrl}/${id}`, newData);
  return req.then((res) => res.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}
export default { getAll, addPerson, updatePerson, deletePerson };
