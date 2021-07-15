import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Pdf from "react-to-pdf";
import Button from 'react-bootstrap/Button';

const ref = React.createRef();

const Exercise=props=>(
    <tr>
        <td>{props.exercise.firstName}</td>
        <td>{props.exercise.lastName}</td>
        <td>{props.exercise.idNumber}</td>
        <td>{props.exercise.dob.substring(0,10)}</td>
        <td>{props.exercise.gender}</td>
        <td>{props.exercise.adults}</td>
        <td>{props.exercise.children}</td>
        <td>{props.exercise.email}</td>
        <td>{props.exercise.mobileNumber}</td>
        <td>{props.exercise.address}</td>
    <td>
    <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href=" " onClick={()=>{props.deleteExercise(props.exercise._id)}}>delete</a>
    </td>
    </tr>
)

export default class ExercisesList extends Component {

    constructor(props){
        super(props);

        this.deleteExercise=this.deleteExercise.bind(this);
        this.state={exercises:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises')
        .then(response=>{
            this.setState({exercises:response.data})
        })

        .catch((error)=>{
            console.log(error);
        })
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
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
        return (
            <div className="Post" ref={ref}>
                <h3>Guest Deatails List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>ID No</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>adults count</th>
                        <th>children count</th>
                        <th>email</th>
                        <th>mobileNumber</th>
                        <th>address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>

        <Pdf targetRef={ref} filename="Guest Deatails List.pdf">
        {({ toPdf }) => <Button variant="success" onClick={toPdf}>Download as PDF</Button>}
      </Pdf>
            </div>
        )
    }
}
