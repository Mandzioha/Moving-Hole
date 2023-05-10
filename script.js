const block = document.querySelector("#block");
// Utwórz zmienną, która będzie przechowywać stan klawiszy
var keys = {
    up: false,
    down: false,
    left: false,
    right: false,
    PovUp: false,
    PovDown: false,
    PovLeft: false,
    PovRight: false,
    SkewLeft: false,
    SkewRight: false
  };
  
  // Dodaj nasłuchiwanie na zdarzenia wciskania i puszczenia klawiszy
  document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 87: // W
        keys.up = true;
        break;
      case 65: // A
        keys.left = true;
        break;
      case 83: // S
        keys.down = true;
        break;
      case 68: // D
        keys.right = true;
        break;
      case 38: // Up Arrow
        keys.PovUp = true;
        break;
        case 40: // Up Arrow
        keys.PovDown = true;
        break;
        case 37: // Up Arrow
        keys.PovLeft = true;
        break;
        case 39: // Up Arrow
        keys.PovRight = true;
        break;
        case 81:
        keys.SkewLeft = true;
        break;
        case 69:
        keys.SkewRight = true;
        break;
    }
  });
  
  document.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
      case 87: // W
        keys.up = false;
        break;
      case 65: // A
        keys.left = false;
        break;
      case 83: // S
        keys.down = false;
        break;
      case 68: // D
        keys.right = false;
        break;
        case 38: // Up Arrow
        keys.PovUp = false;
        break;
        case 40: // Up Arrow
        keys.PovDown = false;
        break;
        case 37: // Up Arrow
        keys.PovLeft = false;
        break;
        case 39: // Up Arrow
        keys.PovRight = false;
        break;
        case 81: // Q
        keys.SkewLeft = false;
        break;
        case 69:
            keys.SkewRight = false;
        break;
    }
  });
  
  // Pobierz element, który będzie przesuwany
  var element = document.getElementById('przykladowy-element');
  
  // Ustaw pozycję początkową
  var x = 0;
  var y = 0;
  var px = 0;
  var py = 0;
  var sk = 0;
  
  // Utwórz funkcję, która będzie aktualizować pozycję elementu
  function updatePosition() {
    // Oblicz wartości przesunięcia na podstawie stanu klawiszy
    var dx = 0;
    var dy = 0;
    var pdx = 0;
    var pdy = 0;
    var dsk = 0;
    if (keys.up) {
      dy -= 1;
    }
    if (keys.down) {
      dy += 1;
    }
    if (keys.left) {
      dx -= 1;
    }
    if (keys.right) {
      dx += 1;
    }
    if (keys.PovUp) {
        pdx -= 0.3;
    }
    if (keys.PovDown) {
        pdx += 0.3;
    }
    if (keys.PovLeft) {
        pdy -= 0.3;
    }
    if (keys.PovRight) {
        pdy += 0.3;
    }
    if(keys.SkewLeft){
        dsk -= 0.3;
    }
    if(keys.SkewRight){
        dsk += 0.3;
    }
  
    // Dodanie przesunięcia do aktualnej pozycji elementu
    x += dx;
    y += dy;
    px += pdx;
    py += pdy;
    sk += dsk;
    // Transformacja CSS, aby przesunąć element na nową pozycję
    block.style.transform = 'translate(' + x + 'px, ' + y + 'px) rotateX('+px+"deg) rotateY("+py+"deg) rotateZ("+sk+"deg)";
  }
  // Interwał, który będzie wywoływał funkcję updatePosition() co 50 milisekund
  setInterval(updatePosition, 1);