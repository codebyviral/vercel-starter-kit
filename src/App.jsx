import React from "react";
import LandingPage from "./LandingPage";
import IssueReportPage from "./IssueReportPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/report-an-issue" element={<IssueReportPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
