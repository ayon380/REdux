import React, { useEffect } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
const Content = () => {
  const nav = useSelector((state) => state.nav.navItem);

  return (
    <div>
      content
      {nav == "about" ? <About /> : nav == "contact" ? <Contact /> : <Home />}
    </div>
  );
};

export default Content;
