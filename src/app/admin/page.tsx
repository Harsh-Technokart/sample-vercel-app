"use client";
import React, { useEffect, useState } from "react";
import Redirect from "@/components/Admin/Redirect";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import "./admin-login.css";
import { Button } from "@mui/material";
import { login } from "@/api/login";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const router = useRouter();
  const handleUserSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("password:", password);
    console.log("email:", email);
    setIsLoading(true);
    setButtonDisabled(true);
    const response: any = await login({ emailAddress: email, password });
    if (response.status) {
      console.log("rizzponse", response);
      router.push("/admin/configuration");
    }
    console.log("response", response);
    setButtonDisabled(false);
    setIsLoading(false);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setButtonDisabled(false);
    }
  }, [email, password]);

  return (
    <div>
      <Redirect />
      <div className="login">
        <form className="login-form-itself" onSubmit={handleUserSignIn}>
          <h1 className="filler-over-login-page">TKCS Admin</h1>
          <h3 className="login-form-heading">Login</h3>
          <input
            className="login-textbox"
            id="email"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-textbox"
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="submit-button-coverup">
            <Button
              type="submit"
              disabled={buttonDisabled}
              className="submit-button"
            >
              {isLoading ? (
                <CircularProgress sx={{ height: "10px", width: "auto" }} />
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
