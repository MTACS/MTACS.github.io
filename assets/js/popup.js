var modal = document.getElementById('popup');

var img = document.getElementById('img');

var img2 = document.getElementById('img2');

var img3 = document.getElementById('img3');

var img4 = document.getElementById('img4');

var img5 = document.getElementById('img5');

var img6 = document.getElementById('img6');

var modalImg = document.getElementById('image');

var text = document.getElementById('caption');

img.onclick = function() {

    modal.style.display = "block";

    modalImg.src = this.src;

    text.innerHTML = this.alt;

}

img2.onclick = function() {

    modal.style.display = "block";

    modalImg.src = this.src;

    text.innerHTML = this.alt;

}

img3.onclick = function() {

    modal.style.display = "block";

    modalImg.src = this.src;

    text.innerHTML = this.alt;

}

img4.onclick = function() {

    modal.style.display = "block";

    modalImg.src = this.src;

    text.innerHTML = this.alt;

}

img5.onclick = function() {

    modal.style.display = "block";

    modalImg.src = this.src;

    text.innerHTML = this.alt;

}

img6.onclick = function() {

    modal.style.display = "block";

    modalImg.src = this.src;

    text.innerHTML = this.alt;

}

var span = document.getElementsByClassName('close')[0];

span.onclick = function() {

    modal.style.display = "none";

}