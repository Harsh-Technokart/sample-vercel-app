"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function Redirect() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return <div> </div>;
}

export default Redirect;
