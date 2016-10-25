document.getElementsByTagName('img')[0].onclick = function( ){
  var img = document.getElementsByTagName('img')[0];
  if (img.src.indexOf("Jello.jpg") >= 0) img.src = "Hamburger.jpeg";
  else img.src = "Jello.jpg";
}
