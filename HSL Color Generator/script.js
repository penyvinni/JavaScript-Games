hue.oninput = changeColor;
saturation.oninput = changeColor;
lightness.oninput = changeColor;

changeColor();

function changeColor() {
    var color = 'hsl(' +
        hue.value + ',' +
        saturation.value + '%,' +
        lightness.value + '%)';

    $("body").css({
        "background": color
    });

    $("#saturation").css({
        "background": 'linear-gradient(to right, hsl(' +
            hue.value + ', 0%, 50%) 0%, hsl(' +
            hue.value + ', 100%, 50%) 100%)'
    });

    $("#lightness").css({
        "background": 'linear-gradient(to right, hsl(' +
            hue.value + ', 100%, 0%) 0%, hsl(' +
            hue.value + ', ' +
            saturation.value + '%, 50%) 50%, hsl(' +
            hue.value + ', 100%, 100%) 100%)'
    });

    hslcode.innerHTML = color;
}