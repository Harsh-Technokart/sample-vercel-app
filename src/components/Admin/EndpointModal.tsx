import React, { useEffect, useState } from "react";
import { Modal, Button, Snackbar } from "@mui/material"; // Import Snackbar component
import { updateCapability, getListOfCapabilities } from "@/api/capabilities";
import { revalidatePath } from "next/cache";

function EndpointModal(props: { capability: any; setListOfCapabilities: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [capabilityName, setCapabilityName] = useState("");
  const [endpointURL, setEndpointURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleEditClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const updateUrl = async () => {
    setIsLoading(true);
    setButtonDisabled(true);
    const update = await updateCapability(props.capability._id, endpointURL);
    if (update.status) {
      setIsOpen(false);
      setSnackbarMessage("Capability updated successfully");
      setSnackbarOpen(true);
      setButtonDisabled(false);
      setIsLoading(false);
      const updateList = async () => {
        const data: any = await getListOfCapabilities();
        props.setListOfCapabilities(data?.data.data);
      };
      updateList();
    }
    console.log("update endpoint url");
  };

  useEffect(() => {
    if (
      props.capability &&
      props.capability.capabilityName &&
      props.capability.endPointUrl
    ) {
      setCapabilityName(
        props.capability.capabilityName
          .split("_")
          .map((e: any, i: Number) => e.charAt(0).toUpperCase() + e.slice(1))
          .join(" ")
      );
      setEndpointURL(props.capability.endPointUrl);
      setButtonDisabled(false);
    }
  }, [props.capability]);

  return (
    <div>
      <button className="edit-button" onClick={handleEditClick}>
        Edit
      </button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="modal"
      >
        <div className="modal-content">
          <h2 id="modal-title" className="modal-title">
            Edit Capability Endpoint
          </h2>
          <div className="edit-capability-modal">
            <div className="capability-name-input-container">
              <label>Capability Name:</label>
              <input
                disabled={true}
                className="capability-name-textbox"
                id="capabilityName"
                type="text"
                placeholder="Enter capability name"
                value={capabilityName}
                onChange={(e) => setCapabilityName(e.target.value)}
              />
            </div>
            <div className="endpoint-URL-input-container">
              <label>Endpoint URL:</label>
              <input
                className="endpoint-URL-textbox"
                id="endpointURL"
                type="text"
                placeholder="Enter endpoint URL"
                value={endpointURL}
                onChange={(e) => setEndpointURL(e.target.value)}
              />
            </div>
          </div>

          <div className="buttons">
            <Button
              disabled={buttonDisabled}
              variant="contained"
              onClick={handleClose}
              className="close-button"
            >
              Close
            </Button>
            <Button
              disabled={buttonDisabled}
              variant="contained"
              onClick={updateUrl}
              className="update-url-button"
            >
              {isLoading ? "Updating..." : "Update"}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Snackbar component */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Adjust as needed
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }} // Adjust anchor origin as needed
        color="primary"
        variant="solid"
        style={{
          backgroundColor: "#007bff",
          borderRadius: "16px",
        }}
        {...(props as any)} // Type assertion
      />
    </div>
  );
}

export default EndpointModal;
