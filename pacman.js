 var pos = 200;
    var pageWidth = window.innerWidth;
    const pacArray = [
        ['PacMan1.png', 'PacMan2.png'],
        ['PacMan3.png', 'PacMan4.png']
    ];
    var direction = 0;
    var focus = 0;

    function Run() {
        let img = document.getElementById("PacMan");
        let imgWidth = img.width
        focus = (focus + 1) % 2;
        direction = checkPageBounds(direction, imgWidth);
        img.src = pacArray[direction][focus];
        if (direction) {
            pos -= 15;
            img.style.left = pos + "px";
        } else {
            pos += 15;
            img.style.left = pos + 'px';
        }

        setTimeout(Run, 150);
    }

    function checkPageBounds(direction, imgWidth) {
        let pageWidth = window.innerWidth;
        if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
        if (direction == 1 && pos < 200) direction = 0;

        return direction;
    }

var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
