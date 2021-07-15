import React, {Component} from 'react';
import {Bar , Line , Pie} from 'react-chartjs-2';
import axios from 'axios';
import { Paper } from '@material-ui/core';
import ChartsNavbBar from './chartNavBar';
class pie extends Component{
        constructor(props){
          super(props);
          this.state={
            chartDate:{
              labels:['Brown','Pink','Green'],
              datasets:[
                {
                  label:'Igabara',
                  data:[
                    1,6,1
                  ],
                  backgroundColor:[
                    'rgb(201, 203, 207)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                  ]
                }
              ]
            }
          }
        }
  
        componentDidMount(){
          axios.get('http://localhost:5000/feedback')
          .then(response=>{
              this.setState({feedbacks:response.data})
          })
  
          .catch((error)=>{
              console.log(error);
          })
      }
   

    render(){
      const paperStyle={padding :20,height:'80vh',width:1000, margin:"20px auto"}
       
        return(
          
            <div className="chart" >
<Paper elevation={10} style={paperStyle}>
  <div><ChartsNavbBar/></div>
                <Pie


                
                data ={this.state.chartDate}
                   
            
                options={{legend:{position:"bottom"}}}
                
                
                redraw />


                                        

</Paper>
            </div>
        )
    }



}
export default pie;