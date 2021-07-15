import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Paper } from '@material-ui/core'
import { Scrollbars } from 'rc-scrollbars';
const Exercise=props=>(
    <tr>
        <td>{props.exercise.packageno}</td>
        <td>{props.exercise.packagename}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.packageprice}</td>
        <td>{props.exercise.packagerate}</td>
    
    <td>
    <Link to={"/editpackage/"+props.exercise._id}>edit</Link> | <a href=" " onClick={()=>{props.deleteExercise(props.exercise._id)}}>delete</a>
    </td>
    </tr>
)

export default class PackageList extends Component {

    constructor(props){
        super(props);

        this.deleteExercise=this.deleteExercise.bind(this);
        this.state={exercises:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/package')
        .then(response=>{
            this.setState({exercises:response.data})
        })

        .catch((error)=>{
            console.log(error);
        })
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/package/'+id)
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
        const paperStyle={padding :20,height:'72vh',width:1000, margin:"20px auto"}
        return (
            
            <div>
                <Paper elevation={10} style={paperStyle}>
                <h3>logged exercises</h3>
                <Scrollbars style={{ width: 950, height: '60vh' }}>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>package Number</th>
                        <th>package Name</th>
                        <th>Description</th>
                        <th>package Price</th>
                        <th>Rate</th>
                        <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
                </Scrollbars>
                </Paper>
            </div>
        )
    }
}
