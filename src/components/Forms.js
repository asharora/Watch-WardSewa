
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
// import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const GeneralInfoForm = () => {
  const [month, setmonth] = useState("");
  const [number, setnumber] = useState("2");
  const [response,setresponse]=useState("");
  
  var date=new Date();
  var monthArray=[];
  var months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const fetchData=() => {
    var dars;
    var mon;

    mon=month===''?date.getMonth()+1:month;
    dars=number;
    console.log("hello")
    console.log(mon);
    console.log(dars);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "member":dars,
        "month":mon
      })  };
      console.log(requestOptions)

      fetch('https://watch-ward-backend.herokuapp.com/api/create-slot', requestOptions)
      .then(response => response.json())
      .then(data => alert(data["message"]))

  }

  
  for(var m=date.getMonth()+1; m<12 ; m++){
    monthArray.push(<option value={m}>{months[m]}</option>);
  }
  
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Create New Duites</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              {/* <Form.Group id="firstName">
                <Form.Label>Month</Form.Label>
                <Form.Control required type="text" placeholder="Enter the Month" />
              </Form.Group> */}
                <Form.Group id="Month">
                <Form.Label>Month</Form.Label>
                <Form.Select  onChange={(e)=>{setmonth(e.currentTarget.value) }}>
                {
                  monthArray.map(function(name,i){
                    return name;
                  })
                }
                {/* //n0nnn
                 */}
                </Form.Select>
              </Form.Group>
          
            </Col>
            {/* <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>No of Sewadar</Form.Label>
                <Form.Control required type="text" placeholder="No of Sewadar" />
              </Form.Group>
            </Col> */}
          </Row>
          <Row className="align-items-center">
            {/* <Col md={6} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Birthday</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setBirthday}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                        placeholder="mm/dd/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col> */}
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>No of Sewadar</Form.Label>
                <Form.Select defaultValue="0" onChange={(e)=>{setnumber(e.currentTarget.value) }}>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  {/* <option value="2">Male</option> */}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          {/* <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="name@company.com" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control required type="number" placeholder="+12-345 678 910" />
              </Form.Group>
            </Col>
          </Row> */}

          {/* <h5 className="my-4">Address</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control required type="text" placeholder="Enter your home address" />
              </Form.Group>
            </Col>
            <Col sm={3} className="mb-3">
              <Form.Group id="addressNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control required type="number" placeholder="No." />
              </Form.Group>
            </Col>
          </Row>*/}
          {/* <Row> 
            <Col sm={4} className="mb-3">
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" placeholder="City" />
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Select state</Form.Label>
                <Form.Select id="state" defaultValue="0">
                  <option value="0">State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group id="zip">
                <Form.Label>ZIP</Form.Label>
                <Form.Control required type="tel" placeholder="ZIP" />
              </Form.Group>
            </Col>
          </Row> */}
          <div className="mt-3">
            <Button variant="primary" type="submit" onClick={()=>{
                fetchData()
            }}>Create New Duties</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
