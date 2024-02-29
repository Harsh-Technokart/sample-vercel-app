"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checksession, logout } from "@/api/login";
import { getListOfCapabilities } from "@/api/capabilities";
import EndpointTable from "@/components/Admin/EndpointTable";
import "./configuration.css";

function URLConfig() {
  const redirect = useRouter();
  const [listOfCapabilities, setListOfCapabilities] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = await getListOfCapabilities();
      setListOfCapabilities(list?.data.data);
      console.log(list);

      const sessionCheck = await checksession();
      if (!sessionCheck.status) {
        redirect.push("/admin");
      }
    };

    fetchData();
  }, [redirect]);

  const logoutHandler = async () => {
    const lout: any = await logout();
    if ((lout.status = true)) {
      redirect.push("/admin");
    }
  };

  return (
    <div className="configuration-wrapper">
      configure your urls here
      <div className="endpoint-table-wrapper">
        <EndpointTable
          endpoints={listOfCapabilities}
          setListOfCapabilities={setListOfCapabilities}
        />
      </div>
      <div className="logout-wrapper">
        <button className="logout-button" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default URLConfig;
