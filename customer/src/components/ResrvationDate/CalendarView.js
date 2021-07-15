import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Calendar } from 'antd';
import 'semantic-ui-css/semantic.min.css'
import { Label } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom"



const CalendarView = () => {
  const [slots, setSlots] = useState([]);
  const [displayDate, setDisplayDate] = useState(moment().format('MM-DD-YYYY'));
  let history = useHistory();

  const baseUrl = 'http://localhost:5000';

  useEffect(() => {
    axios.get(`${baseUrl}/slots`)
      .then(response => {
        console.log('fetching slots success: ', response);
        setSlots(response.data);
      })
      .catch(error => {
        console.log('fetching slots error: ', error);
      })
  }, []);

  const filterListDate = value => {
    return slots.filter(item => Number(item.slotDate.split('-')[1]) === value.date() && item.slotDate.slice(0, 2) === displayDate.slice(0, 2) && item.slotDate.slice(6) === displayDate.slice(6));
  }

  const dateCellRender = value => {
    let data = filterListDate(value);

    return (
      <ul>
        {data.map(item => <li key={item._id}>{item.displayDate}<Label as='a' color='brown' tag>unavailable</Label></li>)}
      </ul>
    )
  } 

  const filterListMonth = value => {
    return slots.filter(item => Number(item.slotDate.split('-')[0]) === value.month() + 1 && item.slotDate.slice(6) === displayDate.slice(6));
  }

  const monthCellRender = value => {
    let data = filterListMonth(value);

    if (data.length > 0) {
      return (
        <div>{`${data.length} booking days this month`}</div>
      )
    }
  }

  const onPanelChange = value => {
    if(slots.map(v => v.slotDate).includes(moment(value).format('MM-DD-YYYY'))) {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Date is unavailable',
      })
    } else {
      Swal.fire({
        title: 'Do you want to Book a Day',
        showCancelButton: true,
        confirmButtonText: `Book`,
      }).then((result) => {
        if (result.isConfirmed) {
          setDisplayDate(moment(value).format('MM-DD-YYYY'));
          history.push({
            pathname: '/PackageList',
            search: '',
            state: { slotDate: moment(value).format('MM-DD-YYYY') }
        });
        } else if (result.isDenied) {
          setDisplayDate(null);
        }
      });
    }
  }

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect={onPanelChange} />
    </div>
  )
} 

export default CalendarView;

