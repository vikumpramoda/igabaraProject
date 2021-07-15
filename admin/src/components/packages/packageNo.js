import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Paper } from '@material-ui/core';
export default class CreatePackageno extends Component {

    constructor(props){
        super(props);

        this.onChangePackageno=this.onChangePackageno.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    this.state={
        packageno:'',
       
    }
}

    onChangePackageno(e){
    this.setState({
        packageno:e.target.value
    });
    }


    onSubmit(e){
        e.preventDefault();
   
        const packageNo={
            packageno:this.state.packageno
        }
        console.log(packageNo);  

        axios.post('http://localhost:5000/packageno/add',packageNo)
         .then(res=>console.log(res.data));
        
        this.setState({
            packageno:''
        })

        window.location='/packageDis';
    }
   

    render() {
        const paperStyle={padding :20,height:'72vh',width:1000, margin:"20px auto"}
        return (
            <div>
                  <Paper elevation={10} style={paperStyle}>
                <h3>
                    Create new Package
                </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Package Number</label>
                        <input
                        type="text"
                        required
                        className="form-control"
                        value={this.state.packageno}
                        onChange={this.onChangePackageno}
                        />

                    </div>

                    <div className="form-group">
                        <input
                        type="Submit"
                        value="Create NEW Package"
                        className="btn btn-primary"/>
                    </div>
                    <div className="form-group">
                       
                         <Link to ='packageDis'><Button className='btn btn-primary'  >Update Guest Deatails </Button>{' '}</Link>
                    </div>
                </form>
                </Paper>
            </div>
        )
    }
}
