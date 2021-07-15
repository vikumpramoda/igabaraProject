import React, { Component } from 'react'
import axios from 'axios';
import { Paper } from '@material-ui/core'
import {Button,Row} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import AddFoodNavbBar from './foodNavBar';
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import moment from 'moment';
import Swal from 'sweetalert2'
import { Scrollbars } from 'rc-scrollbars';
const Dinner=props=>(
    <tr>

            <td><a href={props.dinner.image ? props.dinner.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum"} target="_blank">
            <Image src="holder.js/180x200" roundedCircle src={props.dinner.image ? props.dinner.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum" } 
            style={{ height: "55px" , width :"80px"}} /></a></td>
        <td>{props.dinner.foodname}</td>
        <td>{props.dinner.fooddescription}</td>
        <td>{props.dinner.foodprice}</td>
       
        
    {props.isBook ? (    <td>
    <Button variant="outline-success" onClick={props.selectAndRedirect(props.dinner)}>Select</Button>{' '}
    </td>): (null)}

    </tr>
)

const DinnerList = () => {

    const [dinners, setDinners] = useState([]);
    const [isBook, setIsBook] = useState(false);
    const [input, setInput] = useState({
        slotDate:  null, exercise: null , food: null
      });

    const location = useLocation();
    const history = useHistory();
    
    useEffect(() => {

    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/dinner')
        .then(response=>{
            setDinners(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, []);

    useEffect(() => {
        setInput({ slotDate: location?.state?.slotDate, exercise: location?.state?.exercise, food: location?.state?.food });
        setIsBook(location && location.state && location.state.slotDate && location.state.exercise && location.state.food);
    }, [location]);

    const deleteFood = (id) => {
        axios.delete('http://localhost:5000/dinner/'+id)
        .then(res=>console.log(res.data));

        setDinners(dinners.filter(el=>el._id!==id));
    }

    const selectAndRedirect = () => {
        return (dinner) => {
            return () => Swal.fire({
                title: 'Confirm Food for Dinner',
                showCancelButton: true,
                confirmButtonText: `Ok`,
              }).then((result) => {
                if (result.isConfirmed) {
                    history.push({
                        pathname: '/viewLunchFoods',
                        search: '',
                        state: { slotDate:  input.slotDate, exercise: input.exercise, food: input.food, dinner: dinner}
                    });
                }
              });
        }
    }

    const dinnerList = () => {
        return dinners.map(currentdinner=>{
            return <Dinner dinner={currentdinner} deleteFood={deleteFood} key={currentdinner._id} selectAndRedirect={selectAndRedirect()} isBook={isBook}/>;
        })
    }

    const paperStyle = {padding :20,height:'72vh',width:1000, margin:"20px auto"}
    return(            <div>
        <Paper elevation={10} style={paperStyle}>
        
        <AddFoodNavbBar/>   
        <h3>Food Menu for Dinner</h3>
        <Scrollbars style={{ width: 970, height: '60vh' }}>
        <table className="table">
            <thead className="thead-light">
                <tr>
                <th>Food Img</th>
                <th>Food Name</th>
                <th>Food discription</th>
                <th>Food Price (SL Rs.)</th>
                {isBook ? (  <th>Selection</th> ): (null)}
                </tr>
            </thead>
            <tbody>
                {dinnerList()}
            </tbody>
        </table>
        </Scrollbars>
        </Paper>
    </div>);
};

export default DinnerList;





{/*
import React, { Component } from 'react'
import axios from 'axios';
import { Paper } from '@material-ui/core'
import {Button,Row} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import AddFoodNavbBar from './foodNavBar'; 
const Dinner=props=>(
    <tr>

            <td><a href={props.dinner.image ? props.dinner.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum"} target="_blank">
            <Image src="holder.js/180x200" roundedCircle src={props.dinner.image ? props.dinner.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum" } 
            style={{ height: "55px" , width :"80px"}} /></a></td>
        <td>{props.dinner.foodname}</td>
        <td>{props.dinner.fooddescription}</td>
        <td>{props.dinner.foodprice}</td>
       
        
    
    <td>
    <Button variant="outline-success">Select</Button>{' '}
    </td>
    </tr>
)

export default class DinnerList extends Component {

    constructor(props){
        super(props);

        this.deleteFood=this.deleteFood.bind(this);
        this.state={dinners:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/dinner')
        .then(response=>{
            this.setState({dinners:response.data})
        })

        .catch((error)=>{
            console.log(error);
        })
    }

    deleteFood(id){
        axios.delete('http://localhost:5000/dinner/'+id)
        .then(res=>console.log(res.data));

        this.setState({
            dinners:this.state.dinners.filter(el=>el._id!==id)
        })
    }

    foodList(){
        return this.state.dinners.map(currentfood=>{
            return <Dinner dinner={currentfood} deleteFood={this.deleteFood} key={currentfood._id}/>;
        })
    }

    render() {
        const paperStyle={padding :20,height:'72vh',width:1000, margin:"20px auto"}
        return (
            
            <div>
                <Paper elevation={10} style={paperStyle}>
                
                <AddFoodNavbBar/>   
                <h3>Food Menu for Dinner</h3>
                
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Food Img</th>
                        <th>Food Name</th>
                        <th>Food discription</th>
                        <th>Food Price (SL Rs.)</th>
                        
                        <th>Selection</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.foodList()}
                    </tbody>
                </table>
                </Paper>
            </div>
        )
    }
}
*/}

