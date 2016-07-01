$(function(){
  var tempTitle;
  var string = '&y=&plot=short&r=json';
  var url = 'http://www.omdbapi.com/?t=';
  var searchUrl = 'http://www.omdbapi.com/?s=';

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

  function search(){
//takes in the search value and splits it then joins with the + sign for input type for the url to omdbi
    var tempUrl = searchUrl + tempTitle;
    $()

    $.ajax({

      url: tempUrl

    }).then(function(data){
      // console.log(data);

      var title = data.Search.Title;
      var posterUrl = data.Poster;
      var plot = data.Plot;
      var movieNum = 4;

      searchedMovieAppend(title, posterUrl, plot, movieNum);
      // $('.results').append('<div id="movie' + movieNum + '">');
      // $('#movie' + movieNum).append('<div id="poster' + movieNum + '"><img id="poster' + movieNum + '" src="' + posterUrl + '"</div>');
      // $('#poster' + movieNum).append('<p>' + title + '</p>').css('font-size', '20px');
      // $('#movie' + movieNum).append('<p>' + plot + '</p>');
      // $('.results').append('</div>');

    }).catch(function(){
      console.log('An error occurred.');

    });
  };

  function movieAppend(title, posterUrl, plot, movieNum){
    $('.movies').append('<div id="movie' + movieNum + '">');
    $('#movie' + movieNum).append('<div id="poster' + movieNum + '"><img id="poster' + movieNum + '" src="' + posterUrl + '"</div>');
    $('#poster' + movieNum).append('<h2>' + title + '</h2>').css('font-size', '20px', 'font-style', 'bold');
    $('#movie' + movieNum).append('<p>' + plot + '</p>').css('font-style', 'italic');
    $('.movies').append('</div>');
  };

  function searchedMovieAppend(title, posterUrl, plot, movieNum){
    $('.searched').append('<div id="movie' + movieNum + '">');
    $('#movie' + movieNum).append('<div id="poster' + movieNum + '"><img id="poster' + movieNum + '" src="' + posterUrl + '"</div>');
    $('#poster' + movieNum).append('<h2>' + title + '</h2>').css('font-size', '20px', 'font-style', 'bold');
    $('#movie' + movieNum).append('<p>' + plot + '</p>').css('font-style', 'italic');
    $('.searched').append('</div>');
  };

  $('#search').on('submit', function(){
    event.preventDefault();
    // var x = $(this).find('#search-input').val();
    tempTitle = $('#searchInput').val();
    // if(tempTitle.indexOf(' ') >= 0){
    //   var tempArray = tempTitle.split(' ');
    //   tempTitle = tempArray.join('+');
    // }
    console.log(tempTitle);
    // console.log(tempArray);
    search(tempTitle);
  });
  // var search = document.getElementById('search').val;
  // console.log(search);

})
