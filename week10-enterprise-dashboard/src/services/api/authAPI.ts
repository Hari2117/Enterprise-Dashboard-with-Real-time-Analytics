import api from "./axiosConfig"

export const login = (data:any)=> api.post("/login", data)