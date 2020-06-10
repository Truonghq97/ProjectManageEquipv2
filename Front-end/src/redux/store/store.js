import {combineReducers} from 'redux';
import rootReducer from "../reducers/rootReducer";

const rootStore = combineReducers({ //rootReducer là store tổng của toàn ứng dụng
    //Chứa các store con
    rootReducer, 
});

export default rootStore;