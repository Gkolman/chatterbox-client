var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll( (data) => {
      var currentRoom = document.getElementById('lobbySelector').value;
      for ( var messages of data.results) {
        if (!messages.username || !messages.text || messages.roomname !== currentRoom) { continue; }
        console.log('working');
        var messageTemp = MessageView.render(messages);
        MessagesView.$chats.append(messageTemp);
      }
    } );
  },

  render: function() {

  }

};