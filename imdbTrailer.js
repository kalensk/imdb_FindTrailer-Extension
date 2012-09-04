//if 'Watch Trailer' link is not present, then insert 'Find Trailer' link
jQuery(document).ready(function($) {
	if(($(".title-trailer").length)===0){

		//extract Title and Year from imdb
		var movieTitle = encodeURI('"' + document.title.slice(0,-14).replace(/ /g,"+") + '"');
		var movieYear = $('h1.header a[href*=year]').text();
		
		//create a link to search google and return top result using MovieTitle and MovieYear
		var TrailerLink = "http://www.google.com/search?q=" + movieTitle + "+" + movieYear + "+trailer&tbm=vid&tbs=dur:s&btnI";
		
		//find 'Share...' button on imdb and insert 'Find Trailer' button before it
		$('<a href="' + TrailerLink + '" class="btn2 large btn2_text_on title-trailer" <span class="btn2_text">Find Trailer</span></a>').insertBefore(".launch-share-popover");
		
		//render colorbox popup to display TrailerLink
		$("a.title-trailer").colorbox({iframe:true, width:"70%", height:"70%"});
	}
});