import { CommonAPI } from "./CommonAPI";
import { ServerUrl } from "./ServerUrl";

export const registerAPI = async (reqBody) => {
    return await CommonAPI('post', `${ServerUrl}/api/register`, reqBody, "");
};
export const loginAPI=async(reqBody)=>{
    return await CommonAPI('post', `${ServerUrl}/api/login`, reqBody, "");
}