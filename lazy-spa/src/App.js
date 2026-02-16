import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Lazy load components
const Profile = lazy(() => import("./components/Profile"));
const Dashboard = lazy(() => import("./components/Dashboard"));

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  // useEffect hook to create a 10-second initial load time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1000); // 10000ms = 10 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // 1. Initial Loading State for Screenshot
  if (isAppLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
        <h2 style={{ color: "#2c3e50" }}>Experiment-3: Multi-Page SPA</h2>
        <h3>Loading application components...</h3>
        <p>Please wait while the routing system initializes.</p>
      </div>
    );
  }

  // 2. Main App Content (shows after 10 seconds)
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
        <h2>My Portfolio SPA</h2>

        {/* Navigation Links */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Profile</Link> | <Link to="/dashboard">Skills</Link>
        </nav>

        {/* Suspense handles the small delay when switching between pages */}
        <Suspense fallback={<h3>Loading Component...</h3>}>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}