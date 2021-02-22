import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <Navbar className="d-flex" bg="light" fixed="bottom" style={{ color: 'grey', textAlign: 'right' }}>
      <Nav className="mr-auto">Copyright Team 1 GA Hackathon 2021 Sustainable Cities</Nav>
    </Navbar>
  )
}

export default Footer