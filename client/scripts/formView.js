var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var username = window.App.username;
    var text = document.getElementById('newMessage').value;
    var roomName = 'lobby';

    var message = {
      username: username,
      text: text,
      roomname: roomName
    };

    Parse.create(message);
    document.getElementById('newMessage').value = '';

    var messageTemp = MessageView.render(message);
    MessagesView.$chats.prepend(messageTemp);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};