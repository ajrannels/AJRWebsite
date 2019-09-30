// Get the modal
var modal = document.getElementById('myModal01');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg01');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption01");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = document.getElementById("caption01").innerHTML;
}

var modal = document.getElementById('myModal02');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg02');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption02");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    //captionText.innerHTML = this.alt;
    captionText.innerHTML = document.getElementById("caption02").innerHTML;
}

var modal = document.getElementById('myModal03');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg03');
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption03");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    //captionText.innerHTML = this.alt;
    captionText.innerHTML = document.getElementById("caption03").innerHTML;
}

var modal = document.getElementById('myModal04');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg04');
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption04");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    //captionText.innerHTML = this.alt;
    captionText.innerHTML = document.getElementById("caption04").innerHTML;
}

var modal = document.getElementById('myModal05');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg05');
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption05");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    //captionText.innerHTML = this.alt;
    captionText.innerHTML = document.getElementById("caption05").innerHTML;
}

var modal = document.getElementById('myModal06');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg06');
var modalImg = document.getElementById("img06");
var captionText = document.getElementById("caption06");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    //captionText.innerHTML = this.alt;
    captionText.innerHTML = document.getElementById("caption06").innerHTML;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[5];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}