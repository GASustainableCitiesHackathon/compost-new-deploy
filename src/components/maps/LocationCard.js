import React, { useState } from "react";
import { Card, Form, Button, Modal } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { patchWeight } from "../../api/location.js";
import styled from "styled-components";
import "./IndexLocations.css";

const LocationCard = ({ user, location, randomNumber, randomImage }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('loc, weight, user', location, weight, user)
    patchWeight(location, weight, user)
      .then(() => {
          console.log("success");
        }
        // msgAlert({
        //   heading: "Thank you for your compost!",
        //   message: messages.signInSuccess,
        //   variant: "success",
        // })
      )
      //   .then(() => history.push("/"))
      .catch((error) => {
        console.log("error");
        // msgAlert({
        //   heading: "Sign In Failed with error: " + error.message,
        //   message: messages.signInFailure,
        //   variant: "danger",
        // });
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <BusinessInfo>
            <Card.Title className="title">
              {location.food_scrap_drop_off_site}
            </Card.Title>
            <FoodScrapDropOffSite>{location.location}</FoodScrapDropOffSite>
            <FoodScrapDropOffSite>
              {location.borough}, NY {location.zip_code}
            </FoodScrapDropOffSite>
            <SiteInfo>
              <img src="/icons/popup/phone.png" width="10px" /> (718)
              {randomNumber[0]}-{randomNumber[1]}
            </SiteInfo>
            <SiteInfo>
              <img src="/icons/globe.svg" width="10px" />{" "}
              <a href={location.website}>{location.website}</a>
            </SiteInfo>
            <SiteInfo>
              <img src="/icons/popup/directions.png" width="10px" /> Directions
            </SiteInfo>
          </BusinessInfo>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <SiteInfo>Total Compost: {location.weights.length}</SiteInfo>
          <SiteInfo>
            <img src="/icons/popup/calendar.png" width="10px" />
            Hours: {location.hours_from} - {location.hours_to}
          </SiteInfo>
          <AdditionalInfo>
            <span>Operation Day: </span>
            {location.operation_day}
            <br />
            <span>Open Months: </span>
            {location.open_months}
          </AdditionalInfo>
          <div className="d-flex">
            <Button
              className="mr-auto p-2"
              variant="success"
              onClick={handleShow}
            >
              Calculate Your Compost
            </Button>
          </div>
        </Col>
        <Col xs={6}>
          <BusinessImage className="d-flex justify-content-end">
            <img src={`randomImages/${randomImage}.png`} alt="" width="120px" />
          </BusinessImage>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="d-flex flex-column">
          <Modal.Title className="title mx-auto">WELCOME BACK</Modal.Title>
          <ModalSubheading>calculate your compost!</ModalSubheading>
        </Modal.Header>
        <Modal.Body className="mx-auto">Enter pounds of compost</Modal.Body>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Group controlId="weight">
            <Form.Control
              required
              type="text"
              name="weight"
              value={weight}
              placeholder="Enter weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </Form.Group>
          <Button
            className="mx-auto"
            variant="success"
            size="lg"
            type="submit"
            block
          >
            Submit
          </Button>
        </Form>
      </Modal>
    </Container>
  );
};

const BusinessInfo = styled.div`
  flex-direction: column;
  flex: 1;
`;
const BusinessImage = styled.div`
  display: flex;
`;

const FoodScrapDropOffSite = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #656565;
`;
const SiteInfo = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  img {
    margin-right: 1px;
  }
`;
const AdditionalInfo = styled.p`
  font-size: 12px;
  width: 30vh;
`;

const ModalSubheading = styled.p`
  font-color: #989898;
  font-size: 20px;
  margin: auto;
`;

export default LocationCard;
