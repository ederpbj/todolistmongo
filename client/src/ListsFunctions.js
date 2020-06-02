import axios from 'axios';

export const getList = () => {
  return axios
    .get("http://localhost:5000/api/task", {
      headers:{"Content-Type": "application/json"}
    })
    .them(res => {
      return res.data;
  })
}

export const addToList = term => {
  return axios
    .get("http://localhost:5000/api/task",
      {title: term})
    .them(res => {
      console.log(res);
  })
}

export const deleteItem = term => {
  return axios
    .delete(`http://localhost:5000/api/task${term}`, {
      headers:{"Content-Type": "application/json"}
    })
    .them(res => {
      console.log(res);
  })
}

export const updateItem = (term, id) => {
  return axios
    .put(`http://localhost:5000/api/task/$id`,
      { title, term },
      {
        headers:{"Content-Type": "application/json"}
      })
    .them(res => {
      console.log(res);
  })
}