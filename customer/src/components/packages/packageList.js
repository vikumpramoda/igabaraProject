import React, { Component } from 'react'
//import {Link} from 'react-router-dom';
import axios from 'axios';
import { Paper } from '@material-ui/core'
import Button from 'react-bootstrap/Button';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import moment from 'moment';
import Swal from 'sweetalert2'
import { Scrollbars } from 'rc-scrollbars';
const Exercise = props => (
    <tr>
        <td>{props.exercise.packageno}</td>
        <td>{props.exercise.packagename}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.packageprice}</td>
        <td>{props.exercise.packagerate}</td>

        <td>
            <div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Rateing</Typography>
                    <Rating
                        // name="read-only" value={props.feedback.packagerate}

                    />
                        </Box>
                {props.isBook ? (<Button variant="outline-success" onClick={props.selectAndRedirect(props.exercise)}>Select</Button>): (null)}
            </div>
        </td>
    </tr>
)

const PackageList = () => {

    const [exercises, setExercises] = useState([]);
    
    const [isBook, setIsBook] = useState(false);
    const [input, setInput] = useState({
        slotDate: ''
      });

    const location = useLocation();
    const history = useHistory();
    useEffect(() => {

    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/package')
            .then(response => {
                setExercises(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

 


    useEffect(() => {
        setInput({slotDate: location.state?.slotDate });
        setIsBook(location && location.state && location.state.slotDate);
    }, [location]);


    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/package/' + id)
            .then(res => console.log(res.data));
        setExercises(exercises.filter(el => el._id !== id));
    };

    const selectAndRedirect = () => {
        return (exercise) => {
            return () => Swal.fire({
                title: 'Confirm Pakage',
                showCancelButton: true,
                confirmButtonText: `Ok`,
              }).then((result) => {
                if (result.isConfirmed) {
                    history.push({
                        pathname: '/viewFoods',
                        search: '',
                        state: { slotDate:  input.slotDate, exercise: exercise}
                    });
                }
              });
        }
    }

    const exerciseList = () => {
        return exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id} selectAndRedirect={selectAndRedirect()} isBook={isBook}/>;
        })
    }

    const paperStyle = { padding: 20, height: '72vh', width: 1000, margin: "20px auto" }
    return (
        <div>
            <Paper elevation={10} style={paperStyle}>

                <h3>Package Selection</h3>
                <Scrollbars style={{ width: 970, height: '60vh' }}>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>package Number</th>
                            <th>package Name</th>
                            <th>Description</th>
                            <th>package Price(SL Rs.)</th>
                            <th>Rate(%)</th>
                            <th>Select the Package</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exerciseList()}
                    </tbody>
                </table>
                </Scrollbars>
            </Paper>
        </div>
    );
}

export default PackageList;

// export default class PackageList extends Component {

//     constructor(props) {
//         super(props);

//         this.deleteExercise = this.deleteExercise.bind(this);
//         this.state = { exercises: [] }
//     }
//     componentDidMount() {
//         axios.get('http://localhost:5000/package')
//             .then(response => {
//                 this.setState({ exercises: response.data })
//             })

//             .catch((error) => {
//                 console.log(error);
//             })
//     }



//     deleteExercise(id) {
//         axios.delete('http://localhost:5000/package/' + id)
//             .then(res => console.log(res.data));

//         this.setState({
//             exercises: this.state.exercises.filter(el => el._id !== id)
//         })
//     }

//     exerciseList() {
//         return this.state.exercises.map(currentexercise => {
//             return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
//         })
//     }

//     render() {

//         const paperStyle = { padding: 20, height: '72vh', width: 1000, margin: "20px auto" }
//         return (

//             <div>
//                 <Paper elevation={10} style={paperStyle}>

//                     <h3>Package Selection</h3>
//                     <table className="table">
//                         <thead className="thead-light">
//                             <tr>
//                                 <th>package Number</th>
//                                 <th>package Name</th>
//                                 <th>Description</th>
//                                 <th>package Price(SL Rs.)</th>
//                                 <th>Rate(%)</th>
//                                 <th>Select the Package</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.exerciseList()}
//                         </tbody>
//                     </table>
//                 </Paper>
//             </div>
//         )
//     }
// }




