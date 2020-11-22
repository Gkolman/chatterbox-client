var Friends = {

  friendsList: {},

  toggleStatus: (friend) => {

    //Friends.toggleStatus(friend);

    if (Friends.friendsList[friend]) {
      delete Friends.friendsList[friend];
      $('.' + friend).removeAttr('id', 'friend');
    } else {
      Friends.friendsList[friend] = true;
      $('.' + friend).attr('id', 'friend');
    }
  },
};