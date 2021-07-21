import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";
import { Paper } from '@material-ui/core';
import ChartsNavbBar from './chartNavBar';

function foodBreakfast() {

  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  let bfood = [];
  let brate = [];
 
  
  useEffect(() => {

    axios.get("http://localhost:5000/feedback").then(res => {

      const feedback = res.data;
      setPosts(feedback);
      //console.log(feedback);
      feedback.forEach(record  => {
        bfood.push(record .bfood);
       console.log(bfood);
        brate.push(record .brate);
        console.log(brate);

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
          labels: ["Hoppers","StringHoppers","Noodles"],
          datasets: [
            {
              label: "Breakfast Analysis Chart",
              data: brate,
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

export default foodBreakfast;