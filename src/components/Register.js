import axios from "axios";
import React, { useState } from "react";
import { Alert, Fade } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [registration, setregistration] = useState();

  const handleName = (event) => {
    setname(event.target.value);
  };
  const handleEmail = (event) => {
    setemail(event.target.value);
  };
  const handlePassword = (event) => {
    setpassword(event.target.value);
  };

  const btnclicked = async (e) => {
    e.preventDefault();

    await axios
      .post("website/addposts", {
        name,
        email,
        password
      })
      .then((response) => {
        console.log(response);
        setregistration(true);
      })
      .catch((error) => {
        console.log(error);
        setregistration(false);
      });
  };

  const loggedin = (
    <Alert transition={Fade} show={true} key="success" variant="success">
      Successfully Registered as {email}
    </Alert>
  );
  const Useralready = <Alert show={true} key="danger" variant="danger">User already exists!</Alert>;

  return (
    <div className="outerContainer animate-in" style={{animationDelay: "800ms"}}>
      {registration == true ? (
        loggedin
      ) : registration == false ? (
        Useralready
      ) : (
        <p></p>
      )}
      <form onSubmit={btnclicked}>
        <h2 className="mainh2">REGISTRATION</h2>

        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            onChange={handleName}
            type="text"
            className="form-control"
            id="exampleInputName1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handlePassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        
      </form>
    </div>
  );
}

export default Register;
