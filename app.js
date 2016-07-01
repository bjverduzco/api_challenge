$(function(){
  $.ajax({
    url: 'http://www.omdbapi.com/?t=the+fifth+element&y=&plot=short&r=json'
  }).then(function(data){

      // console.log(data);
      var title = data.Title;
      var posterUrl = data.Poster;
      var plot = data.Plot;
      var movieNum = 1;

    //   var results = data.results[i];

      movieAppend(title, posterUrl, plot, movieNum);

    //   $('.results').append('<div id="poster1"><img id="poster1" src="' + posterUrl + '"</div>');
    //   $('.results').append('<p>' + title + '</p>');
    //   $('.results').append('<p>' + plot + '</p>');

        }).catch(function(){
          console.log('An error occurred.');

  });

  $.ajax({
    url: 'http://www.omdbapi.com/?t=lord+of+the+rings%3Athe+return+of+the+king&y=&plot=short&r=json'

  }).then(function(data){
    // console.log(data);

    var title = data.Title;
    var posterUrl = data.Poster;
    var plot = data.Plot;
    var movieNum = 2;

    movieAppend(title, posterUrl, plot, movieNum);

    // $('.results').append('<div id="poster2"><img id="poster2" src="' + posterUrl + '"</div>');
    // $('.results').append('<p>' + title + '</p>');
    // $('.results').append('<p>' + plot + '</p>');


  }).catch(function(){
    console.log('An error occurred.');

  });

  $.ajax({
    url: 'http://www.omdbapi.com/?t=Drunken+master&y=&plot=short&r=json'

  }).then(function(data){
    // console.log(data);

    var title = data.Title;
    var posterUrl = data.Poster;
    var plot = data.Plot;
    var movieNum = 3;

    movieAppend(title, posterUrl, plot, movieNum);
    // $('.results').append('<div id="movie' + movieNum + '">');
    // $('#movie' + movieNum).append('<div id="poster' + movieNum + '"><img id="poster' + movieNum + '" src="' + posterUrl + '"</div>');
    // $('#poster' + movieNum).append('<p>' + title + '</p>').css('font-size', '20px');
    // $('#movie' + movieNum).append('<p>' + plot + '</p>');
    // $('.results').append('</div>');

  }).catch(function(){
    console.log('An error occurred.');

  });

  function movieAppend(title, posterUrl, plot, movieNum){
    $('.movies').append('<div id="movie' + movieNum + '">');
    $('#movie' + movieNum).append('<div id="poster' + movieNum + '"><img id="poster' + movieNum + '" src="' + posterUrl + '"</div>');
    $('#poster' + movieNum).append('<h2>' + title + '</h2>').css('font-size', '20px', 'font-style', 'bold');
    $('#movie' + movieNum).append('<p>' + plot + '</p>').css('font-style', 'italic');
    $('.movies').append('</div>');
  };

  // var search = document.getElementById('search').val;
  // console.log(search);
  $('.button').on('click', function(){
    var x = $(this).find('#search-input').val();
    console.log(x);
  });
})
