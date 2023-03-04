import {requestEndPoints} from "./endPoints";

export const commentsRequests = {
    getAll: () => axiosRequest.get(requestEndPoints.comments),
    createComment: (data) => axiosRequest.post(requestEndPoints.comments, data)
}