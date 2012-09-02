                               
//scrape movie title and year to search youtube
							   
							   
//If 'Watch Trailer' link is not present, then create & insert 'Find Trailer' link

// if(!($(".title-trailer").length)){
if(($(".title-trailer").length)==0){
	TrailerLink = "http://www.youtube.com/";
								   
	$('<a href="' + TrailerLink + '" class="btn2 large btn2_text_on title-trailer" <span class="btn2_text">Find Trailer</span></a>').insertBefore(".launch-share-popover");
}


