import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Login from "./components/Login";
import { BubblyContainer } from "react-bubbly-transitions";
import RegisterAdmin from "./components/RegisterAdmin";
import LoginAdmin from "./components/LoginAdmin";
import { UserContext } from "./context/registercontext";


function App() {
  const [newtoken, setnewtoken] = useState("");
  const [role, setrole] = useState("");
  const [togglelogout, settogglelogout] = useState(false);
  const [loggedinUser, setloggedinUser] = useState("");
  const [registration, setregistration] = useState(false);

  return (
    <>
      <UserContext.Provider
        value={{
          newtoken,
          setnewtoken,
          role,
          setrole,
          settogglelogout,
          togglelogout,
          loggedinUser,
          setloggedinUser,
          registration,
          setregistration
          
        }}
      >
        <Router>
          <div>
            <NavBar></NavBar>
            <BubblyContainer />
            <Routes>
              {/* Public routes */}

              <Route exact path="/loginuser" element={<Login />}></Route>
              <Route
                exact
                path="/website/AboutUs"
                element={<AboutUs />}
              ></Route>
              <Route exact path="/loginastha" element={<LoginAdmin />}></Route>

              <Route
                exact
                path="/addadminposts"
                element={<RegisterAdmin />}
              ></Route>
              <Route exact path="/addposts" element={<Register />}></Route>
              <Route exact path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
