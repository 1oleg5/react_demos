import {axiosService} from "./axiosServices";
import {urls} from "../configs";

export const userService = {
    getAll:()=>axiosService.get(urls.users)
}
