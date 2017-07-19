/* 
Move comments to sidebar

*/


if(window.location.href.indexOf("youtube") > -1) {

window.scrollTo(0, $("#footer-container").offset().top);

setTimeout(
  function() 
  {
    $('#watch-discussion').insertAfter('#placeholder-playlist');
	$('#watch7-sidebar-contents').insertAfter("#action-panel-details");
  }, 2000);
  
  setTimeout(
 function() 
  {
	//MAKE SCROLLABLE
	$("#comment-section-renderer").css({"overflow-y":"scroll", "overflow-x":"hidden", "height":"900px"});
  }, 4000);
  
}
