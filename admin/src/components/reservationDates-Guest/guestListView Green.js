import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Pdf from "react-to-pdf";
import Button from 'react-bootstrap/Button';
import { Paper } from '@material-ui/core';
import { Table } from 'react-bootstrap';
import { Scrollbars } from 'rc-scrollbars';
const ref = React.createRef();

const Exercise=props=>(
    <tr>
        <td>{props.exercise.slots && props.exercise.slots.slotDate }</td>
        <td>{props.exercise.slots && props.exercise.slots.slotGuest }</td>
        <td>{props.exercise.firstName + props.exercise.lastName}</td>
        
        <td>{props.exercise.email}</td>   
       
    <td>
    <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href=" " onClick={()=>{props.deleteExercise(props.exercise._id)}}>delete</a>
    </td>
    </tr>
)

export default class GreenGuestandDatesList extends Component {

    constructor(props){
        super(props);

        this.deleteExercise=this.deleteExercise.bind(this);
        this.state={exercises:[]}
    }

   /* componentDidMount(){
        axios.get('http://localhost:5000/reservation')
        .then(response=>{
            this.setState({exercises:response.data})
        })    
    }*/

    componentDidMount(){
        axios.get('http://localhost:5000/greenreservations/')
        .then(response=>{
            this.setState({exercises:response.data})
        })    
    }


    deleteExercise(id){
        axios.delete('http://localhost:5000/greenslot/'+id)
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
        const paperStyle={padding :20,height:'76vh',width:1350, margin:"20px auto", backgroundColor:'white'}
        return (
            <div className="Post" ref={ref}>
                <Paper elevation={10} style={paperStyle}>
                <h3>Green igarara Booking Report</h3>
                <Scrollbars style={{ width: 1300, height: '70vh' }}>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Date </th>
                        <th>How Many Guest with you</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Update + Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
                <Pdf targetRef={ref} filename="Guest Deatails List.pdf">
        {({ toPdf }) => <Button variant="success" onClick={toPdf}>Download as PDF</Button>}
      </Pdf>
      </Scrollbars>
                </Paper>
            </div>
        )
    }
}
