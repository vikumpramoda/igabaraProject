import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Paper } from '@material-ui/core'
import { Form,Row,Col } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default class CreateFeedback extends Component {

    constructor(props){
        super(props);

        
        this.onChangeGusetName=this.onChangeGusetName.bind(this);
        this.onChangeigabaraHouse=this.onChangeigabaraHouse.bind(this);
        this.onChangePackage=this.onChangePackage.bind(this);
        this.onChangePackagerate=this.onChangePackagerate.bind(this);
        this.onChangeBFood=this.onChangeBFood.bind(this);
        this.onChangeBRate=this.onChangeBRate.bind(this);
        this.onChangeDFood=this.onChangeDFood.bind(this);
        this.onChangeDRate=this.onChangeDRate.bind(this);
        this.onChangeLFood=this.onChangeLFood.bind(this);
        this.onChangeLRate=this.onChangeLRate.bind(this);
        this.onChangeMessage=this.onChangeMessage.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    this.state={
        
        guest:'',
        igabara:'',
        packagename:'',
        packagerate:'',
        bfood:'',
        brate:'',
        dfood:'',
        drate:'',
        lfood:'',
        lrate:'',

        message:'',
        packagenames:[],
    }
}

componentDidMount(){
    axios.get('http://localhost:5000/package/')
    .then(response=>{
        if(response.data.length>0){
          this.setState({
            packagenames:response.data.map(user=>user.packagename),
            packagename:response.data[0].packagename
          })
        }
    })

  }

        
        onChangeGusetName(e){
        this.setState({
            guest:e.target.value
        });
        }
        onChangeigabaraHouse(e){
        this.setState({
            igabara:e.target.value
        });
        }
        onChangePackage(e){
        this.setState({
            packagename:e.target.value
        });
        }
        onChangePackagerate(e){
            this.setState({
                packagerate:e.target.value
            });
            }

        onChangeBFood(e){
            this.setState({
                bfood:e.target.value
            });
            }
    
        onChangeBRate(e){
            this.setState({
                brate:e.target.value
            });
            }

        onChangeDFood(e){
            this.setState({
                dfood:e.target.value
            });
            }

        onChangeDRate(e){
            this.setState({
                drate:e.target.value
            });
            }

        onChangeLFood(e){
            this.setState({
                lfood:e.target.value
            });
            }
        
        onChangeLRate(e){
            this.setState({
                lrate:e.target.value
            });
            }
                                                      

        onChangeMessage(e){
            this.setState({
                message:e.target.value
            });
            }
        

 onSubmit(e){
     e.preventDefault();

     const exercise={
         
        guest:this.state.guest,
        igabara:this.state.igabara,
        packagename:this.state.packagename,
        packagerate:this.state.packagerate,
        bfood:this.state.bfood,
        brate:this.state.brate,
        dfood:this.state.dfood,
        drate:this.state.drate,
        lfood:this.state.lfood,
        lrate:this.state.lrate,
        message:this.state.message,
     }
     console.log(exercise);

     axios.post('http://localhost:5000/feedback/add',exercise)
         .then(res=>console.log(res.data));
         {alert('Send Feedback Successfully');}
    
 }



    render() {
        const paperStyle={padding :20,height:'100vh',width:950, margin:"20px auto"}
        const StyledRating = withStyles({
            iconFilled: {
              color: '#ff6d75',
            },
            iconHover: {
              color: '#ff3d47',
            },
          })(Rating);
          
        return (
            <div>
                <Paper elevation={10} style={paperStyle}>
                <h3>Feedback Section</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      
                      
                    </div>


                             <div className="form-group">
                                <label>Guest Name</label>
                                <input type="text"
                                
                                className="form-control"
                                value={this.state.guest}
                                onChange={this.onChangeGusetName}
                                />
                            </div>
                            <br/>

                            <div className="form-group">
                                <Row>
                                    <Col>
                                <label>Igabara House</label>
                                </Col>

                                <Col>
                                <Form.Check
                                    type="radio"
                                    label="Brown igabara"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    value="brown"
                                    color="brown"
                                    onChange={this.onChangeigabaraHouse}
                                    />
                                      <Form.Check
                                    type="radio"
                                    label="Pink igabara"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    value="pink"
                                    color="pink"
                                    onChange={this.onChangeigabaraHouse}
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Green igabara"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    value="green"
                                    color="primary"
                                    onChange={this.onChangeigabaraHouse}
                                    />
                                    </Col>
                                    </Row>
                            </div>

                            <div className="form-group">
                                <label> Selected Package </label>
                                <Row>
                                    <Col>
                                <TextField
                            id="packagename" label="Last Name" variant="outlined" fullWidth  style={{ margin: 8 }}
                            select
                            label="Package Name"
                            value={this.state.packagename}
                            onChange={this.onChangePackage}
                            
                            >
                            {this.state.packagenames.map((user) => (
                                <MenuItem  key={user}
                                value={user}>{user}
                                {user.label}
                                </MenuItem>
                            ))}
                            </TextField>  
                            </Col>
<Col>
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Package Rate</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          value={this.state.packagerate}
        onChange={this.onChangePackagerate}
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box>
      </Col>
      </Row>
                            </div>
                            <br/>

                            <div className="form-group">
<Row>     
    <Col>                                                      
                        <FormControl>
                            <InputLabel htmlFor="age-native-simple">Selected Breakf</InputLabel>
                            <Select
                            native
                            value={this.state.bfood}
                            onChange={this.onChangeBFood}
                            inputProps={{
                                name: 'age',
                                id: 'age-native-simple',
                            }}
                            >
                            <option aria-label="None" value="" />
                            <option value={"Hoppers"}>Hoppers</option>
                            <option value={"StringHoppers"}>StringHoppers</option>
                            <option value={"Noodles"}>Noodles</option>
                            </Select>
                        </FormControl>



                    <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Feedback Rate</Typography>
                    <Rating
                    name="simple-controlled1"
                    value={this.state.brate}
                    onChange={this.onChangeBRate}
                    />
                    </Box> 

    </Col>                                           



                                                                                       




<Col>
                    <FormControl>
                    <InputLabel htmlFor="age-native-simple">Selected Dinner</InputLabel>
                    <Select
                    native
                    value={this.state.dfood}
                    onChange={this.onChangeDFood}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={"BBQ"}>BBQ</option>
                    <option value={"Chicken Rice"}>Chicken Rice</option>
                    <option value={"Kottu"}>Kottu</option>
                    <option value={"Rice & Curry"}>Rice & Curry</option>
                    <option value={"Egg Rice"}>Egg Rice</option>
                    <option value={"Veg Noodles"}>Veg Noodles</option>
                    </Select>
                    </FormControl>


                    <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Feedback Rate</Typography>
                    <Rating
                    name="simple-controlled2"
                    value={this.state.drate}
                    onChange={this.onChangeDRate}
                    />
                    </Box> 
</Col>                                                                                        


<Col>                                                                                       
                    <FormControl>
                    <InputLabel htmlFor="age-native-simple">Selected Lunch</InputLabel>
                    <Select
                    native
                    value={this.state.lfood}
                    onChange={this.onChangeLFood}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={"Rice & Curry"}>Rice & Curry</option>
                    <option value={"Chicken Rice"}>Chicken Rice</option>
                    <option value={"Pasta"}>Pasta</option>
                    <option value={"Mix Rice"}>Mix Rice</option>
                    <option value={"Egg Rice"}>Egg Rice</option>
                    <option value={"Veg Noodles"}>Veg Noodles</option>
                    </Select>
                    </FormControl>



                    <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Feedback Rate</Typography>
                    <Rating
                    name="simple-controlled3"
                    value={this.state.lrate}
                    onChange={this.onChangeLRate}
                    />
                    </Box> 

</Col> 

</Row>   

                            </div>

                            <div className="form-group">
                                <label>Message </label><br></br>
                               
                                 <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    defaultValue="Default Value"
                                    variant="outlined"
                                    value={this.state.message}
                                    onChange={this.onChangeMessage}
                                    />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Send Feedback" className="btn btn-primary"/>
                             
                            </div>

                </form>

    
                </Paper>
            </div>
        )
    }
}


