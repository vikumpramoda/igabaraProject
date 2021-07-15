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
const Food=props=>(
    <tr>

            <td><a href={props.food.image ? props.food.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum"} target="_blank">
            <Image src="holder.js/180x200" roundedCircle src={props.food.image ? props.food.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum" } 
            style={{ height: "55px" , width :"80px"}} /></a></td>
        <td>{props.food.foodname}</td>
        <td>{props.food.fooddescription}</td>
        <td>{props.food.foodprice}</td>
       
        
    {props.isBook ? (    <td>
    <Button variant="outline-success" onClick={props.selectAndRedirect(props.food)}>Select</Button>{' '}
    </td>): (null)}

    </tr>
)

const FoodList = () => {

    const [foods, setFoods] = useState([]);
    const [isBook, setIsBook] = useState(false);
    const [input, setInput] = useState({
        slotDate:  null, exercise: null
      });

    const location = useLocation();
    const history = useHistory();
    
    useEffect(() => {

    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/food')
        .then(response=>{
            setFoods(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, []);

    useEffect(() => {
        setInput({ slotDate: location?.state?.slotDate, exercise: location?.state?.exercise });
        setIsBook(location && location.state && location.state.slotDate && location.state.exercise);
    }, [location]);

    const deleteFood = (id) => {
        axios.delete('http://localhost:5000/food/'+id)
        .then(res=>console.log(res.data));

        setFoods(foods.filter(el=>el._id!==id));
    }

    const selectAndRedirect = () => {
        return (food) => {
            return () => Swal.fire({
                title: 'Confirm Food for Breakfast',
                showCancelButton: true,
                confirmButtonText: `Ok`,
              }).then((result) => {
                if (result.isConfirmed) {
                    history.push({
                        pathname: '/viewDinnerFoods',
                        search: '',
                        state: { slotDate:  input.slotDate, exercise: input.exercise, food: food}
                    });
                }
              });
        }
    }

    const foodList = () => {
        return foods.map(currentfood=>{
            return <Food food={currentfood} deleteFood={deleteFood} key={currentfood._id} selectAndRedirect={selectAndRedirect()} isBook={isBook}/>;
        })
    }

    const paperStyle = {padding :20,height:'80vh',width:1000, margin:"20px auto"}
    return(            <div>
        
        <Paper elevation={10} style={paperStyle}>
        
        <AddFoodNavbBar/>   
        
        <h3>Food Menu for Breakfast</h3>
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
                {foodList()}
            </tbody>
        </table>
        </Scrollbars>
        </Paper>
        
    </div>);
};

export default FoodList;

// export default class FoodList extends Component {

//     constructor(props){
//         super(props);

//         this.deleteFood=this.deleteFood.bind(this);
//         this.state={foods:[]}
//     }

//     componentDidMount(){
//         axios.get('http://localhost:5000/food')
//         .then(response=>{
//             this.setState({foods:response.data})
//         })

//         .catch((error)=>{
//             console.log(error);
//         })
//     }

//     deleteFood(id){
//         axios.delete('http://localhost:5000/food/'+id)
//         .then(res=>console.log(res.data));

//         this.setState({
//             foods:this.state.foods.filter(el=>el._id!==id)
//         })
//     }

//     foodList(){
//         return this.state.foods.map(currentfood=>{
//             return <Food food={currentfood} deleteFood={this.deleteFood} key={currentfood._id}/>;
//         })
//     }

//     render() {
//         const paperStyle={padding :20,height:'72vh',width:1000, margin:"20px auto"}
//         return (
            
//             <div>
//                 <Paper elevation={10} style={paperStyle}>
                
//                 <AddFoodNavbBar/>   
//                 <h3>Food Menu for Breakfast</h3>
                
//                 <table className="table">
//                     <thead className="thead-light">
//                         <tr>
//                         <th>Food Img</th>
//                         <th>Food Name</th>
//                         <th>Food discription</th>
//                         <th>Food Price (SL Rs.)</th>
                        
//                         <th>Selection</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.foodList()}
//                     </tbody>
//                 </table>
//                 </Paper>
//             </div>
//         )
//     }
// }
