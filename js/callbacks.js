//jshint esversion:6

(function(window) {

  const output = $('#output');

  const getUser = () => {
    // 1. get user from `/api/user.json`
    $.get('/api/user.json') // returns a Promise, is "thenable"
      // 2. get first id of user friend ids
      .then( user => user.friends[1] )
      // 3. get friend from api
      .then( friendId => $.get(`/api/friend/${friendId}.json`) ) // returning another Promise
      // 4. get image for friend
      .then( friend => $('<img>', {
          src : friend.picture
        })
      )
      // 5. render image to page
      .then( output.append.bind(output) )
      .catch( err => {
        output.html('You do not have as many friends as you think');
      });
  };

  $('#get_user').click( getUser );

}(window));