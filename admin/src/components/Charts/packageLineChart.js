import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import { Paper } from '@material-ui/core';
import ChartsNavbBar from './chartNavBar';

function PackageLine() {

  const [data, setData] = useState([]);
 // const [total, setTotal] = useState(0);
  const [posts, setPosts] = useState([]);

  let packagename = [];
  let packagerate = [];
 
  
  useEffect(() => {

    axios.get("http://localhost:5000/feedback").then(res => {
      const feedback = res.data;
      setPosts(feedback);
      console.log(feedback);
      feedback.forEach(record  => {
        packagename.push(record .packagename);
       //console.log(packagename);
      
       //setTotal(total+parseFloat(record.packagerate))  ; 
        packagerate.push(record .packagerate);
       
      });




      setData({
        Data: {
          labels: packagename,
          datasets: [
            {
              label: "Package Feedback",
              data: packagerate,
              backgroundColor: [
                "#3cb371",
                "#0000FF",
                "#9966FF",
                "#4C4CFF",
                "#00FFFF",
                "#f990a7",
                "#aad2ed",
                "#FF00FF",
                "Blue",
                "Red"
              ]
            }
          ]
        }
      });
    });
  },[]);
  const paperStyle={padding :20,height:'80vh',width:1000, margin:"20px auto"}
  return (
    <div>
      <Paper elevation={10} style={paperStyle}>
      <div><ChartsNavbBar/></div>
      <Line data={data.Data}  ></Line>
      </Paper>
    </div>
  );
}

export default PackageLine;