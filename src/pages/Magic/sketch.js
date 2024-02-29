function sketch(p) {
    var canvas;
    var fraction;

    var x = 0,
        y = 0,
        px = 0,
        py = 0,
        easing = 0.3;

    let green = "31FF9C"
    let teal = "20C0E0"
    let purple = "7D28DF"
    let pink = "C94171"
    let yellow = "F7CB00"

    let colors = [green, yellow, pink, purple, teal]

    p.setup = function() {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');

        fraction = 0;

        p.strokeWeight(10);
        p.background(255, 255, 255);
    }

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
    
    p.draw = function() {
        p.blendMode(p.ADD);

        if (p.mouseIsPressed) {
            p.background(255, 255, 255, 1);
        } else {
            p.background(255, 255, 255, 1);
        }

        p.blendMode(p.BLEND);
        // get the color from the gradient
        const color = getColorFromGradient(colors.map(hexToRgb), fraction);
        p.stroke(color[0], color[1], color[2]);

        var targetX = p.mouseX,
        targetY = p.mouseY;
        x += (targetX - x) * easing;
        y += (targetY - y) * easing;

        p.line(x, y, px, py);

        px = x;
        py = y;

        fraction += 0.005;
    }
}

function hexToRgb(hex) {
    let r = parseInt(hex.substring(0, 2), 16)
    let g = parseInt(hex.substring(2, 4), 16)
    let b = parseInt(hex.substring(4, 6), 16)
    return [r, g, b]
}

function getColorFromGradient(colors, fraction) {
    fraction = fraction % 2;
    if (fraction > 1) { 
        fraction = 1 - (fraction % 1);
    }
  
    const gradientIndex = (colors.length - 1) * fraction;
    const startIndex = Math.floor(gradientIndex);
    const endIndex = Math.ceil(gradientIndex);
  
    const startColor = colors[startIndex];
    const endColor = colors[endIndex];
  
    const colorFraction = gradientIndex - startIndex;
  
    const interpolatedColor = [
      Math.round(startColor[0] + (endColor[0] - startColor[0]) * colorFraction),
      Math.round(startColor[1] + (endColor[1] - startColor[1]) * colorFraction),
      Math.round(startColor[2] + (endColor[2] - startColor[2]) * colorFraction)
    ];
  
    return interpolatedColor;
}

export default sketch;