
import Form from 'react-bootstrap/Form';
//import '../calendar/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Paper } from '@material-ui/core'
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import { Scrollbars } from 'rc-scrollbars';
const ref = React.createRef();


const Creditcards = () => {


    const [subTotal, setSubTotal] = useState('');
    const [subTotalfoods, setSubTotalfoods] = useState('');
    const [subTotalpackage, setSubTotalpackage] = useState('');
    const [subTotalpackageDis, setSubTotalpackageDis] = useState('');
    const [input, setInput] = useState({ slotDate: null, exercise: null, food: null });
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const location = useLocation();
    let total = 0;
    let totalfoods = 0;
    let totalpackage = 0;
    let totalpackageDis = 0;
    useEffect(() => {
        setInput({ ...input, ...(location?.state) });
    }, [location]);

    

    useEffect(() => {

        total = (location.state.exercise.packageprice-(location.state.exercise.packageprice * location.state.exercise.packagerate/100)) 
         +location.state.food.foodprice
        + location.state.dinner.foodprice
         + location.state.lunch.foodprice;
        setSubTotal(total)
    },[total]);

    useEffect(() => {

        totalfoods = 
         location.state.food.foodprice
        + location.state.dinner.foodprice
         + location.state.lunch.foodprice;
        setSubTotalfoods(totalfoods)
    },[totalfoods]);


    useEffect(() => {

        totalpackage = (location.state.exercise.packageprice-(location.state.exercise.packageprice * location.state.exercise.packagerate/100)) 
         
        setSubTotalpackage(totalpackage)
    },[totalpackage]);

    useEffect(() => {

        totalpackageDis = (location.state.exercise.packageprice * location.state.exercise.packagerate/100)
         
        setSubTotalpackageDis(totalpackageDis)
    },[totalpackageDis]);
    const paperStyle = { padding: 20, height: '120vh', width: 1005, margin: "20px auto", backgroundColor: '#ff9933' }
    return (


        <div>
            <Paper elevation={10} style={paperStyle}>
            <Scrollbars style={{ width: 985, height: '110vh' }}>
                <div><h1>Total Bill</h1></div>
                <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableRow>
                        <TableCell>Booking Date</TableCell>
                        <TableCell  align="right"><div>{location?.state?.slotDate}</div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Package Name</TableCell>
                        <TableCell><div>{location?.state?.exercise?.packagename}</div></TableCell>
                    </TableRow>
                     <TableRow>
                     <TableCell>Package Description</TableCell>
                        <TableCell><div>{location?.state?.exercise?.description}</div></TableCell>
                   </TableRow>
                    
                    <TableRow>
                        <TableCell>Package Price</TableCell>
                        <TableCell  align="right"><div>{location?.state?.exercise?.packageprice}</div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Package Rate</TableCell>
                        <TableCell  align="right"><div>{location?.state?.exercise?.packagerate}%</div></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Package Discount</TableCell>
                        <TableCell  align="right"><div>{subTotalpackageDis}</div></TableCell>
                    </TableRow>

                    <TableCell></TableCell>
                <TableCell>
                  <strong>The final amount of Package</strong>
                </TableCell>
                <TableCell align="right">
                  {subTotalpackage}
                </TableCell>
             
                    
                    <TableRow>
                        <TableCell>BREAKFAST</TableCell>
                        <TableCell><div>{location?.state?.food?.foodname}</div>
                        <div>({location?.state?.food?.fooddescription})</div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Breakfast Price</TableCell>
                        <TableCell align="right"><div>{location?.state?.food?.foodprice}</div></TableCell>
                    </TableRow>

                   
                    <TableRow>
                        <TableCell>DINNER</TableCell>
                        <TableCell><div>{location?.state?.dinner?.foodname}</div>
                        <div>({location?.state?.dinner?.fooddescription})</div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dinner Price</TableCell>
                        <TableCell align="right"><div>{location?.state?.dinner?.foodprice}</div></TableCell>
                    </TableRow>

                   
                    <TableRow>
                        <TableCell>LUNCH</TableCell>
                        <TableCell><div>{location?.state?.lunch?.foodname}</div>
                        <div>({location?.state?.lunch?.fooddescription})</div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Lunch Price</TableCell>
                        <TableCell align="right"><div>{location?.state?.lunch?.foodprice}</div></TableCell>
                    </TableRow>



                    <TableCell></TableCell>
                <TableCell>
                  <strong>The final amount of foods</strong>
                </TableCell>
                <TableCell align="right">
                  {subTotalfoods}
                </TableCell>





                    <TableRow>
                        <Col></Col>
                        
                    </TableRow>

                    <TableRow>
               
                <TableCell></TableCell>
                <TableCell>
                <h2>Total Payment</h2>
                </TableCell>
                <TableCell align="right">
                 <h2> {subTotal}</h2>
                </TableCell>
              </TableRow>

                    </Table>
                </TableContainer>



                <br></br><br></br><br></br><br></br><br></br>
                <h2>Online Payment Form</h2>
                <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={name}
                    number={number}
                />
                <br></br><br></br>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Normal text"
                                type="tel"
                                name="number"
                                val={number}
                                placeholder="enter Number"
                                onChange={e => setNumber(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                            />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Normal text"
                                type="tel"
                                name="name"
                                val={name}
                                placeholder="enter name"
                                onChange={e => setName(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                            />
                        </Col>
                    </Row>

                    <br></br>

                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Normal text"
                                type="tel"
                                name="expiry"
                                val={expiry}
                                placeholder="enter expiry"
                                onChange={e => setExpiry(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                            />
                        </Col>

                        <Col>
                            <Form.Control type="text" placeholder="Normal text"
                                type="tel"
                                name="cvc"
                                val={cvc}
                                placeholder="enter cvc"
                                onChange={e => setCvc(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                            />
                        </Col>
                    </Row>
                </Form>
                <br></br>
                <Link to=''><Button className='btn btn-success btn-block' > Pay with Credit Card </Button>{' '}</Link>
                </Scrollbars>
            </Paper>
        </div>
    )
}
export default Creditcards;