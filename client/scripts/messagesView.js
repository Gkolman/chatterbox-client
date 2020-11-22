var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll( (data) => {
      var currentRoom = document.getElementById('lobbySelector').value;
      for ( var messages of data.results) {
        if (!messages.username || !messages.text || messages.roomname !== currentRoom || currentRoom === undefined) { continue; }
        var messageTemp = MessageView.render(messages);
        MessagesView.$chats.append(messageTemp);
      }
    } );
  },

  render: function() {
    MessagesView.renderMessage();
    window.setInterval(MessagesView.initialize, 15000);
  },

  renderMessage: function (message) {

    var messageTemp = MessageView.render(message);
    MessagesView.$chats.prepend(messageTemp);
    Parse.create(messageTemp);
  }

};