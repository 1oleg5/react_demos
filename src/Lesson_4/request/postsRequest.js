import {axiosRequest} from "../utils/axiosConfig";
import {requestLinks} from "./endpoints";

export const postsRequest = {
    getPostById: (id) => axiosRequest.get(requestLinks.postById(id))
}
