//Grab nav buttons
var nav_buttons = document.querySelectorAll('.nav-buttons');
var this_page = document.querySelector('.this-page');

//Button highlight function
function btn_highlight(btn, color_in, color_out) {
    btn.onmouseover = function() {
        this.style.backgroundColor = color_in;
    }
    btn.onmouseout = function() {
        this.style.backgroundColor = color_out;
    }
}

//Highlight nav buttons
for (var i = 0; i < nav_buttons.length; i++) {
    btn_highlight(nav_buttons[i], '#60b1d0', '#0b1224');
}

