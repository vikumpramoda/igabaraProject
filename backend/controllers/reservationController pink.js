const moment = require('moment');

const pinkreservationModel = require('../models/reservationCalender.model pink');
const pinkslotModel = require('../models/slotGuestCalender.model pink');

module.exports = {
  findAllReservations,
  addReservation,
  editReservation,
  deleteReservation
}

function findAllReservations(req, res) {
  pinkreservationModel.find((error, data) => {
    if (error) {
      res.status(500).json({ 
        message: 'error fetching book',
        error: error
      });
    } else {
      res.status(200).json(data);   
    }
  })
}

function addReservation (req, res) {
  const input = req.body;

  const newSlot = new pinkslotModel({
    slotGuest: input.slotGuest,
    slotDate: moment(input.slotDate).format('MM-DD-YYYY')
  })

  newSlot.save();

  const newReservation = new pinkreservationModel({
    email: input.email,
    firstName: input.firstName,
    lastName: input.lastName,
    slots: newSlot._id
  })

  newReservation.save((error, data) => {
    if (error) {
      res.status(500).json({ 
        message: 'error creating reservation',
        error: error
      });
    } else {
      res.status(201).json(data);
    }
  })
}

function editReservation(req, res) {
  const id = req.params.id;
  const input = req.body;

  pinkreservationModel.findOne({ _id: id}, (error, data) => {
    if (error) {
      res.status(500).json({ 
        message: 'error fetching Reservation',
        error: error
      });
    } else if (!data) {
      res.status(404).json({ 
        message: 'no Reservation of such id exists',
      });
    }

    const updatedReservation= data;
    updatedReservation.email = input.email;
    updatedReservation.firstName = input.firstName;
    updatedReservationt.lastName = input.lastName;
    updatedReservation.slots = input.slots;

    updatedReservation.save((error1, data1) => {
      if (error1) {
        res.status(500).json({ 
          message: 'error updating reservation',
          error: error1
        });
      } else {
        res.status(201).json(data1);
      }
    })
  })
}

function deleteReservation(req, res) {
  const id = req.params.id;

  pinkreservationModel.findOneAndRemove({ _id: id }, (error, data) => {
    if (error) {
      res.status(500).json({ 
        message: 'error deleting reservation',
        error: error
      });
    } else if (!data) {
      res.status(404).json('no reservation of such id exists')
    } else {
      res.status(200).json({ removed: data });    
    }
  })
}