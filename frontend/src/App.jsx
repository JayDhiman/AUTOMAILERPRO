import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));

const App = () => {
  return (
    <Router>
      {/* Suspense provides fallback while lazy-loaded components are loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Common Navbar */}
       

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
