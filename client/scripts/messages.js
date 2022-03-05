// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: null,

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  retrieve: function (messageID) {
    // retrieves message
    return Messages._data.messageID;
  },

  addMessage: function (text) {
    // add message to feed
    // rerun the roomsView render

    /*
      var message = {
      text: 'trololo',
      roomname: '4chan'
      };
      */
  }

};