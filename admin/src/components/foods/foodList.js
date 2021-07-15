import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Paper } from '@material-ui/core'
import ViewFoodNavbBar from "./viewFoods/viewFoodNavBar";
import { Scrollbars } from 'rc-scrollbars';
const Food=props=>(
    <tr>
        <td>{props.food.foodname}</td>
        <td>{props.food.fooddescription}</td>
        <td>{props.food.foodprice}</td>
        <td><a href={props.food.image ? props.food.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum"} target="_blank">
            <img src={props.food.image ? props.food.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum"} 
            style={{ height: "55px" , width :"80px"}} /></a></td>
        
    
    <td>
    <Link to={"/editfood/"+props.food._id}>edit</Link> | <a href=" " onClick={()=>{props.deleteFood(props.food._id)}}>delete</a>
    </td>
    </tr>
)

export default class FoodList extends Component {

    constructor(props){
        super(props);

        this.deleteFood=this.deleteFood.bind(this);
        this.state={foods:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/food')
        .then(response=>{
            this.setState({foods:response.data})
        })

        .catch((error)=>{
            console.log(error);
        })
    }

    deleteFood(id){
        axios.delete('http://localhost:5000/food/'+id)
        .then(res=>console.log(res.data));

        this.setState({
            foods:this.state.foods.filter(el=>el._id!==id)
        })
    }

    foodList(){
        return this.state.foods.map(currentfood=>{
            return <Food food={currentfood} deleteFood={this.deleteFood} key={currentfood._id}/>;
        })
    }

    render() {
        const paperStyle={padding :20,height:'72vh',width:1000, margin:"20px auto"}
        return (
            
            <div>
                <div><ViewFoodNavbBar/></div>
                <Paper elevation={10} style={paperStyle}>
                <h3>Food List</h3>
                <Scrollbars style={{ width: 980, height:'72vh' }}>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Food Name</th>
                        <th>Food discription</th>
                        <th>Food Price (SL Rs.)</th>
                        <th>Food Img</th>
                        <th>Update/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.foodList()}
                    </tbody>
                </table>
                </Scrollbars>
                </Paper>
            </div>
        )
    }
}
