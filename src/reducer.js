import { combineReducers } from "redux";
import auth from "./modules/auths/reducer/authReducer";
import profile from "./modules/profile/reducer/profileReducer"
const rootReducer = combineReducers({auth, profile})

export default rootReducer