import React from "react";
// react component that copies the given text inside your clipboard
// import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Media,
  Badge,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Table,
  CardFooter,
  InputGroup,
  InputGroupAddon,
  Input,
  Label,
  FormGroup
} from "reactstrap";
// core components
import Header from "./VendorManagerHeader.jsx";

class VendorManager extends React.Component {
  state = {
    showFilterArea: false,
    showFilterStatus: false,
    showFilterScore: false
  };

  render() {
    const { showFilterArea, showFilterStatus, showFilterScore } = this.state;
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row>
                    <Col>
                      <InputGroup size="sm">
                        <InputGroupAddon size="sm" addonType="prepend">
                          <span className="input-group-text">
                            <i className="fa fa-search" />
                          </span>
                        </InputGroupAddon>
                        <Input placeholder="Search By Name" size="sm" />
                      </InputGroup>
                    </Col>
                    <Col className="text-right d-none d-sm-block">
                      <Dropdown
                        size="sm"
                        isOpen={showFilterStatus}
                        toggle={() =>
                          this.setState({ showFilterStatus: !showFilterStatus })
                        }
                      >
                        <DropdownToggle outline className="btn-outline-info">
                          <i className="fas fa-filter mr-1" />
                          Status
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>
                            <Badge color="" className="badge-dot">
                              <i className="bg-success" />
                              Approved
                            </Badge>
                          </DropdownItem>
                          <DropdownItem>
                            <Badge color="" className="badge-dot">
                              <i className="bg-info" />
                              Sent For Approval
                            </Badge>
                          </DropdownItem>
                          <DropdownItem>
                            <Badge color="" className="badge-dot">
                              <i className="bg-danger" />
                              Rejected
                            </Badge>
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                            <Badge color="" className="badge-dot">
                              <i className="bg-warning" />
                              Sent Invitation
                            </Badge>
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown
                        size="sm"
                        isOpen={showFilterScore}
                        toggle={() =>
                          this.setState({ showFilterScore: !showFilterScore })
                        }
                      >
                        <DropdownToggle outline className="btn-outline-info">
                          <i className="fas fa-filter mr-1" />
                          Score
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" checked /> Above 2,000
                              </Label>
                            </FormGroup>
                          </DropdownItem>
                          <DropdownItem>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" checked /> 1,000 - 2,000
                              </Label>
                            </FormGroup>
                          </DropdownItem>
                          <DropdownItem>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" checked /> Under 1,000
                              </Label>
                            </FormGroup>
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" /> Others
                              </Label>
                            </FormGroup>
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown
                        size="sm"
                        isOpen={showFilterArea}
                        toggle={() =>
                          this.setState({ showFilterArea: !showFilterArea })
                        }
                      >
                        <DropdownToggle outline className="btn-outline-info">
                          <i className="fas fa-filter mr-1" />
                          Area
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem header className="text-primary">
                            India
                          </DropdownItem>
                          <DropdownItem>Andhra Pradesh</DropdownItem>
                          <DropdownItem>Arunachal Pradesh</DropdownItem>
                          <DropdownItem>Assam</DropdownItem>
                          <DropdownItem>Bihar</DropdownItem>
                          <DropdownItem>Chhattisgarh</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem header className="text-primary">
                            Global
                          </DropdownItem>
                          <DropdownItem>Philipine</DropdownItem>
                          <DropdownItem>Indonesia</DropdownItem>
                          <DropdownItem>Singapore</DropdownItem>
                          <DropdownItem>Vietnam</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Vendor Name</th>
                      <th scope="col" className="text-right">
                        Score
                      </th>
                      <th scope="col">Status</th>
                      <th scope="col" className="text-center">
                        Rate Card
                      </th>
                      <th scope="col" className="text-center">
                        Portal Access
                      </th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/placeholder.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Amandeep Traders
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td className="text-right">1,024 </td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          Sent For Approval
                        </Badge>
                      </td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              View Rate Cards
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Create New Evaluation
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Send Invitation
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Purchase History
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Spend Analytics
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/placeholder.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">Amy Foster</span>
                          </Media>
                        </Media>
                      </th>
                      <td className="text-right">966</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-success" />
                          Approved
                        </Badge>
                      </td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              View Rate Cards
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Create New Evaluation
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Send Invitation
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Purchase History
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Spend Analytics
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/placeholder.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              ABL Enterprises
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td className="text-right">512</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          Rejected
                        </Badge>
                      </td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <i className="fa fa-check text-success" />
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              View Rate Cards
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Create New Evaluation
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Send Invitation
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Purchase History
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Spend Analytics
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/placeholder.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Adolph B Suppluers
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td className="text-right">2,048</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className="bg-info" />
                          Sent Invitation
                        </Badge>
                      </td>
                      <td className="text-center">
                        <i className="text-success fa fa-check" />
                      </td>
                      <td className="text-center">
                        <i className="fa far fa-envelope-open text-warning" />
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              View Rate Cards
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Create New Evaluation
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Send Invitation
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Purchase History
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Spend Analytics
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/placeholder.png")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Crystal Image Paper Marketing Corporation
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td className="text-right">20</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-success" />
                          Approved
                        </Badge>
                      </td>
                      <td></td>
                      <td></td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              View Rate Cards
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Create New Evaluation
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Send Invitation
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Purchase History
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Spend Analytics
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default VendorManager;
