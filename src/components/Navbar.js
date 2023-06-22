import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changestate } from "../features/nav/navSlice";

const Navbar = () => {
  const nav = useSelector((state) => state.nav.navItem);
  console.log(nav);
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navmain">
        <div>
          <button onClick={() => dispatch(changestate(""))}>Home</button>
        </div>
        <div>
          <button onClick={() => dispatch(changestate("about"))}>
            About
          </button>
        </div>
        <div>
            <button onClick={() => dispatch(changestate("contact"))}>
            Contact
            </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
