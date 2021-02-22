import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import Maps from "./Maps";
import Nav from "./Nav";
import HomePageBody from "../HomePageBody/HomePageBody";
import Faq from "../Faq/Faq";
import { index } from "../../api/location";
import "./IndexLocations.css";
import "mapbox-gl/dist/mapbox-gl.css";

const IndexLocations = ({ user, msgAlert }) => {
  const [selectedBorough, setSelectedBorough] = useState("All");
  const [location, setLocation] = useState(null);
  const [data, setData] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 40.756782,
    longitude: -73.921258,
    zoom: 10,
    width: "95%",
    height: "80vh",
  });

  useEffect(() => {
    index(selectedBorough)
      .then((res) => setData(res.data.locations))
      .catch((err) => console.log(err));
  }, [selectedBorough]);

  useEffect(() => {
    // Causes PopUp menu to close on KeyDown of escape button
    const listener = (e) => {
      if (e.key === "Escape") setLocation(null);
    };
    window.addEventListener("keydown", listener);
    // CleanUp Function to remove escape from always making Popup null
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <div>
      <Nav
        setSelectedBorough={setSelectedBorough}
        setViewport={setViewport}
        viewport={viewport}
      />
      {data.length > 0 ? (
        <Maps
          user={user}
          msgAlert={msgAlert}
          viewport={viewport}
          setViewport={setViewport}
          data={data}
          location={location}
          setLocation={setLocation}
        />
      ) : (
        <LoadingWrapper>
          <Spinner className="center" animation="grow" variant="success" />
        </LoadingWrapper>
      )}
      <HomePageBody />
      <Faq />
    </div>
  );
};

export default IndexLocations;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  /* margin-bottom: 5rem; */
`;
