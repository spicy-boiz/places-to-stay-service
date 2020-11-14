const express = require('express');
const listingController = require('../../db/controllers/listing.js');

// create a route handler
const router = express.Router();

router.route('/api/rooms/:id')
  .get((req, res) => {
    const { id } = req.params;
    listingController.findOne(id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(data);
      }
    });
  });

// router.route('/:id')
//   .get((req, res) => {});

module.exports = router;