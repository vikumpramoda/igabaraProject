import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Paper } from '@material-ui/core'
export default class EditPackages extends Component {

    constructor(props){
        super(props);

        this.onChangePackageno=this.onChangePackageno.bind(this);
        this.onChangePackagename=this.onChangePackagename.bind(this);
        this.onChangePackageDescription=this.onChangePackageDescription.bind(this);
        this.onChangePackageprice=this.onChangePackageprice.bind(this);
        this.onChangePackagerate=this.onChangePackagerate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    this.state={
        packageno:'',
        packagename:'',
        description:'',
        packageprice:'',
        packagerate:'',
        packages:[]
    }
}

        componentDidMount(){

            axios.get('http://localhost:5000/package/'+this.props.match.params.id)
            .then(response=>{
                this.setState({
                    packageno:response.data.packageno,
                    packagename:response.data.packagename,
                    description:response.data.description,
                    packageprice:response.data.packageprice,
                    packagerate:response.data.packagerate

                })
            })
            .catch(function(error){
                console.log(error);
            })

          axios.get('http://localhost:5000/packageno')
          .then(Response=>{
              if(Response.data.length>0){
                this.setState({
                    packagenos:Response.data.map(user=>user.packageno),
                })
              }
          })

        }

        onChangePackageno(e){
        this.setState({
        packageno:e.target.value
        });
        }
        onChangePackagename(e){
        this.setState({
        packagename:e.target.value
        });
        }
        onChangePackageDescription(e){
        this.setState({
        description:e.target.value
        });
        }
        onChangePackageprice(e){
        this.setState({
        packageprice:e.target.value
        });
        }
        onChangePackagerate(e){
        this.setState({
        packagerate:e.target.value
        });
        }

 onSubmit(e){
     e.preventDefault();

     const exercise={
         packageno:this.state.packageno,
         packagename:this.state.packagename,
         description:this.state.description,
         packageprice:this.state.packageprice,
         packagerate:this.state.packagerate,
     }
     console.log(exercise);

     axios.post('http://localhost:5000/package/update/'+this.props.match.params.id,exercise)
         .then(res=>console.log(res.data));

     window.location='/packagelist';
 }



    render() {
        const paperStyle={padding :20,height:'72vh',width:1000, margin:"20px auto"}
        return (
            <div>
                <Paper elevation={10} style={paperStyle}>
                <h3> Update Package Deatails </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> </label>
                       
                    </div>

                             <div className="form-group">
                                <label>Package Name:</label>
                                <input type="text"
                                required
                                className="form-control"
                                value={this.state.packagename}
                                onChange={this.onChangePackagename}
                                />
                            </div>

                            <div className="form-group">
                                <label>Packege Description:</label>
                                <input type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangePackageDescription}
                                />
                            </div>

                            <div className="form-group">
                                <label>Package Price (in SL RS): </label>
                                <input 
                                type="text"
                                className="form-control"
                                value={this.state.packageprice}
                                onChange={this.onChangePackageprice}
                                />
                            </div>

                            <div className="form-group">
                                <label>Discount Rate : </label>
                                <input 
                                type="text"
                                className="form-control"
                                value={this.state.packagerate}
                                onChange={this.onChangePackagerate}
                                />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Update Package" className="btn btn-primary"/>
                            </div>

                </form>
                </Paper>
            </div>
        )
    }
}
