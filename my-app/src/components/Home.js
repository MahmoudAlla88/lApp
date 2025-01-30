import React from "react";
import Books from "../components/Books";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>مرحبًا بك في مكتبتنا!</h1>
      <Books />
    </div>
  );
}

export default Home;