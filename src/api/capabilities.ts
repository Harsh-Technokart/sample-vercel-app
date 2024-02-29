import axios from "axios";
import { GetCall, PatchCall } from "./setup.variables";

export const getListOfCapabilities = async () => {
  try {
    const response = await GetCall(`/capabilities`);
    return response;
  } catch (error) {
    console.error("error while getting the list of capabilities:", error);
  }
};

export const updateCapability = async (
  capability_id: string,
  endPointUrl: string
) => {
  try {
    const response = await PatchCall(`/capabilities/${capability_id}`, {
      endPointUrl,
      methodType: "POST",
    });
    return response.data;
  } catch (error) {
    console.error("error while updating the capability:", error);
    return error;
  }
};
