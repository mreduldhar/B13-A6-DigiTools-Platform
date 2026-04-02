import React from "react";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Stats from "./component/Stats";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Banner />
      <Stats />
    </div>
  );
};

export default App;
