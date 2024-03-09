import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserOperations from "./components/UserOperations";
import DashBoardUI from "./components/DashBoardUI";
import UserAuth from "./components/UserAuth";
import ConfirmReset from "./components/ConfirmReset";

function App() {
  return (
    <Router>
      <Routes>
        {/* Assignment no 1 */}
        <Route exact path="/" element={<Home />} />
        <Route path="/home/:value" element={<Home />} />
        <Route path="/adduser/:value" element={<UserOperations />} />
        <Route path="/EditUser/:value" element={<UserOperations />} />
        <Route path="/dashBoard" element={<DashBoardUI />} />
        <Route path="/login" element={<UserAuth />} />
        <Route path="/signup" element={<UserAuth />} />
        <Route path="/forgotPassword" element={<UserAuth />} />
        <Route path="/reset/:value" element={<UserAuth />} />
        <Route path="/registered" element={<UserAuth />} />
        <Route path="/confirmreset/:value" element={<ConfirmReset />} />
      </Routes>
    </Router>
  );
}

export default App;
