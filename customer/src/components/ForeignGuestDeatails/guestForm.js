import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Grid,Paper, Avatar } from '@material-ui/core'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import 'react-phone-number-input/style.css'
import TextField from '@material-ui/core/TextField';
import { Form,Row,Col } from "react-bootstrap";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import 'react-phone-number-input/style.css';
import AddressInput from 'material-ui-address-input';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from "./Switch";
import swal from 'sweetalert';
import Swal from 'sweetalert2';

let imgname = '';
let imgname2 = '';
let addvalid = false;
let sub = false;
export default class ForeignGuestDetails extends Component {

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
        this.onChangeImage=this.onChangeImage.bind(this);
        this.uploadImage = this.uploadImage.bind(this)
        this.showImage = this.showImage.bind(this)
        this.RemoveImage = this.RemoveImage.bind(this)
        this.showHelp = this.showHelp.bind(this)
        this.onChangeImage2=this.onChangeImage2.bind(this);
        this.uploadImage2 = this.uploadImage2.bind(this)
        this.showImage2 = this.showImage2.bind(this)
        this.RemoveImage2 = this.RemoveImage2.bind(this)
        this.showHelp2 = this.showHelp2.bind(this)
        

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
        firstNames:[],

        image: null,
        photo: null,
        NewUpload: false,
        uploadedimg: null,
        uploadPercentage: 0,

        image2: null,
        photo2: null,
        NewUpload2: false,
        uploadedimg2: null,
        uploadPercentage2: 0
        
        
    }
}

componentDidMount(){
    axios.get('http://localhost:5000/reservations/')
    .then(response=>{
        if(response.data.length>0){
          this.setState({
            firstNames:response.data.map(user=>user.firstName),
            firstName:response.data[0].firstName
          })
        }
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


onChangeImage(e) {

    try {
        imgname = e.target.files[0].name;

    } catch (error) {

        swal({
            title: "Please Select an Image",
            text: "You have not Select an Image!",
            icon: "error",
            button: "ok",
        });


    }



    this.setState({


        photo: e.target.files[0],
        NewUpload: true



    });



}

  // handle image de attach
RemoveImage() {

if (this.state.image) {

    swal({
        title: "Are you sure?",
        text: "Attached image will be De-Attached. Do You wish to Continue?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((stat) => {
            if (stat) {


                this.state.image = null;

                swal("Image De-Attached Successfully!", {
                    title: "Image De-Attached Successfully!",
                    text: 'To Re-Attach Press View or Attach',
                    icon: "info",
                });

            } else {
                swal("Image De-Attached Cancelled!", {
                    title: "Image De-Attached Cancelled!",
                    text: 'Your Image Attachment is Safe',
                    icon: "success",
                });
            }
        });

} else {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No Attachment Found',
        text: "No Attachment is  found for this product",
        showConfirmButton: false,
        timer: 3000
    })


}
}

//handle image upload

async uploadImage() {


    if (imgname) {

        if (this.state.NewUpload) {


            let Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: this.state.uploadPercentage,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
                onBeforeOpen: () => {
                    Swal.showLoading()
                }


            })
            console.log("percentage ", this.state.uploadPercentage);


            this.state.NewUpload = false;

            const formData = new FormData();

            formData.append('photo', this.state.photo);




            await axios.post('http://localhost:5000/foreign/upload', formData, {

                
                onUploadProgress: ProgressEvent => {

                    this.state.uploadPercentage = 100 - parseInt((Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)))

                    console.log("percentage inside ", this.state.uploadPercentage);

                    Toast.fire({
                        icon: 'info',
                        title: 'Uploading on Progress.',
                        text: 'Please wait a moment',
                       

                    })

                    setTimeout(() => this.state.uploadPercentage = 0, 1000)


                }




            }).then((res) => {

                console.log("response is: ", res.data);

                if (res.data.URL) {

                    Swal.fire({
                        title: 'Confirm',
                        text: "Do You Want To Set This As the Food Image?",

                        imageUrl: res.data.URL,

                        imageHeight: 400,
                        showCancelButton: true,
                        confirmButtonText: 'Yes',
                        cancelButtonText: 'No,cancel',
                        reverseButtons: true,
                        preConfirm: (e) => {

                            swal({
                                title: "Image Attached",
                                text: "This Image File is Attached to Your Product",
                                icon: "success",

                                dangerMode: false,
                            })
                            this.state.image = res.data.URL;

                            console.log(this.state.image);

                        }



                    }).then((e) => {


                        this.state.uploadedimg = res.data.URL;

                        console.log("Uploaded but Cancel: ", this.state.uploadedimg);








                    })

                } if (res.data.msg) {
                    swal({
                        title: "No File is Selected",
                        text: res.data.msg,
                        icon: "error",

                        dangerMode: true,
                    })


                }

            }).catch((err => {

                

               axios.get('http://localhost:5000/login/',
               {

                    
                }
                ).then((res) => {


                    Swal.fire({
                        title: "Upload Interrupted",
                        text: "Selected File is not an Image or in unsupported file format or Upload is interrupted Due to Server Error, Upload failed! ",
                        icon: "error",
                        // buttons: true,
                        dangerMode: true,
                    })

                }).catch((err) => {

                Swal.fire({
                    title: "Upload Interrupted",
                    text: "Selected File is not an Image or in unsupported file format or Upload is interrupted Due to Server Error, Upload failed! ",
                    icon: "error",

                    dangerMode: true,
                })

            })


            }))


        } else {




            if (!this.state.NewUpload) {



                swal({
                    title: "Existing Upload",
                    text: "This File is Already Uploaded",
                    icon: "info",

                    dangerMode: false,
                })
            }

        }
    } else {
        swal({
            title: "No File is Selected",
            text: "No file is selected Please Select a File First!",
            icon: "error",

            dangerMode: true,
        })

    }


}

showImage() {

    let go = 0;

    if (this.state.image) {

        Swal.fire({
            title: 'Product Picture',


            imageUrl: this.state.image,
            icon: "success",

            text: "This Image is Attached to your Product",

            imageHeight: 400,

            confirmButtonText: 'Continue',

            reverseButtons: true,
        })

        addvalid = true;






    } else if (this.state.uploadedimg) {

        Swal.fire({
            title: 'Image Not Attached',
            html: "Uploaded Image is <b>not attached</b> to the Product,<br/>Do you wish to <b>Attach</b> this as the Product Image?",

            imageUrl: this.state.uploadedimg,
            icon: "question",

            imageHeight: 400,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No,cancel',
            reverseButtons: true,
            preConfirm: (e) => {
                this.state.image = this.state.uploadedimg;

                console.log(this.state.image);





                swal({
                    title: "Image Attached",
                    text: "This Image File is Attached to Your Product",
                    icon: "success",

                    dangerMode: false,
                })

                addvalid = true;



            }





        })
        addvalid = true;





    } else {

        if (!sub) {
            swal({
                title: "No File is Uploaded",
                text: "No file is Uploaded, First Upload an Image file",
                icon: "error",

                dangerMode: true,
            })

        } else {

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-danger',
                    cancelButton: 'btn btn-success',
                    margin: '50px'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'No file is Uploaded',
                text: "Do you wish to continue without uploading a Product Image?",

                imageUrl: this.state.uploadedimg,
                icon: "warning",

                imageHeight: 400,
                showCancelButton: true,
                confirmButtonText: 'Continue',
                cancelButtonText: 'Cancel',
                reverseButtons: true,

                preConfirm: (e) => {





                    go = 1;
                    console.log("Go dont need file");

                    addvalid = true;



                }





            })

            if (go == 0) {

                console.log("dont go");


                addvalid = false;
            }
        }

    }


}

//show help tag for image upload
showHelp() {
    Swal.fire({
        title: '<strong>File Upload Details</strong>',
        icon: 'info',
        html:
            '<div style="text-align:justify;"><b>1. </b>   Upload file type should be in Image Format <br/><b>2. </b>  Select file to Upload by Pressing <b>Browse</b> button.<br/><b>3. </b>  To Upload the file Press <b> Upload Image </b> button. <br/><b>4. </b>   If you want to attach file to product Press <b>yes</b><br/><b>5. </b>  To view or attach the uploaded image to the product press <b>View or Attach Image</b></div>',

        showCloseButton: true,

        focusConfirm: false,
        confirmButtonText:
            '<i class="fas fa-check-circle"></i> Got it',


    })
}

// ////////////////// 2     Img   Passport-2

onChangeImage2(e) {

    try {
        imgname2 = e.target.files[0].name;

    } catch (error) {

        swal({
            title: "Please Select an Image",
            text: "You have not Select an Image!",
            icon: "error",
            button: "ok",
        });


    }



    this.setState({


        photo2: e.target.files[0],
        NewUpload2: true



    });



}

  // handle image de attach
RemoveImage2() {

if (this.state.image2) {

    swal({
        title: "Are you sure?",
        text: "Attached image will be De-Attached. Do You wish to Continue?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((stat) => {
            if (stat) {


                this.state.image2 = null;

                swal("Image De-Attached Successfully!", {
                    title: "Image De-Attached Successfully!",
                    text: 'To Re-Attach Press View or Attach',
                    icon: "info",
                });

            } else {
                swal("Image De-Attached Cancelled!", {
                    title: "Image De-Attached Cancelled!",
                    text: 'Your Image Attachment is Safe',
                    icon: "success",
                });
            }
        });

} else {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No Attachment Found',
        text: "No Attachment is  found for this product",
        showConfirmButton: false,
        timer: 3000
    })


}
}

//handle image upload

async uploadImage2() {


    if (imgname2) {

        if (this.state.NewUpload2) {


            let Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: this.state.uploadPercentage2,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
                onBeforeOpen: () => {
                    Swal.showLoading()
                }


            })
            console.log("percentage ", this.state.uploadPercentage2);


            this.state.NewUpload2 = false;

            const formData = new FormData();

            formData.append('photo2', this.state.photo2);




            await axios.post('http://localhost:5000/foreign/upload2', formData, {

                
                onUploadProgress: ProgressEvent => {

                    this.state.uploadPercentage2 = 100 - parseInt((Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)))

                    console.log("percentage inside ", this.state.uploadPercentage);

                    Toast.fire({
                        icon: 'info',
                        title: 'Uploading on Progress.',
                        text: 'Please wait a moment',
                       

                    })

                    setTimeout(() => this.state.uploadPercentage2 = 0, 1000)


                }




            }).then((res) => {

                console.log("response is: ", res.data);

                if (res.data.URL) {

                    Swal.fire({
                        title: 'Confirm',
                        text: "Do You Want To Set This As the Food Image?",

                        imageUrl: res.data.URL,

                        imageHeight: 400,
                        showCancelButton: true,
                        confirmButtonText: 'Yes',
                        cancelButtonText: 'No,cancel',
                        reverseButtons: true,
                        preConfirm: (e) => {

                            swal({
                                title: "Image Attached",
                                text: "This Image File is Attached to Your Product",
                                icon: "success",

                                dangerMode: false,
                            })
                            this.state.image2 = res.data.URL;

                            console.log(this.state.image2);

                        }



                    }).then((e) => {


                        this.state.uploadedimg2 = res.data.URL;

                        console.log("Uploaded but Cancel: ", this.state.uploadedimg2);








                    })

                } if (res.data.msg) {
                    swal({
                        title: "No File is Selected",
                        text: res.data.msg,
                        icon: "error",

                        dangerMode: true,
                    })


                }

            }).catch((err => {

                

               axios.get('http://localhost:5000/login/',
               {

                    
                }
                ).then((res) => {


                    Swal.fire({
                        title: "Upload Interrupted",
                        text: "Selected File is not an Image or in unsupported file format or Upload is interrupted Due to Server Error, Upload failed! ",
                        icon: "error",
                        // buttons: true,
                        dangerMode: true,
                    })

                }).catch((err) => {

                Swal.fire({
                    title: "Upload Interrupted",
                    text: "Selected File is not an Image or in unsupported file format or Upload is interrupted Due to Server Error, Upload failed! ",
                    icon: "error",

                    dangerMode: true,
                })

            })


            }))


        } else {




            if (!this.state.NewUpload2) {



                swal({
                    title: "Existing Upload",
                    text: "This File is Already Uploaded",
                    icon: "info",

                    dangerMode: false,
                })
            }

        }
    } else {
        swal({
            title: "No File is Selected",
            text: "No file is selected Please Select a File First!",
            icon: "error",

            dangerMode: true,
        })

    }


}

showImage2() {

    let go = 0;

    if (this.state.image2) {

        Swal.fire({
            title: 'Product Picture',


            imageUrl: this.state.image2,
            icon: "success",

            text: "This Image is Attached to your Product",

            imageHeight: 400,

            confirmButtonText: 'Continue',

            reverseButtons: true,
        })

        addvalid = true;






    } else if (this.state.uploadedimg2) {

        Swal.fire({
            title: 'Image Not Attached',
            html: "Uploaded Image is <b>not attached</b> to the Product,<br/>Do you wish to <b>Attach</b> this as the Product Image?",

            imageUrl: this.state.uploadedimg2,
            icon: "question",

            imageHeight: 400,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No,cancel',
            reverseButtons: true,
            preConfirm: (e) => {
                this.state.image2 = this.state.uploadedimg2;

                console.log(this.state.image2);





                swal({
                    title: "Image Attached",
                    text: "This Image File is Attached to Your Product",
                    icon: "success",

                    dangerMode: false,
                })

                addvalid = true;



            }





        })
        addvalid = true;





    } else {

        if (!sub) {
            swal({
                title: "No File is Uploaded",
                text: "No file is Uploaded, First Upload an Image file",
                icon: "error",

                dangerMode: true,
            })

        } else {

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-danger',
                    cancelButton: 'btn btn-success',
                    margin: '50px'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'No file is Uploaded',
                text: "Do you wish to continue without uploading a Product Image?",

                imageUrl: this.state.uploadedimg2,
                icon: "warning",

                imageHeight: 400,
                showCancelButton: true,
                confirmButtonText: 'Continue',
                cancelButtonText: 'Cancel',
                reverseButtons: true,

                preConfirm: (e) => {





                    go = 1;
                    console.log("Go dont need file");

                    addvalid = true;



                }





            })

            if (go == 0) {

                console.log("dont go");


                addvalid = false;
            }
        }

    }


}

//show help tag for image upload
showHelp2() {
    Swal.fire({
        title: '<strong>File Upload Details</strong>',
        icon: 'info',
        html:
            '<div style="text-align:justify;"><b>1. </b>   Upload file type should be in Image Format <br/><b>2. </b>  Select file to Upload by Pressing <b>Browse</b> button.<br/><b>3. </b>  To Upload the file Press <b> Upload Image </b> button. <br/><b>4. </b>   If you want to attach file to product Press <b>yes</b><br/><b>5. </b>  To view or attach the uploaded image to the product press <b>View or Attach Image</b></div>',

        showCloseButton: true,

        focusConfirm: false,
        confirmButtonText:
            '<i class="fas fa-check-circle"></i> Got it',


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
        image:this.state.image,
        image2:this.state.image2,
     }
     console.log(guest);

     axios.post('http://localhost:5000/foreign/add',guest)
         .then(res=>console.log(res.data));

         {alert('Guest Details added Successfully');}
    //window.location='/package';
 }


    render() {
        {
            const paperStyle={padding :20,height:'250vh',width:1000, margin:"20px auto"}
            const avatarStyle={backgroundColor:'#1bbd7e'}
               
            return (
                <div>
                    <Grid>
                        <div><Navbar/></div>
                    <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                    <Avatar style={avatarStyle}><AssignmentIndIcon/></Avatar>
                    <h2>Foreign Guest Details Form</h2>
                    </Grid>
    
                    <div className="container">
                        <div>
                            <Form onSubmit={this.onSubmit}>
                            <label> 1 Adult </label>
                            <TextField
                            id="firstName" label="Last Name" variant="outlined" fullWidth  style={{ margin: 8 }}
                            select
                            label="First Name"
                            value={this.state.firstName}
                            onChange={this.changeFirstName}
                            
                            >
                            {this.state.firstNames.map((user) => (
                                <MenuItem  key={user}
                                value={user}>{user}
                                {user.label}
                                </MenuItem>
                            ))}
                            </TextField>

    
                            <TextField id="lastName" label="Last Name" variant="outlined" fullWidth  style={{ margin: 8 }}
                            onChange={this.changeLastName}
                            value={this.state.lastName}/>
    
    <div className="shadow-box-example z-depth-5" style={{ backgroundImage: "linear-gradient(to bottom right, #ECEFF1, #FAFAFA)", padding: "20px" }}>
                                        
                                        <h5><i class="zmdi zmdi-image-alt"></i> covid-19 quarantine report </h5>
                                        <div className="input-group">

                                            <div className="input-group-prepend" >


                                            </div>
                                            <div className="custom-file">
                                                <TextField id="outlined-basic" label="Food Image" variant="outlined" 
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="inputGroupFile01"
                                                    aria-describedby="inputGroupFileAddon01"
                                                    onChange={this.onChangeImage}
                                                />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                    {imgname ? imgname : "Choose a file"}
                                                </label>
                                            </div>
                                        </div><br /><center>
                                            <div class="form-group" >
                                                <button style={{ padding: "15px", margin: "5px" }} class="btn btn-outline-success" onClick={this.uploadImage}><i class="fas fa-cloud-upload-alt"></i> Upload Image</button><br />
                                                <button class="btn btn-outline-primary" style={{ margin: "5px" }} onClick={this.showImage}><i class="fas fa-eye"></i> View or Attach Image</button>
                                                <button class="btn btn-outline-danger" style={{ margin: "5px" }} onClick={this.RemoveImage}><i class="fas fa-unlink"></i> Remove Attached Image</button>
                                            </div></center>


                                    </div>

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
    
                            

<div className="shadow-box-example z-depth-5" style={{ backgroundImage: "linear-gradient(to bottom right, #ECEFF1, #FAFAFA)", padding: "20px" }}>
                                        
                                        <h5><i class="zmdi zmdi-image-alt"></i> covid-19 quarantine report </h5>
                                        <div className="input-group">

                                            <div className="input-group-prepend" >


                                            </div>
                                            <div className="custom-file">
                                                <TextField id="outlined-basic" label="Food Image" variant="outlined" 
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="inputGroupFile01"
                                                    aria-describedby="inputGroupFileAddon01"
                                                    onChange={this.onChangeImage2}
                                                />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                    {imgname2 ? imgname2 : "Choose a file"}
                                                </label>
                                            </div>
                                        </div><br /><center>
                                            <div class="form-group" >
                                                <button style={{ padding: "15px", margin: "5px" }} class="btn btn-outline-success" onClick={this.uploadImage2}><i class="fas fa-cloud-upload-alt"></i> Upload Image</button><br />
                                                <button class="btn btn-outline-primary" style={{ margin: "5px" }} onClick={this.showImage2}><i class="fas fa-eye"></i> View or Attach Image</button>
                                                <button class="btn btn-outline-danger" style={{ margin: "5px" }} onClick={this.RemoveImage2}><i class="fas fa-unlink"></i> Remove Attached Image</button>
                                            </div></center>


                                    </div>

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
                                    <option value={1}>one</option>
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
                                    <option value={0}>none</option>
                                    <option value={1}>one</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>three</option>
                                    <option value={4}>Four</option>
                                    </NativeSelect>
    </Col>                                  
    </Row>   

                                    <div className="form-group">
                                    <label> </label>
                                    </div>  
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
                            <TextField id="phone" label="Phone Number" variant="outlined" fullWidth  style={{ margin: 8 }}
                              
                             onChange={this.changeMobileNumber}
                             value={this.state.mobileNumber}

                            
                            />
    
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

                                    
                         
                           <Link to ='updateguest'><Button className='btn btn-warning btn-block'  >Update Guest Deatails </Button>{' '}</Link>
                        </div>
                    </div>


           
            </Paper>
            </Grid>
                </div>
            )
           
    }
}
}





