import react, { useEffect, useState, useRef } from "react";
import Geocoder from 'react-map-gl-geocoder'
import { v4 as uuidv4 } from "uuid"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import MapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
// import MarkerIcon from "./Marker-Icon.svg"
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
MapGL.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function Maps2({ setViewport, msgAlert, viewport, data, user, location, setLocation }) {

    const mapRef = useRef()
    return (
        <div>
            <MapGL
                ref={mapRef}
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => { setViewport(viewport) }}
                mapStyle="mapbox://styles/taaseen71/ckleb8llf0zv817lk5y1asq7s"
            >

            </MapGL>
        </div>
    )
}

export default Maps2
