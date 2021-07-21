import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import { Paper } from '@material-ui/core';
import ChartsNavbBar from './chartNavBar';

function foodlunch() {

  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  let lfood = [];
  let lrate = [];
 
  
  useEffect(() => {

    axios.get("http://localhost:5000/feedback").then(res => {

      const feedback = res.data;
      setPosts(feedback);
      //console.log(feedback);
      feedback.forEach(record  => {
        lfood.push(record .lfood);
       console.log(lfood);
        lrate.push(record .lrate);
        console.log(lrate);

  setTotal(total+parseFloat(record.brate))  ; 

      /*  const Modifieddata=data.map((feedback)=>({
          bfood:feedback.bfood.total,
          brate:feedback.brate.total,
          
      }));
      return Modifieddata;*/
      
      });

      //foorloop    // count    //total

     

      setData({
        Data: {
          labels: lfood,
          datasets: [
            {
              label: "Dinner Food Item Rate Analysis ",
              data: lrate,
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
      <Bar data={data.Data}  ></Bar>
      </Paper>
    </div>
  );
}

export default foodlunch;