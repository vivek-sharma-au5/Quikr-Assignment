import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Media,
  Badge,
} from "react-bootstrap";
import medicineDB from "./medicinesDB";

const Body = (props) => {
  return (
    <>
      <Container>
        <Row xs={10} style={{ marginTop: "5rem" }}>
          <Col xs={7}>
            {props.searchList.length !== 0
              ? props.searchList?.map((item, i) => (
                  <Card style={{ width: "35rem" }} className='float-right mt-3'>
                    <Card.Body key={i}>
                      <Card.Title style={{ fontWeight: "900" }}>
                        {item.name}
                      </Card.Title>
                      <div className='float-right mt-n5'>
                        <h4 style={{ color: "#ff4d4d", fontWeight: "700" }}>
                          Rs.{item.price}
                        </h4>
                      </div>
                      <Card.Subtitle className='mb-2 text-muted'>
                        {item.genricName}
                      </Card.Subtitle>
                      <ul className='list-unstyled'>
                        <Media as='li'>
                          <img
                            width={64}
                            height={64}
                            className='mr-3'
                            src='https://corp.7-eleven.com/images/141118-OTC-7-Select.jpg'
                            alt='Generic placeholder'
                          />
                          <Media.Body>
                            <h5 style={{ color: "blue", fontStyle: "italic" }}>
                              {item.manufacturer}
                            </h5>
                            <h6>{item.disease}</h6>
                            <h6>
                              Prescription Required :{" "}
                              {item.isPrescription ? (
                                <Badge variant='success'>Required</Badge>
                              ) : (
                                <Badge variant='danger'>Not Required</Badge>
                              )}
                            </h6>
                          </Media.Body>
                        </Media>
                      </ul>
                      <Button variant='info' className='float-right'>
                        Add to Cart
                      </Button>{" "}
                    </Card.Body>
                  </Card>
                ))
              : medicineDB?.map((item, i) => (
                  <Card style={{ width: "35rem" }} className='float-right mt-3'>
                    <Card.Body key={i}>
                      <Card.Title style={{ fontWeight: "900" }}>
                        {item.name}
                      </Card.Title>
                      <div className='float-right mt-n5'>
                        <h4 style={{ color: "#ff4d4d", fontWeight: "700" }}>
                          Rs.{item.price}
                        </h4>
                      </div>
                      <Card.Subtitle className='mb-2 text-muted'>
                        {item.genricName}
                      </Card.Subtitle>
                      <ul className='list-unstyled'>
                        <Media as='li'>
                          <img
                            width={64}
                            height={64}
                            className='mr-3'
                            src='https://corp.7-eleven.com/images/141118-OTC-7-Select.jpg'
                            alt='Generic placeholder'
                          />
                          <Media.Body>
                            <h5 style={{ color: "blue", fontStyle: "italic" }}>
                              {item.manufacturer}
                            </h5>
                            <h6>{item.disease}</h6>
                            <h6>
                              Prescription Required :{" "}
                              {item.isPrescription ? (
                                <Badge variant='success'>Required</Badge>
                              ) : (
                                <Badge variant='danger'>Not Required</Badge>
                              )}
                            </h6>
                          </Media.Body>
                        </Media>
                      </ul>
                      <Button variant='info' className='float-right'>
                        Add to Cart
                      </Button>{" "}
                    </Card.Body>
                  </Card>
                ))}
          </Col>
          <Col xs={5} className='justify-content-center mt-3'>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Subtitle className='mb-2 text-muted'>
                  Don't have time ?
                </Card.Subtitle>
                <Card.Title>Quick Order</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Upload doctor's prescriptions and we will add the medicines
                  for you!
                </Card.Subtitle>
                <Button variant='light' className='float-right'>
                  UPLOAD
                </Button>{" "}
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Body;
