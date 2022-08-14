

const htmlEl = document.querySelector(".muntedTransition");

const saveCursorPosition = function( x, y) {

    const pos = { x : 0, y : 0 };
    const maxSwing = 24; // degrees swing
    const favourY = 4; // additional swing favouring Y

    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);

    const degX = (maxSwing * pos.x) - (maxSwing / 2) ;
    const degY = (maxSwing * pos.y) - (maxSwing / 2) + favourY;

    htmlEl.style.setProperty('--mouse-x', (degX)+"deg");
    htmlEl.style.setProperty('--mouse-y', (degY)+"deg");

 }

// set a default skew
saveCursorPosition( window.innerWidth * 0.4, window.innerHeight * 0.85);

document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); })


