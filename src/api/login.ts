import { DeleteCall, GetCall, PostCall } from "./setup.variables";

export const login = async (creds: {
  emailAddress: string;
  password: string;
}) => {
  try {
    const response: any = await PostCall(`/login`, creds);
    return response.data;
  } catch (error: any) {
    console.error("error while logging in:", error);
    return error;
  }
};

export const checksession = async () => {
  try {
    const response = await GetCall(`/session`);
    return response.data;
  } catch (error: any) {
    console.error("error while sessioncheck:", error);
    return error;
  }
};

export const logout = async () => {
  try {
    const response = await DeleteCall(`/session`);
    return response.data;
  } catch (error) {
    console.error("error while logging out:", error);
    return error;
  }
};
