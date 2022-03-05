// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {
  roomNames: [],
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // clear the current HTML
    // RoomsView.render;
  },

  render: function() {
    // TODO: Render out the list of rooms.
    for ( let i = 0; i < Messages._data.length; i ++) {
      RoomsView.roomNames.push(Messages._data[i].roomname);
    }

    var uniqueNames = _.uniq(RoomsView.roomNames);
    console.log(uniqueNames);

    // forEach roomNames
    uniqueNames.forEach( roomname => {
      var $dropdownoption = $('<option value=' + roomname + '>' + roomname + '</option>');
      $('#rooms select').append($dropdownoption);
    });


  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
