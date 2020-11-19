var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll( (data) => {
      for ( var messages of data.results) {
        if (!messages.username || !messages.text) { continue; }
        var messageTemp = MessageView.render(messages);
        MessagesView.$chats.append(messageTemp);
      }
    } );
  },

  render: function() {

  }

};