                               
//scrape movie title and year to search youtube
	
//Extract Title and Year from imdb
//var movieTitle = document.title.slice(0,-14);	
var movieTitle = $('h1').text().slice(0,-10);
var movieYear = $('h1.header a[href*=year]').text();

	
//If 'Watch Trailer' link is not present, then create & insert 'Find Trailer' link

// if(!($(".title-trailer").length)){
if(($(".title-trailer").length)===0){
	var TrailerLink = "http://www.youtube.com/";

    $('<a href="' + TrailerLink + '" class="btn2 large btn2_text_on title-trailer" <span class="btn2_text">Find Trailer</span></a>').insertBefore(".launch-share-popover");
}


