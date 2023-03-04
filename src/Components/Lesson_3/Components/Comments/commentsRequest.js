import {requestEndPoints} from "../../endPoints";
import {axiosRequests} from "../../axiosRequests";

export const commentsRequests = {
    getAll: () => axiosRequests.get(requestEndPoints.comments),
    addComment: (data) => axiosRequests.post(requestEndPoints.comments, data)
}