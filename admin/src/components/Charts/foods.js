import React, {Component} from 'react';
import {Bar , Line , Pie} from 'react-chartjs-2';
import axios from 'axios';

var LabelArray = [];
var DataArray =[];
var DataArray2=[];

//get date by string

function DateString(date) {

  return date.substring(0,10);
}

class SalesLine extends Component{

    constructor(props){
        super(props);


        this.getAllDates = this.getAllDates.bind(this);
        this.getSalesbyDate = this.getSalesbyDate.bind(this);

        this.state={
            
            AllOrdersByDate:[],
            AllOrdersArray:[],
            AllDatesArray:[],
            DistinctDatesArray:[],
            TotalPrices:[],
          
              Chartdata: null
        }
    }

    // generate lables of dates for chart
   async getAllDates() {

        const token = localStorage.getItem('manager_token');
    
      await  axios.get('http://localhost:4000/order/', {
          headers:
          {
            manager_token: token
    
          }
        }).then(res => {
          this.setState({
    
            AllOrdersArray: res.data.data


    
          })

          for (let i = 0; i < this.state.AllOrdersArray.length; i++) {
              
            this.state.AllDatesArray.push( DateString(this.state.AllOrdersArray[i].orderDate) );

          }

          if(this.state.DistinctDatesArray.length==0){
            this.state.DistinctDatesArray.push(this.state.AllDatesArray[0]);
          }

          for (let j = 0; j < this.state.AllDatesArray.length; j++) {
            
            for (let x = 0; x <  this.state.DistinctDatesArray.length; x++) {

              if(this.state.AllDatesArray[j]!==this.state.DistinctDatesArray[this.state.DistinctDatesArray.length-1]){

                this.state.DistinctDatesArray.push(this.state.AllDatesArray[j]);

              }
              
              
            }
            
          }
          console.log("Distinct Array is :",this.state.DistinctDatesArray );
          


          for (let index = 0; index < this.state.DistinctDatesArray.length; index++) {
            
            LabelArray.push(this.state.DistinctDatesArray[index]);
            
          }
              
          
         

        
       

        this.getSalesbyDate();
          
          
        }).catch(err => {
          console.log(err);
    
    
        })
    
      }

      //retrieve sales by date labels
     async getSalesbyDate(){


        for (let index = 0; index < this.state.DistinctDatesArray.length; index++) {

          //set label
            let key = this.state.DistinctDatesArray[index];

            
            

            //recieve data by labels
           const token = localStorage.getItem('manager_token');
     await   axios.get('http://localhost:4000/order/byDate/' + key, {
            headers:
            {
                manager_token: token

            }
        }).then(res => {

            this.setState({
    
                AllOrdersByDate: res.data.data
    
    
        
              })

              DataArray2.push(this.state.AllOrdersByDate.length);

              console.log("Data2Array",DataArray2);
              

              var totalPrice=0;
              
              for (let y = 0; y < this.state.AllOrdersByDate.length; y++) {
                totalPrice = totalPrice + this.state.AllOrdersByDate[y].totalPrice;
                
              }

              console.log("Output Total: ",totalPrice);
              

              this.state.TotalPrices.push(totalPrice);
              DataArray.push(totalPrice);


            
            
            

            

            
        }).catch(err => {
            console.log(err);


        })
            
        }

        
        
          
      }
    async  componentDidMount() {

      //set Temporary Labels and data empty
      LabelArray=[];
      DataArray=[];
      DataArray2=[];

      this.setState({

          
        AllOrdersByDate:[],
        AllOrdersArray:[],
        AllDatesArray:[],
        DistinctDatesArray:[],
        TotalPrices:[],
        Chartdata: null
    
        



      })

      
       await this.getAllDates();
       
       //set labels and data
        
        const labels=LabelArray;
        const data=DataArray;
        

        this.setState({
    
            Chartdata:{
                labels: labels,
                datasets: [{
                  label: "Total Sale Amount (Rs)",
                  backgroundColor:[ "rgba(255,0,255,0.75)"],
                  data: data
                }]
              }


    
          })

      
        
        
        

      }

    render(){

      

       

       
        return(
            <div className="chart" >

                <Line


                
                data ={this.state.Chartdata}
                   
            
                options={{legend:{position:"bottom"}}}
                
                
                redraw/>



            </div>

        )
    }



}
export default SalesLine;