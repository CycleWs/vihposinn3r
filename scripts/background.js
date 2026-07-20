var header = $('body');

var backgrounds = new Array(
    'url(../../assets/desktop.png)'
  , 'url(../../assets/miscellaneous_1.jpeg)'
  , 'url(../../assets/miscellaneous_2.jpeg)'
);
    
var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 1000);

header.css('background-image', backgrounds[0]);