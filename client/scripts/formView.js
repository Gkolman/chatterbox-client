var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // extracting data here
    if (document.getElementById('lobbySelector')) {
      var currentroom = document.getElementById('lobbySelector').value;
    } else {
      var currentroom = 'lobby';
    }

    var username = window.App.username;
    var text = document.getElementById('message').value;
    // using data to fill in message format
    var message = {
      username: username,
      text: text,
      roomname: currentroom
    };

    MessagesView.renderMessage(message);
    document.getElementById('message').value = '';
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};