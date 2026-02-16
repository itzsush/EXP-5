import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Lazy load components
const Profile = lazy(() => import("./components/Profile"));
const Dashboard = lazy(() => import("./components/Dashboard"));

export default function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>My Portfolio SPA</h2>

        {/* Navigation Links */}
        <Link to="/">Profile</Link> | <Link to="/dashboard">Skills</Link>

        {/* Suspense for Lazy Loading */}
        <Suspense fallback={<h3>Loading...</h3>}>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
