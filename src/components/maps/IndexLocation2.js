import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import Maps from "./Maps";
import Nav from "./Nav";
import HomePageBody from "../HomePageBody/HomePageBody";
import Faq from "../Faq/Faq";
import { index } from "../../api/location";
import "./IndexLocations.css";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationCard from './LocationCard'
// import 'mapbox-gl/dist/mapbox-gl.css'
import Geocoder from 'react-map-gl-geocoder'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import "./IndexLocations.css"
import MapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl'
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
MapGL.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const IndexLocation2 = ({ user, msgAlert }) => {
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


    const [randomNumber, setRandomNumber] = useState([])
    const [randomImage, setRandomImage] = useState("")
    // const { setViewport, msgAlert, viewport, data, user, location, setLocation } = props
    const getRandomInt = () => {
        const num1 = Math.floor(Math.random() * 999)
        const num2 = Math.floor(Math.random() * 9999)
        return setRandomNumber([num1, num2])
    }
    const getRandomImage = () => {
        return setRandomImage(Math.floor(Math.random() * 9))
    }

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

    useEffect(() => {
        getRandomInt();
        getRandomImage();
    }, [])


    const mapRef = useRef()


    return (
        <div>
            <Nav
                setSelectedBorough={setSelectedBorough}
                setViewport={setViewport}
                viewport={viewport}
            />
            {/* {data.length > 0 ? ( */}

            <MapDiv>
                <MapGL {...viewport}
                    ref={mapRef}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    // mapboxApiAccessToken='pk.eyJ1IjoidGFhc2VlbjcxIiwiYSI6ImNrbGNzaHJtejBteTkyb21sYnNzNTd1cmoifQ.JbmCKRBzbETAUS_sgbi5hg'
                    mapStyle="mapbox://styles/arbydabu/cklecojg52h6i17jyjznsezj7"
                    onViewportChange={(viewport => { setViewport(viewport) })}
                >
                    {data.map(location => (
                        <Marker key={location._id} latitude={location.latitude} longitude={location.longitude} >
                            <div>
                                <DroppedPin
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setLocation(location);
                                        getRandomInt()
                                        getRandomImage()
                                    }}>
                                    <DroppedPinImage src="./icons/map-icon.svg" alt="Marker Icon" />
                                </DroppedPin>
                            </div>
                        </Marker>
                    ))}
                    <Geocoder position="top-left" mapRef={mapRef} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} />
                    <GeolocateControl
                        style={{ right: 10, top: 10, zoom: 1 }}
                        positionOptions={{ enableHighAccuracy: true }}
                        trackUserLocation={true}
                    />
                    {location && (
                        <Popup
                            user={user}
                            closeOnClick={false}
                            closeButton={true}
                            onClick={() => { getRandomInt() }}
                            latitude={location.latitude}
                            longitude={location.longitude}
                            onClose={() => setLocation(null)}
                        >
                            <LocationCard
                                user={user}
                                msgAlert={msgAlert}
                                location={location}
                                randomNumber={randomNumber}
                                randomImage={randomImage} />
                        </Popup>
                    )}
                </MapGL>

            </MapDiv>

            {/* <Maps2
                user={user}
                msgAlert={msgAlert}
                viewport={viewport}
                setViewport={setViewport}
                data={data}
                location={location}
                setLocation={setLocation}
            /> */}
            {/* ) : (
        <LoadingWrapper>
          <Spinner className="center" animation="grow" variant="success" />
        </LoadingWrapper>
      )} */}
            <HomePageBody />
            <Faq />
        </div>
    );
};

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  /* margin-bottom: 5rem; */
`;

const MapDiv = styled.div`
    display: flex;
    justify-content: center;
    /* padding-top: 5vh;  */
    `

const DroppedPin = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`
const DroppedPinImage = styled.img`
    width: 20px;
    height: 20px;
`


export default IndexLocation2;

