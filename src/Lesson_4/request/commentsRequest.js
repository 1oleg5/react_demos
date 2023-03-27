import {axiosRequest} from "../utils/axiosConfig";
import {requestLinks} from "./endpoints";

export const commentsRequest= {
    getAll: () => axiosRequest.get(requestLinks.comments)
}