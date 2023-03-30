$(document).ready(function() {
    $('#randomize-btn').click(function() {
      // Get a random film from IMDB API
      $.ajax({
        url: 'https://imdb-api.com/en/API/RandomTitle/k_qyf7igqp',
        type: 'GET',
        dataType: 'jsonp',
        success: function(data) {
          // Update the film poster
          $('#poster').attr('src', data.poster);
        },
        error: function(error) {
          console.log(error);
        }
      });
    });
  });
  