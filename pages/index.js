import React from "react";
import Link from "next/link";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyClases from "./MyClass";

const IndexPage = () => {
  return (
    // <div>
    //   <h1>Hi! welcome to our website</h1>

    //   <Link href="/Lesson_Plan">next</Link>

    // </div>
    <>
      <Login />
      {/* <Router>
        <Routes>
          <Route path="/" element={<analyze />} />
        </Routes>
      </Router> */}
    </>
  );
};

export default IndexPage;
