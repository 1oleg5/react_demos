import {axiosRequest} from "../utils/axiosConfig";
import {requestLinks} from "./endpoints";

export const todosRequest = {
    getAll: () => axiosRequest.get(requestLinks.todos)
}
