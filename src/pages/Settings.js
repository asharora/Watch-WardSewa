import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

import { Routes } from "../routes";
// import BgImage from "new-frontend/src/assets/img/illustrations/signin.svg";
import {
  faBoxOpen,
  faCartArrowDown,
  faChartPie,
  faChevronDown,
  faClipboard,
  faFileAlt,
  faPlus,
  faRocket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "@themesberg/react-bootstrap";
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { GeneralInfoForm } from "../components/Forms";

import { RankingTable } from "../components/Tables";
// import reactHtmlTableToExcel from "react-html-table-to-excel";

export default () => {
  const [newDuties, setnewDuties] = useState(false);
  const [Password, setPassword] = useState("");
  const [status, setstatus] = useState(false);
  return !status ? (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center"></p>
          <Row
            className="justify-content-center form-bg-image"
            // style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Login</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Admin</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        type="email"
                        readOnly="true"
                        placeholder="Admin"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4"></div>
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={() => {
                      console.log(Password);
                      if (Password === "12345678") {
                        setstatus(true);
                      }
                      {
                        alert("Incorrect Password");
                      }
                    }}
                    type="submit"
                    className="w-100"
                  >
                    Sign in
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  ) : (
    <>
      <RankingTable />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown.Toggle
          as={Button}
          variant="secondary"
          className="text-dark me-2"
          onClick={() => {
            setnewDuties(!newDuties);
          }}
        >
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          <span>New</span>
        </Dropdown.Toggle>

        {/* <Dropdown>
    <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
      <FontAwesomeIcon icon={faPlus} className="me-2" />
      <span>New</span>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
      <Dropdown.Item>
        <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Document
      </Dropdown.Item>
      <Dropdown.Item>
        <FontAwesomeIcon icon={faCommentDots} className="me-2" /> Message
      </Dropdown.Item>
      <Dropdown.Item>
        <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Product
      </Dropdown.Item>

      <Dropdown.Divider />

      <Dropdown.Item>
        <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Subscription Plan
        </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown> */}

        {/* <div className="d-flex"> */}
        {/* <Dropdown.Toggle as={Button} variant="primary"> */}

        {/* <span className="icon icon-small ms-1"><FontAwesomeIcon icon={DocsDownload} /></span> */}
        {/* </Dropdown.Toggle> */}

        {/* <Dropdown>
      <Dropdown.Toggle as={Button} variant="primary">
        <FontAwesomeIcon icon={faClipboard} className="me-2" /> Reports
        <span className="icon icon-small ms-1"><FontAwesomeIcon icon={faChevronDown} /></span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-1">
        <Dropdown.Item>
          <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Products
        </Dropdown.Item>
        <Dropdown.Item>
          <FontAwesomeIcon icon={faStore} className="me-2" /> Customers
        </Dropdown.Item>
        <Dropdown.Item>
          <FontAwesomeIcon icon={faCartArrowDown} className="me-2" /> Orders
        </Dropdown.Item>
        <Dropdown.Item>
          <FontAwesomeIcon icon={faChartPie} className="me-2" /> Console
        </Dropdown.Item>

        <Dropdown.Divider />

        <Dropdown.Item>
          <FontAwesomeIcon icon={faRocket} className="text-success me-2" /> All Reports
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
      </div>

      {/* </div> */}
      {newDuties ? <GeneralInfoForm /> : <></>}
      {/* <Row>
  <Col xs={12} xl={8}>
    <GeneralInfoForm />
  </Col> */}

      {/* <Col xs={12} xl={4}>
    <Row>
      <Col xs={12}>
        <ProfileCardWidget />
      </Col>
      <Col xs={12}>
        <ChoosePhotoWidget
          title="Select profile photo"
          photo={Profile3}
        />
      </Col>
    </Row>
  </Col> */}
      {/* </Row> */}
    </>
  );

  // (
  //     );
};
