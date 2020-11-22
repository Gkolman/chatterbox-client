var Rooms = {

  add: function() {

    console.log('working');

    if (document.getElementById('roomFormText')) {
      var newRoomName = { roomname: document.getElementById('roomFormText').value };
      RoomsView.$select.append(RoomsView.roomTemplate(newRoomName));

    }

  }

};


$('button').on('click', () => Rooms.add());
