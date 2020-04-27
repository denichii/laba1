window.addEventListener("load", function () {
    var picture = document.getElementById("picture");
    var width = document.getElementById("width");
    var height = document.getElementById("height");
    var border = document.getElementById("border");
    var border_color = document.getElementById("border-color");
    var latun = document.getElementById("latun");
    var submit = document.getElementById("submit");
    var form = document.getElementById("form");


    function validate(elem, pattern) {
        var result = elem.value.search(pattern);
    }

    function numberchange() {
        var numbers = /^[ 0-9]+$/;
        validate(this, numbers);
    }

    function textchange() {
        var text = /^[a-zA-Z]+$/;
        validate(this, text);
    }
    width.onchange = numberchange;
    height.onchange = numberchange;
    border.onchange = numberchange;
    border_color.onchange = textchange;
    latun.onchange = textchange;




    form.addEventListener("submit", ev => {
        ev.preventDefault();
        picture.style.width = width.value + "px";
        picture.style.height = height.value + "px";
        picture.style.border = border.value + "px solid white";
        picture.style.borderColor = border_color.value;
        picture.setAttribute("alt", latun.value);
    })
})
