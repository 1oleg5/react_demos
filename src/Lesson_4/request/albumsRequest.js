import {axiosRequest} from "../utils/axiosConfig";
import {requestLinks} from "./endpoints";

export const albumsRequest = {
    getAll:() => axiosRequest.get(requestLinks.albums)
}