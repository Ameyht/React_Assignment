import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserOperations from "./components/UserOperations";

function App() {
  return (
    <Router>
      <Routes>
        {/* Assignment no 1 */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/adduser/:value" element={<UserOperations />} />
        <Route path="/EditUser/:value" element={<UserOperations />} />
      </Routes>
    </Router>
  );
}

export default App;
