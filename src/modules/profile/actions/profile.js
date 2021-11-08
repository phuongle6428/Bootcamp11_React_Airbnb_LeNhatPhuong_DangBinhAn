import axiosClient from "../../../services/axiosClient"
import { USERPROFILE_FAILURE, USERPROFILE_REQUEST, USERPROFILE_SUCCESS } from "../constant/profile"

const getuserProfile = (id) => {
    return async (dispatch) => {
        dispatch({type: USERPROFILE_REQUEST})
        try {
            const data = await axiosClient.get(`/api/users/${id}`)
            dispatch({
                type: USERPROFILE_SUCCESS,
                payload: {data}
            })
        } catch (error) {
            dispatch({
                type:USERPROFILE_FAILURE,
            })
        }
    }
}
export default getuserProfile