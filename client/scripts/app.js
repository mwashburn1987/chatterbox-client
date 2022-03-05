// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner());
    // RoomsView.render();


    setInterval(function () {
      App.fetch();
    }, 2000);

  },


  renderRooms: function() {
    RoomsView.render();
  },


  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      if (!data) {
        alert('No data to display');
      }

      Messages._data = data;
      Rooms._data = data;
      console.log(Rooms._data);

      // console.log(Rooms._data);
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      MessagesView.$chats.html('');
      RoomsView.$select.html('');

      RoomsView.render();
      MessagesView.render();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

