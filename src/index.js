function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

function changeColor() {
    var x = document.querySelector('div');
    x.style.width = "100px";
    x.style.height = "100px"
    x.style.backgroundColor =random_bg_color();
}

function changeColorJQ(params) {
    var x = $('div')
    x.css('width', '101px')
    x.css('height', '100px')
    x.css('backgroundColor', random_bg_color());
    
}