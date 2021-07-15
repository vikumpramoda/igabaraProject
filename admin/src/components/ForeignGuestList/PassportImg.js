import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Pdf from "react-to-pdf";
import Button from 'react-bootstrap/Button';
import { Paper } from '@material-ui/core';
import { Table } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
const ref = React.createRef();

const Exercise=props=>(
    <tr>

<td>
    <Link to={"/update/"+props.exercise._id}>edit</Link> | <a href=" " onClick={()=>{props.deleteExercise(props.exercise._id)}}>delete</a>
    </td>

        <td>{props.exercise.firstName}</td>
       
        <td>{props.exercise.firstName2}</td>
        
        <td><a href={props.exercise.image ? props.exercise.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum"} target="_blank">
            <Image src="holder.js/180x200" roundedCircle src={props.exercise.image ? props.exercise.image : "CLOUDINARY_URL=cloudinary://684345139831131:sLQayiybwzCaJyAo0M7W4bBt5ts@vikum" } 
            style={{ height: "55px" , width :"80px"}} /></a></td>
       
    
    </tr>
)

export default class ForeignGuestList extends Component {

    constructor(props){
        super(props);

        this.deleteExercise=this.deleteExercise.bind(this);
        this.state={exercises:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/foreign')
        .then(response=>{
            this.setState({exercises:response.data})
        })

        .catch((error)=>{
            console.log(error);
        })
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/foreign/'+id)
        .then(res=>console.log(res.data));

        this.setState({
            exercises:this.state.exercises.filter(el=>el._id!==id)
        })
    }

    exerciseList(){
        return this.state.exercises.map(currentexercise=>{
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
    }

    render() {
        const paperStyle={padding :20,height:'90vh',width:1400, margin:"20px auto", backgroundColor:'white'}
        return (
            <div className="Post" ref={ref}>
                      

                 <Paper elevation={10} style={paperStyle}>
                <h3>Guest Deatails List</h3>
               
                <Table  responsive>
                    <thead className="thead-light">
                        <tr>
                        <th>Update</th>
                        <th>First Name</th>
                       
                        <th> 2 First Name</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </Table>
                
                
        <Pdf targetRef={ref} filename="Guest Deatails List.pdf">
        {({ toPdf }) => <Button variant="success" onClick={toPdf}>Download as PDF</Button>}
      </Pdf>
      
      </Paper>
            </div>
        )
    }
}
