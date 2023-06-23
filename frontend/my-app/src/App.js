import "./App.css";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(false);
  const [data, setData] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      setData(data);
      data.username.length > 0 ? setResponse(true) : setResponse(false);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      {response ? (
        <div className="response-data">
          <h3>Username: {data.username}</h3>
          <h2>Email: {data.email}</h2>
          <h1>{data.msg}</h1>
        </div>
      ) : (
        <>
          <h1>User Registration</h1>
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
            <button type="submit" className="form-input">
              Register
            </button>
          </form>
        </>
      )}
    </div>
  );
}
export default App;
