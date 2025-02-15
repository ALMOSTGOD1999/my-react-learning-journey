import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    // prevent this page from refreshing
    e.preventDefault();
    setUser({ name, password });
  };

  return (
    <div>
      <h2>login</h2>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="username"
      />
      {""}
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="password"
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;
