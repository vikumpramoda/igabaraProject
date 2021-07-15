import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';


const Exercise=props=>(
    <tr>
        <td>{props.exercise.firstName}</td>
        <td>{props.exercise.slotGuest}</td>
        <td>{props.exercise.slotDate}</td>
       
    <td>
    <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href=" " onClick={()=>{props.deleteExercise(props.exercise._id)}}>delete</a>
    </td>
    </tr>
)

export default class GuestandDatesList extends Component {

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
        axios.all([
            axios.get(`http://localhost:5000/pinkreservations`, {
             
            }), 
            axios.get(`http://localhost:5000/pinkslots`, {
              
            })
          ])
          .then(axios.spread((data, response) => {
            this.setState({exercises:response.data,data})
            // output of req.
            console.log('data', data, 'data', data)
          }));
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/pinkslots/'+id)
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
            <div>
                <h3>Pink igarara Booked List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>User name</th>
                        <th>How Many Guest with you</th>
                        <th>Date </th>
                        <th>Update + Delete </th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
