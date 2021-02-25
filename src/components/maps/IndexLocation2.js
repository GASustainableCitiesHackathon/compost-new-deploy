import react, { useEffect, useState, useRef } from "react";
import Maps2 from "./Maps2"

function IndexLocation2() {

    const [location, setLocation] = useState(null);
    const [data, setData] = useState([]);
    const [viewport, setViewport] = useState({
        latitude: 40.756782,
        longitude: -73.921258,
        zoom: 10,
        width: "95%",
        height: "80vh",
    });

    return (
        <div>
            <Maps2
                location={location}
                setLocation={setLocation}
                data={data}
                viewport={viewport}
                setViewport={setViewport}
            >

            </Maps2>
        </div>
    )
}

export default IndexLocation2
