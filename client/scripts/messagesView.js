// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),


  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // loop over the messages array
    // assign username and text to variables
    for ( let i = 0; i < Messages._data.length; i++) {

      // const { username, text } = Messages._data[i];

      var tweetHTML = MessagesView.renderMessage(Messages._data[i]);

      $('#chats').append(tweetHTML);
    }
  },

  renderMessage: function(tweetObj) {
    return MessageView.render(tweetObj);

    // TODO: Render a single message.
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

    // take username from message that gets clicked
    // add usernmae to friendlist
  }

};