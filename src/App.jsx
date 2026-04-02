import React from "react";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Stats from "./component/Stats";
import Steps from "./component/Steps";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Banner />
      <Stats />

      {/* product and cart section */}

      {/* Steps Section */}
      <Steps />
    </div>
  );
};

export default App;
