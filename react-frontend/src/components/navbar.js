import React, { useState, useEffect } from "react";
import { Button, Navbar, Form, FormControl, Nav } from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import medicineDB from "./medicinesDB";

const NavbarComponent = (props) => {
  useEffect(() => {
    console.log("props", props);
  }, [props]);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log("HS", string, results);
  };

  const handleOnSelect = (item) => {
    // the item selected
    props.setSearchList([item]);
    console.log("HOS", item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };
  return (
    <>
      <Navbar bg='info' variant='dark' className='navbar1'>
        <Navbar.Brand href='home'>
          <span style={{ color: "gold", fontWeight: "700" }}>
            Doctor's Paradice
          </span>
        </Navbar.Brand>
        <div style={{ width: 400, zIndex: "1" }}>
          <ReactSearchAutocomplete
            items={medicineDB}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </Navbar>
      <Navbar bg='info' variant='dark' className='navbar1'>
        <Nav className='mr-auto ml-auto' style={{ height: "4rem" }}></Nav>
      </Navbar>
      <Navbar bg='light' variant='light' className='justify-content-center'>
        <Nav className='mr-auto ml-auto'>
          <Nav.Link href='/home' className='mr-4 ml-auto'>
            Covid Essentials
          </Nav.Link>
          <Nav.Link href='/home' className='mr-4 ml-auto'>
            Diabetes
          </Nav.Link>
          <Nav.Link href='/home' className='mr-4 ml-auto'>
            Eyeware
          </Nav.Link>
          <Nav.Link href='/home' className='mr-4 ml-auto'>
            Ayush
          </Nav.Link>
          <Nav.Link href='/home' className='mr-4 ml-auto'>
            Fitness
          </Nav.Link>
          <Nav.Link href='/home' className='mr-4 ml-auto'>
            Mom and Baby
          </Nav.Link>
          <Nav.Link href='#home' className='mr-4 ml-auto'>
            Devices
          </Nav.Link>
          <Nav.Link href='/home' className='mr-4 ml-auto'>
            Surgical
          </Nav.Link>
          <Nav.Link href='/home' className='mr-4 ml-auto'>
            Sexual Wellness
          </Nav.Link>
          <Nav.Link href='/home' className='mr-4 ml-auto'>
            Treatments
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
