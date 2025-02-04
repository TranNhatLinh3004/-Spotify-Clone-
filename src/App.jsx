import React, { useContext } from "react";
import Routers from "./routes/Routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routers />;
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
