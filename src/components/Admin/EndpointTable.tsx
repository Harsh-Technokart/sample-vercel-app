import React from "react";
import EndpointModal from "./EndpointModal";
import "./EndpointTable.css";

const EndpointTable = (props: {
  endpoints: Array<any> | undefined;
  setListOfCapabilities: any;
}) => {
  return (
    <div>
      <table className="endpoint-table">
        <thead>
          <tr>
            <th>Capability Name</th>
            <th>Endpoint URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.endpoints
            ? props.endpoints.map((endpoint) => (
                <tr key={endpoint._id}>
                  <td>
                    {endpoint.capabilityName
                      .split("_")
                      .map(
                        (e: any, i: Number) =>
                          e.charAt(0).toUpperCase() + e.slice(1)
                      )
                      .join(" ")}
                  </td>
                  <td>{endpoint.endPointUrl}</td>
                  <td>
                    <EndpointModal
                      capability={endpoint}
                      setListOfCapabilities={props.setListOfCapabilities}
                    />
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default EndpointTable;
