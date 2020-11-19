var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  roomTemplate: _.template(
    `
    <option class="rooms"> <%= roomname %> </div>`

  ),

  initialize: function() {

    Parse.readAll( (data) => {

      // get unique messageRooms
      var uniqueRooms = {};
      for ( var messages of data.results) {
        if (!messages.roomname) { continue; }
        if (uniqueRooms[messages.roomname] === undefined ) {
          uniqueRooms[messages.roomname] = 1;
          var roomTemp = RoomsView.roomTemplate(messages);
          RoomsView.$select.append(roomTemp);
        }
      }

    });
    // template
    // initialize lobby room
    // initialize
    // parseRead all - get all roomname variations
    // append all unique messages to our select tag element




  },

  render: function() {
  }

};
