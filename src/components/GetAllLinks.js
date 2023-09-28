import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { UserContext } from "../context/registercontext";

function GetAllLinks(props) {
  const [updatedlink, setupdatedlink] = useState("");
  const { registration, setregistration } = useContext(UserContext);
  const [updatehide, setupdatehide] = useState(false);

  const handleLink = (event) => {
    setupdatedlink(event.target.value);
  };

  const deleteLink = async () => {
    await axios
      .delete(`website/alllinks/${props.id}`)
      .then((response) => {
        console.log(response);
        setregistration(!registration);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateLink = async () => {
    setupdatehide(true);
  };

  const btnclicked = async (e) => {
    e.preventDefault();

    await axios
      .put(`website/alllinks/${props.id}`, {
        link: updatedlink,
      })  
      .then((response) => {
        console.log(response);
        setregistration(!registration);
        setupdatehide(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link href={props.item}>{props.item}</Card.Link>
          {localStorage.getItem("role") == "admin" && (
            <>
              <Button
                className="deletebtn"
                variant="danger"
                onClick={deleteLink}
              >
                Delete
              </Button>
              <Button
                className="deletebtn"
                variant="primary"
                onClick={updateLink}
              >
                Update
              </Button>
            </>
          )}
        </Card.Body>
      </Card>

      {updatehide == true && (
        <>
          <form onSubmit={btnclicked}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                YOUR Updated LINK:
              </label>
              <input
                onChange={handleLink}
                type="text"
                className="form-control"
              />
              <div id="emailHelp" className="form-text">
                We'll add this link to your website.
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default GetAllLinks;
