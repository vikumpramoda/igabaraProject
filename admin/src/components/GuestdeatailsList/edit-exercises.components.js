import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Grid,Paper, Avatar } from '@material-ui/core'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import TextField from '@material-ui/core/TextField';
import { Form,Row,Col } from "react-bootstrap";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import 'react-phone-number-input/style.css';
import AddressInput from 'material-ui-address-input';

export default class EditGuestDetails extends Component {

    constructor(props){
        super(props);

        this.changeFirstName=this.changeFirstName.bind(this)
        this.changeLastName=this.changeLastName.bind(this)
        this.changeIdNumber=this.changeIdNumber.bind(this)
        this.ChangeDob=this.ChangeDob.bind(this)
        this.setGender=this.setGender.bind(this)
        this.changeFirstName2=this.changeFirstName2.bind(this)
        this.changeLastName2=this.changeLastName2.bind(this)
        this.changeIdNumber2=this.changeIdNumber2.bind(this)
        this.ChangeDob2=this.ChangeDob2.bind(this)
        this.setGender2=this.setGender2.bind(this)
        this.NoOfAdults=this.NoOfAdults.bind(this)
        this.NoOfChildren=this.NoOfChildren.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changeMobileNumber=this.changeMobileNumber.bind(this)
        this.handleAddAddress=this.handleAddAddress.bind(this)
        this.handleChangeAddress=this.handleChangeAddress.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

    this.state={
        firstName:'',
        lastName:'',
        idNumber:'',
        dob: new Date(),
        gender:"",
        firstName2:'',
        lastName2:'',
        idNumber2:'',
        dob2: new Date(),
        gender2:"",
        adults:"",
        children:"",
        email:'',
        mobileNumber:'',
        
        address: '',
        addresses: [],
        firstNames:[]
    }
}

        componentDidMount(){

            axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
            .then(response=>{
                this.setState({
                    
                    

                    firstName:response.data.firstName,
                    lastName:response.data.lastName,
                    idNumber:response.data.idNumber,
                    dob:response.data.dob,
                    gender:response.data.gender,
                    firstName2:response.data.firstName2,
                    lastName2:response.data.lastName2,
                    idNumber2:response.data.idNumber2,
                    dob2:response.data.dob2,
                    gender2:response.data.gender2,
                    adults:response.data.adults,
                    children:response.data.children,
                    email:response.data.email,
                    mobileNumber:response.data.mobileNumber,
                    address:response.data.address,
                    addresses:response.data.addresses,

                })
            })
            .catch(function(error){
                console.log(error);
            })

          
          .then(Response=>{
              if(Response.data.length>0){
                this.setState({
                    firstNames:Response.data.map(user=>user.firstName),
                })
              }
          })

        }

     
handleAddAddress = address => {
    this.setState({
        addresses: [...this.state.addresses, address]
    })
}

handleChangeAddress = addressIndex => {
    this.setState({
        address: addressIndex
    })
}



changeFirstName(event){
    this.setState({
        firstName:event.target.value
    })
}

changeLastName(event){
    this.setState({
        lastName:event.target.value
    })
}

changeIdNumber(event){
    this.setState({
        idNumber:event.target.value
    })
}

ChangeDob(dob){
    this.setState({
    dob: dob
    });
    }
   
setGender(event){
    this.setState({
        gender:event.target.value
    })
}

changeFirstName2(event){
    this.setState({
        firstName2:event.target.value
    })
}

changeLastName2(event){
    this.setState({
        lastName2:event.target.value
    })
}

changeIdNumber2(event){
    this.setState({
        idNumber2:event.target.value
    })
}

ChangeDob2(dob2){
    this.setState({
    dob2: dob2
    });
    }
   
setGender2(event){
    this.setState({
        gender2:event.target.value
    })
}

NoOfAdults(event){
    this.setState({
        adults:event.target.value
    })
}

NoOfChildren(event){
    this.setState({
        children:event.target.value
    })
}


changeEmail(event){
    this.setState({
        email:event.target.value
    })
}

changeMobileNumber(event){
    console.log(event.target.value)
    this.setState({
        mobileNumber:event.target.value
    })
}

changePassword(event){
    this.setState({
        password:event.target.value
    })
}

 onSubmit(e){
     e.preventDefault();

     const guest={
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        idNumber:this.state.idNumber,
        dob:this.state.dob,
        gender:this.state.gender,
        firstName2:this.state.firstName2,
        lastName2:this.state.lastName2,
        idNumber2:this.state.idNumber2,
        dob2:this.state.dob2,
        gender2:this.state.gender2,
        adults:this.state.adults,
        children:this.state.children,
        email:this.state.email,
        mobileNumber:this.state.mobileNumber,
        address:this.state.address,
        addresses:this.state.addresses,
     }
     console.log(guest);

     axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id,guest)
         .then(res=>console.log(res.data));

     //window.location='/';
 }



    render() {
        const paperStyle={padding :20,height:'170vh',width:1000, margin:"20px auto"}
            const avatarStyle={backgroundColor:'#1bbd7e'}
        return (
            
                <div>
                    <Grid>
                    <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                    <Avatar style={avatarStyle}><AssignmentIndIcon/></Avatar>
                    <h2> Edit Guest Deatails</h2>
                    </Grid>
    
                    <div className="container">
                        <div>
                            <Form onSubmit={this.onSubmit}>
                            <label> 1 Adult </label>
                            

                        <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.firstName}
                        onChange={this.changeFirstName}>

                            {
                                this.state.firstNames.map(function(user){
                                    return<option
                                    key={user}
                                    value={user}>{user}
                                    </option>
                                })
                            }
                        </select>
    
                            <TextField id="lastName" label="Last Name" variant="outlined" fullWidth  style={{ margin: 8 }}
                            onChange={this.changeLastName}
                            value={this.state.lastName}/>
    
                            <TextField id="idNumber" label="ID NO" variant="outlined" fullWidth  style={{ margin: 8 }}
                            onChange={this.changeIdNumber}
                            value={this.state.idNumber}
                            />

                            
    
    
    
                                    <div className="form-group">
                                    <label> </label>
                                    </div>          
    
    <Row>
    <Col>
    
                                    <div className="form-group">
                                    <label>DOB : </label>
                                    <div>
                                        <DatePicker
                                        selected={this.state.dob}
                                        onChange={this.ChangeDob}
                                        />
                                    </div>
                                    </div>
    </Col>                               
                                    
                                   
    <Col>
                                    <label> Gender : </label>
                                                                    <Form.Check
                                                                    type="radio"
                                                                    label="Male"
                                                                    name="formHorizontalRadios"
                                                                    id="formHorizontalRadios1"
                                                                    value="male"
                                                                    color="primary"
                                                                    onChange={this.setGender}
                                                                    />
                                                                    <Form.Check
                                                                    type="radio"
                                                                    label="Female"
                                                                    name="formHorizontalRadios"
                                                                    id="formHorizontalRadios2"
                                                                    value="female"
                                                                    color="primary"
                                                                    onChange={this.setGender}
                                                                    />
                </Col>
    </Row>  
    

    <label> 2 Adult </label>
                            <TextField id="firstName" label="First Name" variant="outlined" fullWidth  style={{ margin: 8 }}
                            onChange={this.changeFirstName2}
                            value={this.state.firstName2}/>
    
                            <TextField id="lastName" label="Last Name" variant="outlined" fullWidth  style={{ margin: 8 }}
                            onChange={this.changeLastName2}
                            value={this.state.lastName2}/>
    
                            <TextField id="idNumber" label="ID NO" variant="outlined" fullWidth  style={{ margin: 8 }}
                            onChange={this.changeIdNumber2}
                            value={this.state.idNumber2}
                            />

                            
    
    
    
                                    <div className="form-group">
                                    <label> </label>
                                    </div>          
    
    <Row>
    <Col>
    
                                    <div className="form-group">
                                    <label>DOB : </label>
                                    <div>
                                        <DatePicker
                                        selected={this.state.dob2}
                                        onChange={this.ChangeDob2}
                                        />
                                    </div>
                                    </div>
    </Col>                               
                                    
                                   
    <Col>
                                    <label> Gender : </label>
                                                                    <Form.Check
                                                                    type="radio"
                                                                    label="Male"
                                                                    name="formHorizontalRadios"
                                                                    id="formHorizontalRadios1"
                                                                    value="male"
                                                                    color="primary"
                                                                    onChange={this.setGender2}
                                                                    />
                                                                    <Form.Check
                                                                    type="radio"
                                                                    label="Female"
                                                                    name="formHorizontalRadios"
                                                                    id="formHorizontalRadios2"
                                                                    value="female"
                                                                    color="primary"
                                                                    onChange={this.setGender2}
                                                                    />
                </Col>
    </Row>  
    
    
                                    <div className="form-group">
                                    <label> </label>
                                    </div>          
    
    <Row>                                                             
    
    <Col>
                                   
                            
    
                                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                                    number of Adults  : 
                                    </InputLabel>
                                    <NativeSelect
                                    value={this.state.adults}
                                    onChange={this.NoOfAdults}
                                    inputProps={{
                                        name: 'Adults ',
                                        id: 'age-native-label-placeholder',
                                    }}
                                    >
                                    <option value="1">one</option>
                                    <option value={2}>two</option>
                                    <option value={3}>Three</option>
                                    <option value={4}>four</option>
                                    </NativeSelect>
    
     </Col>                                                     
     <Col>                       
                                    
    
                                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                                    number of Childern  :
                                    </InputLabel>
                                    <NativeSelect
                                    value={this.state.children}
                                    onChange={this.NoOfChildren}
                                    inputProps={{
                                        name: 'Childern',
                                        id: 'age-native-label-placeholder',
                                    }}
                                    >
                                    <option value=" ">none</option>
                                    <option value={1}>one</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>three</option>
                                    <option value={4}>Four</option>
                                    </NativeSelect>
    </Col>                                  
    </Row>   
                                    <div className="form-group">
                                    <label>Contact Deatails : </label>
                                    </div>                  
    <Row>
         <Col>                 
    
                            <TextField id="Email" label="E-mail" variant="outlined" fullWidth  style={{ margin: 8 }}
                             onChange={this.changeEmail}
                             value={this.state.email}
                            />
    
    
    
        </Col>    
        <Col>
                            <PhoneInput
                            placeholder="Enter phone number"
                            value={this.state.mobileNumber}
                            onChange={this.changeMobileNumber}/>
        </Col>
    
    </Row>           
                                                             
                    <AddressInput
                    onAdd={this.handleAddAddress}
                    onChange={this.handleChangeAddress}
                    value={this.state.address}
                    allAddresses={this.state.addresses}
                />
                                    <div className="form-group">
                                    <label> </label>
                                    </div>  
                                <input type='Submit' className='btn btn-danger btn-block' value='Submit'/>
                           </Form>

                                    <div className="form-group">
                                    <label> </label>
                                    </div>  
                           <input type='update' className='btn btn-warning btn-block' value='Update'/>
                        </div>
                    </div>
            </Paper>
            </Grid>
                </div>
        )
    }
}
