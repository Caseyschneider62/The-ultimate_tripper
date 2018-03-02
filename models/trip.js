var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


var trip = sequelize.define("trip", {
  usernameid: {
    type: Sequelize.INTEGER
  },
  city: {
    type: Sequelize.STRING
  },
  nightDuration: {
    type: Sequelize.INTEGER
  },
  totalCost: {
    type: Sequelize.INTEGER
  },
  startDate: {
    type: Sequelize.DATE
  },
  event_name: {
    type: Sequelize.STRING
  },
  venue_name: {
    type: Sequelize.INTEGER
  },
  budget: {
    type: Sequelize.INTEGER
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with DB
trip.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = trip;