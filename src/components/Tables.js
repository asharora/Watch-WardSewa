import React, { useState, useEffect } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { CSVLink, CSVDownload } from "react-csv";
/* eslint-disable no-unused-expressions */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faEdit,
  faEllipsisH,
  faExternalLinkAlt,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Nav,
  Card,
  Image,
  Button,
  Table,
  Dropdown,
  ProgressBar,
  Pagination,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Routes } from "../routes";
import { pageVisits, pageTraffic, pageRanking } from "../data/tables";
import transactions from "../data/transactions";
import commands from "../data/commands";

export const PageTrafficTable = () => {
  const [input, setinput] = useState("");
  const [slotData, setslotData] = useState(null);

  useEffect(() => {
    fetch("https://watch-ward-backend.herokuapp.com/api/get-slots")
      .then((response) => response.json())
      .then((data) => setslotData(data));
  }, []);

  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const TableRow = (props) => {
    console.log(props);
    return (
      <tr>
        {/* <th colspan="2" className="border-0">Time: 7:00 AM to 7:00 AM</th> */}
        <td colspan="1" className="border-0">
          {props["date"]}
        </td>
        <td colspan="1" className="border-0">
          {props["day"]}
        </td>
        {props["sewadars"].map(function (name, i) {
          return <UserCell responseData={props} number={i + 1} />;
        })}
        {/* <Cell responseData={props} number={1}/>
      <Cell responseData={props} number={2}/>
      <Cell responseData={props} number={3}/>
      <Cell responseData={props} number={4}/> */}
      </tr>
      // <tr>
      //   <td>
      //     <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
      //   </td>
      //   <td>
      //     <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
      //   </td>

      //   <td className="fw-bold">
      //     <FontAwesomeIcon icon={sourceIcon} className={`icon icon-xs text-${sourceIconColor} w-30`} />
      //     {source}
      //   </td>
      //   <td>{sourceType}</td>
      //   <td>{category ? category : "--"}</td>
      //   <td>{rank ? rank : "--"}</td>
      //   <td>
      //     <Row className="d-flex align-items-center">
      //       <Col xs={12} xl={2} className="px-0">
      //         <small className="fw-bold">{trafficShare}%</small>
      //       </Col>
      //       <Col xs={12} xl={10} className="px-0 px-xl-1">
      //         <ProgressBar variant="primary" className="progress-lg mb-0" now={trafficShare} min={0} max={100} />
      //       </Col>
      //     </Row>
      //   </td>
      //   <td>
      //     <ValueChange value={change} suffix="%" />
      //   </td>
      // </tr>
    );
  };

  return slotData == null ? (
    <p>Loading ....</p>
  ) : (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        {/* <p>{JSON.stringify(slotData)}</p> */}
        <Table
          style={{ borderCollapse: "seperate", borderSpacing: "0px 50px" }}
          id="data"
          responsive
          className="table-centered table-nowrap rounded mb-0"
        >
          <thead className="thead-">
            <tr className="thead-dark" style={{ color: "white" }}>
              <th
                colspan="6"
                className="border-0 text-center"
                style={{ color: "white" }}
              >
                <h3 style={{ color: "white" }}>
                  {slotData["header"]["title"]}
                </h3>
                <br />
                <h5 style={{ color: "white" }}>
                  {" "}
                  {slotData["header"]["subtitle"]}
                </h5>
                <br />
                <h6 style={{ color: "white" }}>
                  {" "}
                  {"01st to " +
                    slotData["data"][slotData["data"].length - 1]["date"].split(
                      "-"
                    )[2] +
                    "th " +
                    months[
                      slotData["data"][slotData["data"].length - 1][
                        "date"
                      ].split("-")[1]
                    ]}
                </h6>
              </th>
            </tr>
            <br />
            <tr>
              <th colspan="2" className="border-0">
                Incharge :
              </th>
              <td colspan="2" className="border-0">
                {slotData["header"]["field1"]}
              </td>
              <td colspan="2" className="border-0">
                {slotData["header"]["field2"]}
              </td>
            </tr>

            <tr>
              {/* <th colspan="2" className="border-0">Time: 7:00 AM to 7:00 AM</th> */}
              <th colspan="1" className="border-0">
                DATE
              </th>
              <th colspan="1" className="border-0">
                DAY
              </th>
              {slotData["data"][0]["sewadars"].map(function (name, i) {
                return (
                  <th colspan="1" className="border-0">
                    {"Sewader " + (i + 1)}
                  </th>
                );
              })}
              {/* <th colspan="1" className="border-0">Sewader 3</th>
              <th colspan="1" className="border-0">Sewader 4</th> */}
            </tr>
          </thead>
          <tbody>
            {slotData["data"].map((pt) =>
              !pt["sewadars"].includes("") ? (
                <></>
              ) : (
                <TableRow key={`page-traffic-${pt.id}`} {...pt} />
              )
            )}
          </tbody>
        </Table>
        <br />
      </Card.Body>
    </Card>
  );
};

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const RankingTable = () => {
  const [Title, setTitle] = useState("");
  const [slotData, setslotData] = useState(null);
  const [SubTitle, setSubTitle] = useState("");
  const [Field1, setField1] = useState("");
  const [Field2, setField2] = useState("");

  useEffect(() => {
    fetch("https://watch-ward-backend.herokuapp.com/api/get-slots")
      .then((response) => response.json())
      .then((data) => {
        setslotData(data);
        setTitle(data["header"]["title"]);
        setSubTitle(data["header"]["subtitle"]);
        setField1(data["header"]["field1"]);
        setField2(data["header"]["field2"]);
      });
  }, []);

  const SaveHeader = () => {
    // {
    //   "title":2,
    //   "subtitle":5,
    //   "field1":"Ajay Gulati",
    //   "field2":"Harvinder Rawal"
    // }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: Title,
        subtitle: SubTitle,
        field1: Field1,
        field2: Field2,
      }),
    };

    console.log(requestOptions);

    fetch(
      "https://watch-ward-backend.herokuapp.com/api/book-header",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => alert(data["message"]));
  };
  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const TableRow = (props) => {
    console.log(props);
    return (
      <tr>
        {/* <th colspan="2" className="border-0">Time: 7:00 AM to 7:00 AM</th> */}
        <td colspan="1" className="border-0">
          {props["date"]}
        </td>
        <td colspan="1" className="border-0">
          {props["day"]}
        </td>
        {props["sewadars"].map(function (name, i) {
          return <Cell responseData={props} number={i + 1} />;
        })}
      </tr>
    );
  };

  const myTable = (props) => {
    return (
      <Table
        style={{
          borderCollapse: "seperate",
          borderSpacing: "0px 50px",
          height: "0px",
        }}
        hidden="true"
        id="myData"
        responsive
        className="table-centered table-nowrap rounded mb-0"
      >
        <thead className="thead-">
          <tr className="thead-dark" style={{ color: "white" }}>
            <th
              colspan="6"
              className="border-0 text-center"
              style={{ color: "white" }}
            >
              <h3 style={{ color: "white" }}>{Title}</h3>
              <h5 style={{ color: "white" }}>{SubTitle}</h5>
              <h6 style={{ color: "white" }}>
                {"01st to " +
                  slotData["data"][slotData["data"].length - 1]["date"].split(
                    "-"
                  )[2] +
                  "th " +
                  months[
                    slotData["data"][slotData["data"].length - 1]["date"].split(
                      "-"
                    )[1]
                  ]}
              </h6>
            </th>
          </tr>
          <br />
          <tr>
            <th colspan="2" className="border-0">
              Incharge :
            </th>
            <td colspan="2" className="border-0">
              {Field1}
            </td>
            <td colspan="2" className="border-0">
              {Field2}
            </td>
          </tr>

          <tr>
            {/* <th colspan="2" className="border-0">Time: 7:00 AM to 7:00 AM</th> */}
            <th colspan="1" className="border-0">
              DATE
            </th>
            <th colspan="1" className="border-0">
              DAY
            </th>
            {slotData["data"][0]["sewadars"].map(function (name, i) {
              return (
                <th colspan="1" className="border-0">
                  {"Sewader " + (i + 1)}
                </th>
              );
            })}
            {/* <th colspan="1" className="border-0">Sewader 3</th>
              <th colspan="1" className="border-0">Sewader 4</th> */}
          </tr>
        </thead>
        <tbody>
          {slotData["data"].map((pt) => (
            <tr>
              <td colspan="1" className="border-0">
                {pt["date"]}
              </td>
              <td colspan="1" className="border-0">
                {pt["day"]}
              </td>
              {pt["sewadars"].map(function (name, i) {
                return (
                  <td colspan="1" className="border-0">
                    {name}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    );
    return <div></div>;
  };

  return slotData == null ? (
    <p>Loading ....</p>
  ) : (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table
          style={{ borderCollapse: "seperate", borderSpacing: "0px 50px" }}
          id="data"
          responsive
          className="table-centered table-nowrap rounded mb-0"
        >
          {/* <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
          <label class="custom-control-label" for="customRadioInline1">Toggle this custom radio</label>
          </div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline2">Or toggle this other custom radio</label>
</div> */}
          <thead className="thead-">
            <tr className="thead-dark" style={{ color: "white" }}>
              <th
                colspan="6"
                className="border-0 text-center"
                style={{ color: "white" }}
              >
                <h3 style={{ color: "white" }}>
                  <input
                    type="text"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    style={{ height: "30px", width: "250px" }}
                    className="form-control"
                    value={Title}
                  />
                </h3>
                <br />
                <h5 style={{ color: "white" }}>
                  <input
                    type="text"
                    onChange={(e) => {
                      setSubTitle(e.target.value);
                    }}
                    style={{ height: "30px", width: "250px" }}
                    className="form-control"
                    value={SubTitle}
                  />
                </h5>
                <br />
                <h6 style={{ color: "white" }}>
                  {"01st to " +
                    slotData["data"][slotData["data"].length - 1]["date"].split(
                      "-"
                    )[2] +
                    "th " +
                    months[
                      slotData["data"][slotData["data"].length - 1][
                        "date"
                      ].split("-")[1]
                    ]}
                </h6>
              </th>
            </tr>
            <br />
            <tr>
              <th colspan="2" className="border-0">
                Incharge :
              </th>
              <td colspan="1" className="border-0">
                <input
                  type="text"
                  onChange={(e) => {
                    setField1(e.target.value);
                  }}
                  style={{ height: "30px", width: "250px" }}
                  className="form-control"
                  value={Field1}
                />
              </td>
              <td colspan="1" className="border-0">
                <input
                  onChange={(e) => {
                    setField2(e.target.value);
                  }}
                  type="text"
                  style={{ height: "30px", width: "250px" }}
                  className="form-control"
                  value={Field2}
                />
              </td>
              <td colspan="1" className="border-0">
                {" "}
                <button
                  type="button"
                  onClick={SaveHeader}
                  class="btn btn-primary btn-sm"
                >
                  Save Changes
                </button>
              </td>
            </tr>

            <tr>
              {/* <th colspan="2" className="border-0">Time: 7:00 AM to 7:00 AM</th> */}
              <th colspan="1" className="border-0">
                DATE
              </th>
              <th colspan="1" className="border-0">
                DAY
              </th>
              {slotData["data"][0]["sewadars"].map(function (name, i) {
                return (
                  <th colspan="1" className="border-0">
                    {"Sewader " + (i + 1)}
                  </th>
                );
              })}
              {/* <th colspan="1" className="border-0">Sewader 3</th>
              <th colspan="1" className="border-0">Sewader 4</th> */}
            </tr>
          </thead>
          <tbody>
            {slotData["data"].map((pt) => (
              <TableRow key={`page-traffic-${pt.id}`} {...pt} />
            ))}
          </tbody>
        </Table>
        <br />
        {myTable()}
        <ReactHTMLTableToExcel
          id="myData"
          className="download-table-xls-button"
          table="myData"
          filename="Duties"
          sheet="tablexls"
          buttonText="Report Download"
        />
      </Card.Body>
    </Card>
  );
};

const UserCell = (props) => {
  console.log(props.responseData["sewadars"]);

  const [input, setinput] = useState(
    props.responseData["sewadars"][props.number - 1]
  );
  const [readOnly, setreadOnly] = useState(
    props.responseData["sewadars"][props.number - 1] != ""
  );

  //console.log(props.dat)
  return (
    <td colspan="1" className="border-0">
      <form
        onSubmit={() => {
          setinput(input.toUpperCase());

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: input.toUpperCase(),
              date: props.responseData["date"],
              sewadarNumber: props.number,
            }),
          };
          console.log(requestOptions);

          fetch(
            "https://watch-ward-backend.herokuapp.com/api/book-slot",
            requestOptions
          )
            .then((response) => response.json())
            .then((data) => {
              alert(data["message"]);
              setreadOnly(true);
            });
        }}
      >
        <input
          type="text"
          style={{ height: "30px" }}
          readOnly={readOnly}
          className="form-control"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
          onSubmit={(e) => {
            setinput(e.target.value);
            alert(e.value);
            console.log(e.value);
          }}
        />
      </form>
    </td>
  );
};

const Cell = (props) => {
  const [input, setinput] = useState(
    props.responseData["sewadars"][props.number - 1]
  );
  //console.log(props.dat)
  return (
    <td colspan="1" className="border-0">
      <form
        onSubmit={() => {
          setinput(input.toUpperCase());

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: input.toUpperCase(),

              date: props.responseData["date"],
              sewadarNumber: props.number,
            }),
          };
          console.log(requestOptions);
          fetch(
            "https://watch-ward-backend.herokuapp.com/api/book-slot",
            requestOptions
          )
            .then((response) => response.json())
            .then((data) => alert(data["message"]));
        }}
      >
        <input
          type="text"
          style={{ height: "30px" }}
          className="form-control"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
          onSubmit={(e) => {
            setinput(e.target.value);
            alert(e.value);
            console.log(e.value);
          }}
        />
      </form>
    </td>
  );
};

export const TransactionsTable = () => {
  const totalTransactions = transactions.length;

  const TableRow = (props) => {
    const { invoiceNumber, subscription, price, issueDate, dueDate, status } =
      props;
    const statusVariant =
      status === "Paid"
        ? "success"
        : status === "Due"
        ? "warning"
        : status === "Canceled"
        ? "danger"
        : "primary";

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {invoiceNumber}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{subscription}</span>
        </td>
        <td>
          <span className="fw-normal">{issueDate}</span>
        </td>
        <td>
          <span className="fw-normal">{dueDate}</span>
        </td>
        <td>
          <span className="fw-normal">${parseFloat(price).toFixed(2)}</span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>{status}</span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0"
            >
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Bill For</th>
              <th className="border-bottom">Issue Date</th>
              <th className="border-bottom">Due Date</th>
              <th className="border-bottom">Total</th>
              <th className="border-bottom">Status</th>
              <th className="border-bottom">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>Previous</Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalTransactions}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const CommandsTable = () => {
  const TableRow = (props) => {
    const { name, usage = [], description, link } = props;

    return (
      <tr>
        <td className="border-0" style={{ width: "5%" }}>
          <code>{name}</code>
        </td>
        <td className="fw-bold border-0" style={{ width: "5%" }}>
          <ul className="ps-0">
            {usage.map((u) => (
              <ol key={u} className="ps-0">
                <code>{u}</code>
              </ol>
            ))}
          </ul>
        </td>
        <td className="border-0" style={{ width: "50%" }}>
          <pre className="m-0 p-0">{description}</pre>
        </td>
        <td className="border-0" style={{ width: "40%" }}>
          <pre>
            <Card.Link href={link} target="_blank">
              Read More{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
            </Card.Link>
          </pre>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="p-0">
        <Table
          responsive
          className="table-centered rounded"
          style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
        >
          <thead className="thead-light">
            <tr>
              <th className="border-0" style={{ width: "5%" }}>
                Name
              </th>
              <th className="border-0" style={{ width: "5%" }}>
                Usage
              </th>
              <th className="border-0" style={{ width: "50%" }}>
                Description
              </th>
              <th className="border-0" style={{ width: "40%" }}>
                Extra
              </th>
            </tr>
          </thead>
          <tbody>
            {commands.map((c) => (
              <TableRow key={`command-${c.id}`} {...c} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
