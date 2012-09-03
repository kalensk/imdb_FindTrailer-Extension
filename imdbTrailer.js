
//If 'Watch Trailer' link is not present, then create & insert 'Find Trailer' link
if(($(".title-trailer").length)===0){

	//Extract Title and Year from imdb
	var movieTitle = encodeURI('"' + document.title.slice(0,-14).replace(/ /g,"+") + '"');
	var movieYear = $('h1.header a[href*=year]').text();
	
	var TrailerLink = "http://www.google.com/search?q=" + movieTitle + "+" + movieYear + "+trailer&tbm=vid&tbs=dur:s&btnI";

	$('<a href="' + TrailerLink + '" class="btn2 large btn2_text_on title-trailer" <span class="btn2_text">Find Trailer</span></a>').insertBefore(".launch-share-popover");
}
