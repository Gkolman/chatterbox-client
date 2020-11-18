var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    //initialize previous messages()

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      console.log(data.r);

      // all messages === data.results - > array

      for ( var messages of data.results) {
        console.log('message ->', messages);
        if (!messages.username || !messages.text || message.text.includes('<script>') ) { continue; }

        MessagesView.$chats.append(MessageView.render(messages));
      }


      // data - > list




      callback();
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
