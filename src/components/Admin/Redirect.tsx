"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function Redirect() {
  const router = useRouter();
  useEffect(() => {
    let creds = localStorage.getItem("adminCreds");
    if (creds) {
      router.push("/admin/configuration");
    }
  }, [creds]);
  return <></>;
}

export default Redirect;
