import * as actionTypes from "../actions/types";

const initialState = {
  data: "",
  token: "",
  listUser: [],
  newUser: "",
  user: "",
  error: "",
  newEquip: "",
  listEquip: [],
  equip: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      state.data = action.result;
      console.log(action.result);
      state.token = action.result.token;
      console.log(action.result.token);
      return {
        ...state,
      };

    case actionTypes.LOGIN_FAILED:
      state.error = action.errorMessage;
      console.log(action.errorMessage);
      return {
        ...state,
      };

    case actionTypes.GET_LIST_USER:
      state.listUser = action.result.data;
      console.log(action.result.data);
      return {
        ...state,
      };

    case actionTypes.ADD_USER:
      state.newUser = action.payload;
      console.log(action.result);
      return {
        ...state,
      };

    case actionTypes.RECEIVE_USER:
      state.user = action.user;
      return {
        ...state,
      };

    case actionTypes.REMOVE_USER:
      return state.filter((user) => user.id !== action.payload.id);

    case actionTypes.UPDATE_USER:
      state.user = action.payload;
      return {
        ...state,
      };

    case actionTypes.ADD_EQUIP:
      state.newEquip = action.payload;
      console.log(action.result);
      return {
        ...state,
      };

    case actionTypes.GET_LIST_EQUIP:
      state.listEquip = action.result.data;
      console.log(action.result.data);
      return {
        ...state,
      };

    case actionTypes.RECEIVE_EQUIP:
      state.equip = action.equip;
      return {
        ...state,
      };

    case actionTypes.REMOVE_EQUIP:
      return state.filter((equip) => equip.id !== action.payload.id);

    case actionTypes.UPDATE_EQUIP:
      state.equip = action.payload;
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
