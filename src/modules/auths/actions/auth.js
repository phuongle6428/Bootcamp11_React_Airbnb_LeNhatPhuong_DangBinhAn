import axiosClient from "../../../services/axiosClient";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constant/auth";


export const login = (value) => {
    return async (dispatch) => {
        dispatch({type:LOGIN_REQUEST})
        try {
            // const data = await axios.post("https://airbnb.cybersoft.edu.vn/api/auth/login",value, {
            //     headers: {
            //         tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxMSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzIxNjAwMDAwMCIsIm5iZiI6MTYxODI0NjgwMCwiZXhwIjoxNjQ3MzYzNjAwfQ.mOv5qM9N68AKpDxX9HZC3TaZNZaqfk-i1qO_Hcgf0RU"
            //     }
            // });
            // const {message, user, token} = await axiosClient.post("/api/auth/login", value)
            const data = await axiosClient.post("/api/auth/login", value)
            console.log(data)
            localStorage.setItem("Auth", JSON.stringify(data))
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {data}
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type:LOGIN_FAILURE,
                payload: {error}
            })
        }
    }
}
export const register = (value, callback) => {
    return async (dispatch) => {
        dispatch({type:REGISTER_REQUEST})
        try {
            await axiosClient.post("/api/auth/login", {...value, gender: true})
            callback()
            // dispatch({
            //     type: REGISTER_SUCCESS,
            // })
        } catch (error) {
            console.log(error)
            dispatch({
                type:REGISTER_FAILURE,
                payload: {error}
            })
        }
    }
}