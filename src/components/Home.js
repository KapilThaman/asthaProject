import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/registercontext";
import ChangesSettings from "./ChangesSettings";
import GetAllLinks from "./GetAllLinks";

function Home() {
  const [alllinks, setalllinks] = useState([]);
  const { registration } = useContext(UserContext);
  useEffect(() => {
    axios
      .get("/website/alllinks")
      .then(
        (response) => {
          console.log(response);
          setalllinks(response.data.data);
        },
        [registration]
      )
      .catch((error) => {
        console.log(error);
      });
  }, [registration]);

  return (
    <>
      <div className=" animate-in " style={{ animationDelay: "800ms" }}>
      
        
          <div className="second-div">
            <div className="third-div">
              <h2>EXPLORE WITH ME</h2>
              <div className="innerthird-div"></div>
            </div>
            <h4 className="para-scroll">Scroll Down ➠ </h4>
          </div>
        
      </div>

      <h2>EXPLORE WITH ME</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis
        eum molestias. Expedita suscipit nesciunt enim blanditiis aliquam, error
        mollitia vitae veniam obcaecati vero animi, consequatur aut accusamus
        voluptates cumque!
      </p>

      {alllinks.map((item) => (
        <GetAllLinks
          key={item._id}
          item={item.link}
          registration={registration}
          id={item._id}
        />
      ))}

      {localStorage.getItem("role") == "admin" && <ChangesSettings />}
    </>
  );
}

export default Home;
