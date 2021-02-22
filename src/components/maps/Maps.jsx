import React, { useState, useEffect, useRef } from 'react'
import ReactMapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl'
import LocationCard from './LocationCard'
import 'mapbox-gl/dist/mapbox-gl.css'
import styled from 'styled-components'
import Geocoder from 'react-map-gl-geocoder'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import "./IndexLocations.css"


function Maps(props) {
    const [randomNumber, setRandomNumber] = useState([])
    const [randomImage, setRandomImage] = useState("")
	const { setViewport, msgAlert, viewport, data, user, location, setLocation } = props
    const getRandomInt = () => {
        const num1 = Math.floor(Math.random() * 999)
        const num2 = Math.floor(Math.random() * 9999)
        return setRandomNumber([num1, num2])
    }
    const getRandomImage = () => {
        return setRandomImage(Math.floor(Math.random() * 9))
    }

    useEffect(() => {
        getRandomInt();
        getRandomImage();
    }, [])


    const mapRef = useRef()

    return (
		<MapDiv>
			<ReactMapGL {...viewport}
				ref={mapRef}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
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
								<DroppedPinImage src="/icons/map-icon.svg" alt="Marker Icon" />
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
			</ReactMapGL>
		</MapDiv>
    )
}

// const BusinessContainer = styled.div`
// 	padding: 1rem 1rem 1rem 1rem;
// 	background-image: linear-gradient(to top right, green, white);
// `

const BusinessInfo = styled.div`
    flex-direction: column;
    flex: 1;
`
const BusinessImage = styled.div`
    display: flex;
    
`

const FoodScrapDropOffSite = styled.h4`
    font-size: 20px;
	font-weight: 600;
	color: #656565;
 `
const SiteInfo = styled.p`
    font-size: 12px;
	margin-bottom: 0;
    img{
        margin-right: 1px
    }
`
const AdditionalInfo = styled.p`
    font-size: 12px;
    width: 30vh;
`
const PopUpInfo = styled.div`
    cursor: text;
    -webkit-user-select: text;  /* Chrome 49+ */
    -moz-user-select: text;     /* Firefox 43+ */
    -ms-user-select: text;      /* No support yet */
    user-select: text;   
`
const CloseButton = styled.div`
    cursor: pointer;
	display: flex;
	justify-content: flex-end;
`

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
export default Maps