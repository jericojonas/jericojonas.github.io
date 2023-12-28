document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('drawing-canvas');
    const context = canvas.getContext('2d');
    let isDrawing = false;
    let isDrawingRectangle = false;
    let rectStartX, rectStartY;

    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");


    // Set initial drawing properties
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = '#000';


    function setUserName() {
        const myName = prompt("Please enter your name.");
        if (!myName) {
          setUserName();
        } else {
          localStorage.setItem("name", myName);
          myHeading.textContent = `Mozilla is cool, ${myName}`;
        }
      }
      
      if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
      }

      myButton.onclick = () => {
        setUserName();
      };
      

      document.querySelector("h1").addEventListener("click", function () {
        alert("Ouch! Stop poking me!");
      });
    
      
      
        function createParagraph() {
          const para = document.createElement("p");
          para.textContent = "You clicked the button!";
          document.body.appendChild(para);
        }
      
        const paragraphs = document.querySelectorAll("p");
      
        for (const paragraph of paragraphs) {
          paragraph.addEventListener("click", createParagraph);
        }



    function startDrawing(e) {
        if (isDrawingRectangle) {
            rectStartX = e.clientX - canvas.offsetLeft;
            rectStartY = e.clientY - canvas.offsetTop;
        } else {
            isDrawing = true;
            draw(e);
        }
    }

    function stopDrawing() {
        if (isDrawingRectangle) {
            isDrawingRectangle = false;
            drawRectangle(rectStartX, rectStartY, mouseX, mouseY);
        } else {
            isDrawing = false;
            context.beginPath();
        }
    }

    function draw(e) {
        if (!isDrawing) return;

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.arc(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, context.lineWidth / 2, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function drawRectangle(startX, startY, endX, endY) {
        const rectWidth = endX - startX;
        const rectHeight = endY - startY;

        context.fillRect(startX, startY, rectWidth, rectHeight);
        context.strokeRect(startX, startY, rectWidth, rectHeight);
    }

    // Event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', function (e) {
        mouseX = e.clientX - canvas.offsetLeft;
        mouseY = e.clientY - canvas.offsetTop;
        draw(e);
    });

    // Button event listener
    const rectangleButton = document.getElementById('rectangle-button');
    rectangleButton.addEventListener('click', function () {
        isDrawingRectangle = true;
    });
});
