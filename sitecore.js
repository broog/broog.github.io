document.write('\
  <link href="prism.css" rel="stylesheet" />\
  <link rel="stylesheet" href="darkly.bootstrap.min.css">')
// xml request code from http://www.w3schools.com/ajax/default.asp
function siteHeader(){
	document.write("<div id='header'></div>");
	var elmnt = document.getElementById('header');
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		elmnt.innerHTML=xmlhttp.responseText;
		}
	  }
	xmlhttp.open("GET","header.html",true);
	xmlhttp.send();
}