import { useState } from "react";
import Profile from "./components/profile.jsx";
import Login from "./components/login.jsx";
import "./App.css";
import UserContextProvider from "./context/userContextProvider.jsx";

function App() {
  return (
    <UserContextProvider>
      <h1>React video about context api</h1>
      <Profile />
      <Login />
    </UserContextProvider>
  );
}

export default App;
