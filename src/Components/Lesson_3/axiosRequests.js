import axios from "axios";
import {baseURL} from "./endPoints";

export const axiosRequests = axios.create({baseURL})