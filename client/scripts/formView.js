var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();


    var currentroom; // -> assign value of current room
    // currentRoom as defalt is going to === lobby
    // currentRoom - updates it is selected from dropdown selector
    //

    //


    var username = window.App.username;
    var text = document.getElementById('newMessage').value;

    var message = {
      username: username,
      text: text,
      roomname: (currentroom) ? currentroom : 'lobby'
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