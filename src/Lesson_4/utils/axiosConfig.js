import axios from "axios";
import {baseURL} from "../request/endpoints";

export const axiosRequest = axios.create({baseURL});