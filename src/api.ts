import axios, { AxiosPromise } from "axios";
import { IComment, User } from "./types";

const API_URL = "http://localhost:8080";

axios.defaults.baseURL = API_URL;

export const getComments: () => AxiosPromise<Array<IComment>> = () => {
    return axios.get("/comments");
}

export const getCurrentUser: () => AxiosPromise<User> = () => {
    return axios.get("/currentUser");
}


// fetch data

// const {data, isLoading} = useQuery("getusers", getData, {
//     refetchOnWindowFocus: false, //refetch when window comes to focus
//     refetchOnReconnect: false, //refetch when browser reconnects to server
//     refetchOnMount: false //refetch when component mounts
// })