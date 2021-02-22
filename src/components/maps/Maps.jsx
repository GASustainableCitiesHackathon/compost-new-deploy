import React, { useState, useEffect, useRef } from 'react'
import ReactMapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl'
import { Card, Badge, Button, Container, Row, Col } from 'react-bootstrap'
import 'mapbox-gl/dist/mapbox-gl.css'
import styled from 'styled-components'
import Geocoder from 'react-map-gl-geocoder'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import "./IndexLocations.css"


function Maps({ setViewport, viewport, data, location, setLocation }) {

    const [randomNumber, setRandomNumber] = useState([])
    const [randomImage, setRandomImage] = useState("")
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
                        onClick={() => { getRandomInt() }}
                        latitude={location.latitude}
                        longitude={location.longitude}
                        onClose={() => setLocation(null)}
                        closeButton={false}
                    >
                        <Card border="light" style={{ width: '560px' }}>
                            <Container>
                                <PopUpInfo>
                                    <Row>
                                        <Col xs={9}>
                                            <BusinessInfo>
                                                <Card.Title className="title">{location.food_scrap_drop_off_site}</Card.Title>
                                                <FoodScrapDropOffSite>{location.location}</FoodScrapDropOffSite>
                                                <FoodScrapDropOffSite>{location.borough}, NY {location.zip_code}</FoodScrapDropOffSite>
                                                <SiteInfo>
                                                    <img alt="" src="/icons/popup/phone.png" width="10px" /> (718){randomNumber[0]}-{randomNumber[1]}
                                                </SiteInfo>
                                                <SiteInfo>
                                                    <img alt="" src="/icons/globe.svg" width="10px" /> <a href={location.website}>{location.website}</a>
                                                </SiteInfo>
                                                <SiteInfo>
                                                    <img alt="" src="/icons/popup/directions.png" width="10px" /> Directions
											</SiteInfo>
                                            </BusinessInfo>
                                        </Col>
                                        <Col xs={3}>
                                            <BusinessImage>
                                                <img src={`randomImages/${randomImage}.png`} alt="" width="120px" />
                                            </BusinessImage>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <SiteInfo>
                                                <img alt="" src="/icons/popup/calendar.png" width="10px" />
											Hours: {location.hours_from} - {location.hours_to}
                                            </SiteInfo>
                                            <AdditionalInfo>
                                                <span>Operation Day: </span>{location.operation_day}<br />
                                                <span>Open Months: </span>{location.open_months}
                                            </AdditionalInfo>
                                            <Button variant="success">Go somewhere</Button>
                                        </Col>
                                    </Row>
                                </PopUpInfo>
                                <CloseButton>
                                    <Badge style={{ width: '20px', marginBottom: '10px' }} variant="danger">X</Badge>
                                </CloseButton>
                            </Container>
                        </Card>
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