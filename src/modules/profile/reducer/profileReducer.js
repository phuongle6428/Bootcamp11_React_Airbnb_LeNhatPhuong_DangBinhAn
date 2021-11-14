import { USERPROFILE_FAILURE, USERPROFILE_REQUEST, USERPROFILE_SUCCESS } from "../constant/profile";

const initialState = {
    isLoading: false,
    error: false,
    userDetail: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERPROFILE_FAILURE:
            return {...state, error: true, isLoading: false};
        case USERPROFILE_REQUEST:
            return {...state, isLoading: true, error: false};
        case USERPROFILE_SUCCESS:
            return {...state, isLoading: false, userDetail: action.payload.data}
        default:
            return state
    }
}
export default profileReducer;