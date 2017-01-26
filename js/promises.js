//jshint esversion:6

(function(window) {
  const output = $('#output');

  $('#get_user').click( e => {

  //1. get user from '/api/user.json'
  $.get('/api/user.json') //returns a Promise, is "thenable"
    .then(user => {
      //2. get first id of user friend ids
      const friendId = user.friends[0];
      //3. get friend from api
      return $.get(`/api/friend/${friendId}.json`);
    })
    .then(friend => {
      //4. get image for friend
      const friendPhoto = $('<img>', {
        src : friend.picture
      });
      //5. render image to page
      output.append(friendPhoto);
    });
  });
}(window));