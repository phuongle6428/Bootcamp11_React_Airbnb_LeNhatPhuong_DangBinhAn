import axiosClient from "./axiosClient"

const userSevicesAPI = {
    postAvatar : (file) => {
        const form = new FormData();
        form.append("avatar", file)
        return axiosClient.post("/api/users/upload-avatar", form)
    },
    getProfile: (id) => {
        return axiosClient.get(`/api/users/${id}`)
    }
}
export default userSevicesAPI