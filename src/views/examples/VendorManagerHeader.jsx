import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";

class VendorManagerHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInvitationModal: false
    };
  }

  render() {
    const { showInvitationModal } = this.state;
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Vendors
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-handshake" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Evaluation
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">924</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-star" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          {/* <i className="fas fa-arrow-down" /> */}18.5%
                        </span>{" "}
                        <span className="text-nowrap">of total vendors</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Pending
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            2,356
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="far fa-clock" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          <i className="fas fa-arrow-down" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Sent Invitations
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">49</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="far fa-envelope-open" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <Button
                          color="link"
                          className="p-0 m-0"
                          onClick={() => {
                            console.log("test");
                            this.setState({
                              showInvitationModal: !showInvitationModal
                            });
                          }}
                        >
                          <i className="fas fa-plus" /> Invite new supplier
                        </Button>
                        <Modal
                          className="modal-dialog-centered"
                          isOpen={showInvitationModal}
                          toggle={() => {
                            this.setState({
                              showInvitationModal: !showInvitationModal
                            });
                          }}
                        >
                          <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">
                              Invite New Supplier
                            </h3>
                            <button
                              aria-label="Close"
                              className="close"
                              data-dismiss="modal"
                              type="button"
                              onClick={() =>
                                this.setState({
                                  showInvitationModal: !showInvitationModal
                                })
                              }
                            >
                              <span aria-hidden={true}>×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <Form>
                              <div>
                                <Row>
                                  <Col lg="12">
                                    <FormGroup>
                                      <label
                                        className="form-control-label"
                                        htmlFor="input-username"
                                      >
                                        Supplier Name
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
                                </Row>
                                <Row>
                                  <Col lg="12">
                                    <FormGroup>
                                      <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                      >
                                        Email Address
                                      </label>
                                      <Input
                                        className="form-control-alternative"
                                        id="input-email"
                                        placeholder="Input Email Address"
                                        type="email"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="12">
                                    <FormGroup>
                                      <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                      >
                                        Phone/Mobile
                                      </label>
                                      <Input
                                        className="form-control-alternative"
                                        id="input-email"
                                        defaultValue="+81"
                                        placeholder="Input Phone/Mobile"
                                        type="number"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="12">
                                    <FormGroup>
                                      <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                      >
                                        Attachments
                                      </label>
                                      <br></br>
                                      <Button>Add File</Button>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </div>
                            </Form>
                          </div>
                          <div className="modal-footer">
                            <Button color="primary" type="button">
                              Send
                            </Button>
                          </div>
                        </Modal>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default VendorManagerHeader;
