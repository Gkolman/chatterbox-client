var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  roomTemplate: _.template(
    `
    <option class="rooms"> <%= roomname %> </div>`
  ),

  initialize: function() {

    Parse.readAll( (data) => {

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
  },

  render: function() {
  }

};
