import React from "react";
// react component that copies the given text inside your clipboard
// import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row,
  TabContent,
  TabPane,
  Card,
  CardTitle,
  CardText,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";
// core components
import NewSupplierHeader from "./NewSupplierHeader.jsx";
import classnames from "classnames";

class NewSupplier extends React.Component {
  state = {
    activeTab: "1"
  };

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <NewSupplierHeader />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          <Card className="shadow">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    this.setState({ activeTab: "1" });
                  }}
                >
                  Vendor Details
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    this.setState({ activeTab: "2" });
                  }}
                >
                  Branches
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    this.setState({ activeTab: "3" });
                  }}
                >
                  Products & Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    this.setState({ activeTab: "4" });
                  }}
                >
                  Important Dates
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "5" })}
                  onClick={() => {
                    this.setState({ activeTab: "5" });
                  }}
                >
                  Aditional Infomations
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="p-4">
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Form>
                      <div>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                Vendor Name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue=""
                                id="input-username"
                                placeholder="Input Vendor Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Company Registration Number
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-email"
                                placeholder="Input Registration Number"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Company Registration Status
                              </label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Gov/PSU compounding scheme</option>
                                <option>Not Registered</option>
                                <option>Registered</option>
                                <option>Status Not Received</option>
                                <option>Under Compounding Scheme</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Vendor GL Code
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue=""
                                id="input-first-name"
                                placeholder="Input Vendor GL Code"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Vendor Category
                              </label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Rental</option>
                                <option>Training</option>
                                <option>Travel</option>
                                <option>Software</option>
                                <option>Vehicles/Equipment</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Vendor Status
                              </label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Black Listed</option>
                                <option>Normal</option>
                                <option>Posting Block</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Payment Terms: (Days)
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="7"
                                id="input-first-name"
                                placeholder="Input Vendor GL Code"
                                type="number"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Supplier Type
                              </label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Ltd</option>
                                <option>Proprietor</option>
                                <option>Pvt Ltd</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Vendor Portal Access
                              </label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Yes</option>
                                <option>No</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />
                      {/* Address */}
                      <h6 className="heading-small text-muted mb-4">
                        Contact information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-city"
                              >
                                Primary Email
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="abc@supplier.com"
                                id="input-city"
                                placeholder="Input Primary Email"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Phone/Mobile
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="+81"
                                id="input-country"
                                placeholder="input Phone/Mobile"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-address"
                              >
                                Address
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                id="input-address"
                                placeholder="Home Address"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-city"
                              >
                                City
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="Mumbai"
                                id="input-city"
                                placeholder="City"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Country
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="India"
                                id="input-country"
                                placeholder="Country"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Postal code
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-postal-code"
                                placeholder="Postal code"
                                type="number"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="5">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Card>
        </Container>
      </>
    );
  }
}

export default NewSupplier;
