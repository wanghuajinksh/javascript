/*$(function() {
 	$("#CM1 li").click(function(){
	  $(".CMSection2").hide();
	var myDiv = $(this).find('a').attr("href");
	$(myDiv).show();
	$(".CM1 li").removeClass('current');
	$(this).addClass('current');
	e.preventDefault();
});*

});*/
function openTab(evt, cityName) {
  var i, CMSection2, CMS;
  CMSection2 = document.getElementsByClassName("CMSection2");
  for (i = 0; i < CMSection2.length; i++) {
    CMSection2[i].style.display = "none";
  }
  CMS = document.getElementsByClassName("CMS");
  for (i = 0; i < CMS.length; i++) {
    CMS[i].className = CMS[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();