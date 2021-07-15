import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import AddFoodNavbBar from './addFoodNavBar';
import { Link } from 'react-router-dom';

let imgname = '';
let addvalid = false;
let sub = false;
export default class Addfoods extends Component {

    constructor(props){
        super(props);

        this.onChangeFoodname=this.onChangeFoodname.bind(this);
        this.onChangeFoodDescription=this.onChangeFoodDescription.bind(this);
        this.onChangeFoodeprice=this.onChangeFoodeprice.bind(this);
        this.onChangeImage=this.onChangeImage.bind(this);
        this.uploadImage = this.uploadImage.bind(this)
        this.showImage = this.showImage.bind(this)
        this.RemoveImage = this.RemoveImage.bind(this)
        this.showHelp = this.showHelp.bind(this)
        this.onSubmit=this.onSubmit.bind(this);

    this.state={
        
        foodname:'',
        fooddescription:'',
        foodprice:'',
        image: null,
        photo: null,
        NewUpload: false,
        uploadedimg: null,
        uploadPercentage: 0
    }
}

      

        onChangeFoodname(e){
        this.setState({
            foodname:e.target.value
        });
        }
        onChangeFoodDescription(e){
        this.setState({
            fooddescription:e.target.value
        });
        }
        onChangeFoodeprice(e){
        this.setState({
            foodprice:e.target.value
        });
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
    
    
    
    
                    await axios.post('http://localhost:5000/food/upload', formData, {
    
                        
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

        

 onSubmit(e){
     e.preventDefault();

     const foods={
         
         foodname:this.state.foodname,
         fooddescription:this.state.fooddescription,
         foodprice:this.state.foodprice,
         image:this.state.image,
     }
     console.log(foods);

     axios.post('http://localhost:5000/food/add',foods)
         .then(res=>console.log(res.data));

    //window.location='/foodList';
 }



    render() {
        const paperStyle={padding :20,height:'68vh',width:1000, margin:"20px auto"}
        return (
            <div>
                <div><AddFoodNavbBar/></div>
                <Paper elevation={10} style={paperStyle}>
                <h3>Add Foods For Breakfast</h3>
                <form onSubmit={this.onSubmit}>
            <TextField id="outlined-basic" label="Food Name" variant="outlined" 
                type="text"
                placeholder="foodname"
                name="foodname"
                value={this.state.foodname}
                onChange={this.onChangeFoodname}
            /> <label></label> <label></label> <label></label>

            <TextField
                id="outlined-textarea"
                label="Food Description"
                placeholder="Placeholder"
                multiline
                variant="outlined"
                type="text"
                placeholder="fooddescription"
                name="fooddescription"
                value={this.state.fooddescription}
                onChange={this.onChangeFoodDescription}
            />  <label></label> <label></label> <label></label>

                <TextField id="outlined-basic" label="Food Price (SL Rs.)" variant="outlined" 
                type="text"
                pattern="[0-9]*"
                placeholder="foodprice"
                name="foodprice"
                value={this.state.foodprice}
                onChange={this.onChangeFoodeprice}
            />

<div><label></label></div>
                                        <div className="shadow-box-example z-depth-5" style={{ backgroundImage: "linear-gradient(to bottom right, #ECEFF1, #FAFAFA)", padding: "20px" }}>
                                        
                                        <h5><i class="zmdi zmdi-image-alt"></i> Food Image </h5>
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
<div><label></label></div>
                                    <div className="form-group">
                                <input type="submit" value="Add Foods" class="btn btn-success"/>   <label></label>
                                <Link to ='foodList'><input type="button" value="Food List" class="btn btn-info"/>{' '}</Link>
                                    </div>

                                    </form>

                                    
                </Paper>
                
            </div>
        )
    }
}
