import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constant/auth"

const initialValue = {
    isLoading: false,
    error: false,
    userBackData:"",
}

const authReducer = (state = initialValue, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return {...state, isLoading: true}
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return {...state, isLoading: false, error: action.payload.error}
        case LOGIN_SUCCESS:
            return {...state, userBackData: action.payload.data, isLoading: false, error: false}
        // case REGISTER_SUCCESS:
        //     return {...state, isLoading: false, error: false}
        default:
            return {...state}
    }
}

export default authReducer