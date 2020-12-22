var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000);
}

function contact() {
  var contact = document.getElementById("contactContainer");
  contact.style.display = "flex";
  window.onclick = function(event) {
    if (event.target == contact) {
      contact.style.display = "none";
    }
  }
}