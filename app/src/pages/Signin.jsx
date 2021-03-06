import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "./Auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    const signIn = await auth.login(email, password);

    if (signIn.error) {
      toast.error(signIn.error.message, { theme: "dark" });
      return;
    }
    toast.success("You are now logged in", { theme: "dark" });
    navigate("/Home");
  };

  return (
    <Layout>
      {message && message}
      <h1>Sign In</h1>
      <form className="form" onSubmit={handleSignIn}>
        <input
          className="inputSignin"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputSignin"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" type={"submit"}>
          Sign In
        </button>
      </form>
    </Layout>
  );
};

export default SignIn;
