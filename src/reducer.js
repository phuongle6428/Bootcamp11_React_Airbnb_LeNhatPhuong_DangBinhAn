import { combineReducers } from "redux";
import auth from "./modules/auths/reducer/authReducer";

const rootReducer = combineReducers({auth})

export default rootReducer