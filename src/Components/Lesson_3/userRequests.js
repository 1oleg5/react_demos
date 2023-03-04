import {requestEndPoints} from "./endPoints";
import {axiosRequests} from "./axiosRequests";

export const usersRequests = {
    getAll: () => axiosRequests.get(requestEndPoints.users),
    createUsers: (data) => axiosRequests.post(requestEndPoints.users, data)
}