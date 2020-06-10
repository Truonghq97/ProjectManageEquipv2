import * as actionTypes from "./types";
import axios from "axios";
// import history from "../../history"

// Login
export const loginActions = (userData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/login", userData)
      .then((res) => {
        if (res.data.data) {
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            result: res.data,
          });
        } else {
          dispatch({
            type: actionTypes.LOGIN_FAILED,
            errorMessage: "Username or password is incorrect",
          });
        }
      })
      .catch((err) => {
        console.log("Login Fail", err);
      });
  };
};

// Get List Data User
export const getListUser = (token) => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/api/users/", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch({
          type: actionTypes.GET_LIST_USER,
          result: res,
        });
      })
      .catch((err) => {
        console.log("Fail", err);
      });
  };
};

// Add User
export const addUserAction = (newUser, token) => {
  return (dispatch) => {
    console.log(newUser);
    console.log(token);

    axios
      .post("http://localhost:8000/api/user/add", newUser, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        let data = res.data;
        dispatch({
          type: actionTypes.ADD_USER,
          payload: {
            userName: data.userName,
            password: data.password,
            role: data.role,
            email: data.email,
          },
        });
        console.log("Add User Success!!");
      })
      .catch((err) => {
        console.log("Add  User is Fail", err);
      });
  };
};

// Get user
export const getUser = (id, token) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:8000/api/user/search/${id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        dispatch({ type: actionTypes.RECEIVE_USER, user: response.data });
      })
      .catch((error) => {
        throw error;
      });
  };
};

// Delete User
export const deleteUser = (id, token) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:8000/api/user/delete/${id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        dispatch({
          type: actionTypes.REMOVE_USER,
          payload: { id },
        });
      })

      .catch((error) => {
        throw error;
      });
  };
};

// Update User
export const updateUser = (user, token) => {
  // const userId = user._id;
  return (dispatch) => {
    return (
      axios
        .put(`http://localhost:8000/api/user/update/${user._id}`, user, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
          const data = response.data;
          dispatch({
            type: actionTypes.UPDATE_USER,
            payload: {
              id: data._id,
              userName: data.userName,
              password: data.password,
              role: data.role,
              email: data.email,
            },
          });
        })
        // .then(() => {
        //   history.push(`/employee/${userId}`);
        // })
        .catch((error) => {
          throw error;
        })
    );
  };
};
