import axiosClient from "../../../services/axiosClient"
import userSevicesAPI from "../../../services/userServicesAPI"
import { USERPROFILE_FAILURE, USERPROFILE_REQUEST, USERPROFILE_SUCCESS } from "../constant/profile"

const getuserProfile = (id) => {
    return async (dispatch) => {
        dispatch({type: USERPROFILE_REQUEST})
        try {       
            const data = await userSevicesAPI.getProfile(id)
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
const postUserAva = (file) => {
    return async (dispatch) => {
        try {
            await userSevicesAPI.postAvatar(file)
        } catch (error) {
            
        }
    }

}
export {getuserProfile, postUserAva}