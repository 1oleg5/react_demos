import {axiosService} from "./axiosServices";
import {urls} from "../configs";

export const postService={
    getAll:()=>axiosService.get(urls.posts)
}