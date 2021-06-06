
import React, { useState,useEffect }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';  
import { Routes } from "../routes";
import { pageVisits, pageTraffic, pageRanking } from "../data/tables";
import transactions from "../data/transactions";
import commands from "../data/commands";

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return (
    value ? <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}{suffix}
      </span>
    </span> : "--"
  );
};

export const PageVisitsTable = () => {
  const TableRow = (props) => {
    const { pageName, views, returnValue, bounceRate } = props;
    const bounceIcon = bounceRate < 0 ? faArrowDown : faArrowUp;
    const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{pageName}</th>
        <td>{views}</td>
        <td>${returnValue}</td>
        <td>
          <FontAwesomeIcon icon={bounceIcon} className={`${bounceTxtColor} me-3`} />
          {Math.abs(bounceRate)}%
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Page visits</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">See all</Button>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Page name</th>
            <th scope="col">Page Views</th>
            <th scope="col">Page Value</th>
            <th scope="col">Bounce rate</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.map(pv => <TableRow key={`page-visit-${pv.id}`} {...pv} />)}
        </tbody>
      </Table>
    </Card>
  );
};

export const PageTrafficTable = () => {
  const TableRow = (props) => {
    const { id, source, sourceIcon, sourceIconColor, sourceType, category, rank, trafficShare, change } = props;

    return (

      <tr>
      {/* <th colspan="2" className="border-0">Time: 7:00 AM to 7:00 AM</th> */}
      <th colspan="1" className="border-0">01/06/2021</th>
      <th colspan="1" className="border-0">Monday</th>
     
      <th colspan="1" className="border-0">aman</th>
      <th colspan="1" className="border-0">amit</th>
      <th colspan="1" className="border-0">rahul</th>
      <th colspan="1" className="border-0">Bhupesh</th>
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

  return (
    
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
      {/* <div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
  <Table responsive="md">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
  <Table responsive="lg">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
  <Table responsive="xl">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
</div> */}
        <Table id="data" responsive className="table-centered table-nowrap rounded mb-0 table-responsive">
          <thead className="thead-light">
          <tr >
              <th colspan="6" className="border-0">Watch & Ward Sewa // Ashok Nagar Ph II // 01st June to 30th June </th>
          </tr>
          <tr>
              <th colspan="2" className="border-0">Incharge :</th>
              <th colspan="2" className="border-0">Harvinder Rawal - 9717490223</th>
              <th colspan="2" className="border-0">Ajay Gulati - 8823671536</th>
            </tr>
          
          <tr>
              {/* <th colspan="2" className="border-0">Time: 7:00 AM to 7:00 AM</th> */}
              <th colspan="1" className="border-0">DATE</th>
              <th colspan="1" className="border-0">DAY</th>
             
              <th colspan="1" className="border-0">Sewader 1</th>
              <th colspan="1" className="border-0">Sewader 2</th>
              <th colspan="1" className="border-0">Sewader 3</th>
              <th colspan="1" className="border-0">Sewader 4</th>
            </tr>
          
          </thead>
          <tbody>
            {pageTraffic.map(pt => <TableRow key={`page-traffic-${pt.id}`} {...pt} />)}
          </tbody>
        </Table>
        {/* <ReactHTMLTableToExcel  
                                                className="btn btn-info"  

                                                table="data"  

                                                filename="ReportExcel"  

                                                sheet="Sheet"  

                                                buttonText="Export excel" />   */}
      </Card.Body>
    </Card>
  );
};

export const RankingTable = () => {
  const [input, setinput] = useState("Aman");
  const [slotData, setslotData] = useState(null);
  
  useEffect(() => {
    fetch("https://watch-ward-backend.herokuapp.com/api/get-slots")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setslotData(data))
  },[])
  var weekdays=[
    
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday','Sunday'
];
  const TableRow = (props) => {
    console.log(props);
    return (

      <tr>
      {/* <th colspan="2" className="border-0">Time: 7:00 AM to 7:00 AM</th> */}
      <td colspan="1" className="border-0">{props["date"]}</td>
      <td colspan="1" className="border-0">{props["day"]}</td>
      { props["sewadars"].map(function(name,i){
                 return   <Cell responseData={props} number={i+1}/>
    
              })

              }
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

  return (
    slotData==null?<p>Loading ....</p>:<Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        {/* <p>{JSON.stringify(slotData)}</p> */}
        <Table style={{borderCollapse:"seperate",borderSpacing:"0px 50px"}} id="data" responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-">
          <tr className="thead-dark" style={{color:"white"}}>
              <th colspan="6" className="border-0 text-center"style={{color:"white"}}><h3 style={{color:"white"}}>Watch & Ward Sewa</h3><br/><h5 style={{color:"white"}}>Ashok Nagar Ph II</h5><br/><h6 style={{color:"white"}}>01st June to 30th June</h6></th>
          </tr>
          <br/>
          <tr>
              <th colspan="2" className="border-0">Incharge :</th>
              <td colspan="2" className="border-0"><input type='text' style={{height:"30px"}} className='form-control' value={"amit"}/></td>
              <td colspan="2" className="border-0"><input type='text' style={{height:"30px"}} className='form-control' value={"amit"}/></td>
            </tr>
          
          <tr>
              {/* <th colspan="2" className="border-0">Time: 7:00 AM to 7:00 AM</th> */}
              <th colspan="1" className="border-0">DATE</th>
              <th colspan="1" className="border-0">DAY</th>
              { slotData["data"][0]["sewadars"].map(function(name,i){
                  return  <th colspan="1" className="border-0">{"Sewader "+(i+1)}</th>
              
              })

              }
              {/* <th colspan="1" className="border-0">Sewader 3</th>
              <th colspan="1" className="border-0">Sewader 4</th> */}
            </tr>
          
          </thead>
          <tbody>
            {slotData["data"].map(pt => <TableRow key={`page-traffic-${pt.id}`} {...pt} />)}
          </tbody>
        </Table>
      <br/>
      </Card.Body>
    </Card>
  );

};

const Cell=(props)=>{
  console.log(props.responseData["sewadars"]);
  
  const [input, setinput] = useState(props.responseData["sewadars"][props.number-1]);
  //console.log(props.dat)
  return <td colspan="1" className="border-0">
    <form onSubmit={()=>{
      setinput(input.toUpperCase());

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name":input.toUpperCase(),
          "date":props.responseData["date"],
          "sewadarNumber":props.number
        })  };
        console.log(requestOptions)
  
        fetch('https://watch-ward-backend.herokuapp.com/api/book-slot', requestOptions)
        .then(response => response.json())
        .then(data => alert(data["message"]))
     
    }}>
    <input type='text' style={{height:"30px"}} className='form-control' value={input} 
    onChange={(e)=>{
      setinput(e.target.value);
    }} 
    onSubmit={(e)=>{setinput(e.target.value);
    alert(e.value)
    console.log(e.value)
    }}
  />
  </form>
    
    </td>;
     
}

export const TransactionsTable = () => {
  const totalTransactions = transactions.length;

  const TableRow = (props) => {
    const { invoiceNumber, subscription, price, issueDate, dueDate, status } = props;
    const statusVariant = status === "Paid" ? "success"
      : status === "Due" ? "warning"
        : status === "Canceled" ? "danger" : "primary";

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {invoiceNumber}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">
            {subscription}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {issueDate}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {dueDate}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            ${parseFloat(price).toFixed(2)}
          </span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>
            {status}
          </span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
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
            {transactions.map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
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
        <td className="border-0" style={{ width: '5%' }}>
          <code>{name}</code>
        </td>
        <td className="fw-bold border-0" style={{ width: '5%' }}>
          <ul className="ps-0">
            {usage.map(u => (
              <ol key={u} className="ps-0">
                <code>{u}</code>
              </ol>
            ))}
          </ul>
        </td>
        <td className="border-0" style={{ width: '50%' }}>
          <pre className="m-0 p-0">{description}</pre>
        </td>
        <td className="border-0" style={{ width: '40%' }}>
          <pre><Card.Link href={link} target="_blank">Read More <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" /></Card.Link></pre>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="p-0">
        <Table responsive className="table-centered rounded" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          <thead className="thead-light">
            <tr>
              <th className="border-0" style={{ width: '5%' }}>Name</th>
              <th className="border-0" style={{ width: '5%' }}>Usage</th>
              <th className="border-0" style={{ width: '50%' }}>Description</th>
              <th className="border-0" style={{ width: '40%' }}>Extra</th>
            </tr>
          </thead>
          <tbody>
            {commands.map(c => <TableRow key={`command-${c.id}`} {...c} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};