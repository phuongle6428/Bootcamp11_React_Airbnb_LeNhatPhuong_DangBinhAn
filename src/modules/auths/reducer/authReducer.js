const initialValue = {
    isLoading: false,
    error: false,
    currenUser:"",
}

const authReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {...state, isLoading: true}
        case "LOGIN_FAILURE":
            return {...state, isLoading: false, error: action.payload}
        case "LOGIN_SUCCESS":
            return {...state, currenUser: action.payload, isLoading: false, error: false}
        default:
            return {...state}
    }
}

export default authReducer