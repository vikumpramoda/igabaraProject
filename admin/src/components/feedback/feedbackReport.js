import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Paper } from '@material-ui/core'
import { Scrollbars } from 'rc-scrollbars';
const Feedback=props=>(
    <tr>
        <td>{props.feedback.guest}</td>
        <td>{props.feedback.igabara}</td>
        <td>{props.feedback.packagename}</td>
        <td>{props.feedback.packagerate}</td>
        <td>{props.feedback.food}</td>
        <td>{props.feedback.message}</td>
    
    <td>
    <Link to={"/editpackage/"+props.feedback._id}>edit</Link> | <a href=" " onClick={()=>{props.deleteFeedback(props.feedback._id)}}>delete</a>
    </td>
    </tr>
)

export default class FeedbackReport extends Component {

    constructor(props){
        super(props);

        this.deleteFeedback=this.deleteFeedback.bind(this);
        this.state={feedbacks:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/feedback')
        .then(response=>{
            this.setState({feedbacks:response.data})
        })

        .catch((error)=>{
            console.log(error);
        })
    }

    deleteFeedback(id){
        axios.delete('http://localhost:5000/feedback/'+id)
        .then(res=>console.log(res.data));

        this.setState({
            feedbacks:this.state.feedbacks.filter(el=>el._id!==id)
        })
    }

    feedbackList(){
        return this.state.feedbacks.map(currentfeedback=>{
            return <Feedback feedback={currentfeedback} deleteFeedback={this.deleteFeedback} key={currentfeedback._id}/>;
        })
    }

    render() {
        const paperStyle={padding :20,height:'72vh',width:1000, margin:"20px auto"}
        return (
            
            <div>
                <Paper elevation={10} style={paperStyle}>
                <h3>Feedback Report</h3>
                <Scrollbars style={{ width: 950, height: '72vh' }}>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Guest Name</th>
                        <th>House Name</th>
                        <th>Package Name</th>
                        <th>package Rate</th>
                        <th>Food</th>
                        <th>Message</th>
                        <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.feedbackList()}
                    </tbody>
                </table>
                </Scrollbars>
                </Paper>
            </div>
        )
    }
}
