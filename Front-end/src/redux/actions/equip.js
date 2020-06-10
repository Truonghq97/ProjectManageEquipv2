import * as actionTypes from "./types";
import axios from "axios";

// Get List Data Equip
export const getlistEquip = (token) => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/api/equipments/", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch({
          type: actionTypes.GET_LIST_EQUIP,
          result: res,
        });
      })
      .catch((err) => {
        console.log("Fail", err);
      });
  };
};

// Add Equip
export const addEquip = (newEquip, token) => {
  return (dispatch) => {
    console.log(newEquip);
    console.log(token);

    axios
      .post("http://localhost:8000/api/equipment/add", newEquip, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        let data = res.data;
        dispatch({
          type: actionTypes.ADD_EQUIP,
          payload: {
            name: data.name,
            type: data.type,
            status: data.status,
            description: data.description,
          },
        });
        console.log("Add Equip Success!!");
      })
      .catch((err) => {
        console.log("Add Equip is Fail", err);
      });
  };
};

// Get Equip
export const getEquip = (id, token) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:8000/api/equipment/search/${id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        dispatch({ type: actionTypes.RECEIVE_EQUIP, equip: response.data });
      })
      .catch((error) => {
        throw error;
      });
  };
};

// Delete Equip
export const deleteEquip = (id, token) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:8000/api/equipment/delete/${id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        dispatch({
          type: actionTypes.REMOVE_EQUIP,
          payload: { id },
        });
      })

      .catch((error) => {
        throw error;
      });
  };
};

// Update Equip
export const updateEquip = (equip, token) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:8000/api/equipment/update/${equip._id}`, equip, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        const data = response.data;
        dispatch({
          type: actionTypes.UPDATE_EQUIP,
          payload: {
            id: data._id,
            name: data.name,
            type: data.type,
            status: data.status,
            description: data.description,
          },
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
