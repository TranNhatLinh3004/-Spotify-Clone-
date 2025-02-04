import React, { useContext } from "react";
import Routers from "./routes/Routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routers />;
      <ToastContainer />
    </>
  );
}

export default App;
