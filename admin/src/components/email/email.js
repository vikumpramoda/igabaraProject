import React, { useState } from 'react';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



function Gmail(){

 
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')


  /* const handleClick=(e)=>{
        e.preventDefault();

        if(e.target.id==="name"){
            setName(e.target.value)
        }else{
            setEmail(e.target.value)
        }
    }*/
    const handleClick1 = (event) => {
        setName(event.target.value);
      };

      const handleClick2 = (event) => {
        setEmail(event.target.value);
      };

    const handleSubmit=(e)=>{
        e.preventDefault();

        const dataToSubmit={
            name,
            email
        }
          
        axios.post("http://localhost:5000/api/sendMail",dataToSubmit)
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
    <RadioGroup aria-label="gender" name="gender1" value={name} onChange={handleClick1}>
    <FormControlLabel value="yes" control={<Radio />} label="Accepted" />
    <FormControlLabel value="No" control={<Radio />} label="Not Accepted" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
   </RadioGroup>
           
<input id="email" placeholder="Email" value={email} onChange= {handleClick2}></input>
<button onClick={handleSubmit} >Send Email</button>
            </form>
        </div>
    );
}





export default Gmail;