import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <title>SafeNet insight</title>
      {/* <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default MyApp;
