import axios from "axios";


export const login = (value) => {
    return async (dispatch) => {
        dispatch({type:"LOGIN_REQUEST"})
        try {
            const data = await axios.post("https://airbnb.cybersoft.edu.vn/api/auth/login",value, {
                headers: {
                    tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxMSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzIxNjAwMDAwMCIsIm5iZiI6MTYxODI0NjgwMCwiZXhwIjoxNjQ3MzYzNjAwfQ.mOv5qM9N68AKpDxX9HZC3TaZNZaqfk-i1qO_Hcgf0RU"
                }
            });
            console.log(data)
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: data
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type:"LOGIN_FAILURE",
                payload: error
            })
        }
    }
}