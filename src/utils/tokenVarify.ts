import { jwtDecode } from "jwt-decode";

export const verifyJwtToken=(token:string)=>{
    return jwtDecode(token)
}