import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_CONFIGURL;

const request_headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Basic " +
      btoa(
        process.env.NEXT_PUBLIC_username +
          ":" +
          process.env.NEXT_PUBLIC_password
      ),
  },
  withCredentials: true,
};

export const PostCall = async (route: string, body: any) => {
  const serverURL = backendUrl + route;
  const response = await axios
    .post(serverURL, body, request_headers)
    .then((response) => {
      return response;
    });
  return response;
};

export const PatchCall = async (route: string, body: any) => {
  const serverURL = backendUrl + route;
  const response = await axios
    .patch(serverURL, body, request_headers)
    .then((response) => {
      return response;
    });
  return response;
};

export const GetCall = async (route: string) => {
  const serverURL = backendUrl + route;
  const response = await axios.get(serverURL, request_headers);
  return response;
};

export const DeleteCall = async (route: string) => {
  const serverURL = backendUrl + route;
  const response = await axios.delete(serverURL, request_headers);
  return response;
};
