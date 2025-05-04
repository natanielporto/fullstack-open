import axios from "axios";

const URL = "http://localhost:3001/people";

export const postPerson = (person) =>
  axios
    .post(URL, {
      name: person.newName,
      number: person.newPhone,
    })
    .then((response) => response.data);

export const getPeople = () => axios.get(URL).then((response) => response.data);
