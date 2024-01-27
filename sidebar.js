function updateLayers() {
  var layersDiv = document.getElementById("layers");
  layersDiv.innerHTML = "";

  var ul = document.createElement("ul");

  for (var i = 0; i < shapes.length; i++) {
    var shape = shapes[i];
    var li = document.createElement("li");
    li.textContent = shape.name;
    ul.appendChild(li);
  }

  layersDiv.appendChild(ul);
}

function highlightSelectedLayer() {
  var layersElement = document.getElementById("layers");

  // Check if the "layers" element exists and has list items
  if (layersElement && layersElement.getElementsByTagName) {
    var layers = layersElement.getElementsByTagName("li");

    // Remove "selected" class from all layers
    for (var i = 0; i < layers.length; i++) {
      layers[i].classList.remove("selected");
    }

    // Add "selected" class to the layer corresponding to the selected shape
    if (selectedShape !== -1 && selectedShape < layers.length) {
      layers[selectedShape].classList.add("selected");
    }
  } else {
    console.error("Unable to find 'layers' element or list items.");
  }
}

document.addEventListener("keydown", function (event) {
  // Check if the pressed key is the "Esc" key (key code 27)
  if (event.key === "Escape" || event.keyCode === 27) {
    // Hide all elements with the class "sidebar left-sidebar"
    var leftSidebars = document.querySelectorAll(".sidebar.left-sidebar");

    leftSidebars.forEach(function (sidebar) {
      sidebar.style.display = "none";
    });
  }
});

// Assuming you have a click event listener for the canvas shapes
document
  .getElementById("drawingCanvas")
  .addEventListener("click", function (event) {
    var mouseX = event.clientX - event.target.getBoundingClientRect().left;
    var mouseY = event.clientY - event.target.getBoundingClientRect().top;

    // Get the index of the clicked shape
    var clickedShapeIndex = getSelectedShape(mouseX, mouseY);

    // Check if a shape is clicked
    if (clickedShapeIndex !== -1) {
      // Assuming you have a property 'type' in the shapes array indicating the shape type
      var clickedShapeType = shapes[clickedShapeIndex].type;

      // Show/hide sidebars based on the clicked shape type
      if (clickedShapeType === "circle") {
        showSidebar("sidebarCircle");
        hideSidebar("sidebarRectangle");
        hideSidebar("sidebarTriangle");
        hideSidebar("sidebarEllipse");
      } else if (clickedShapeType === "rectangle") {
        showSidebar("sidebarRectangle");
        hideSidebar("sidebarCircle");
        hideSidebar("sidebarTriangle");
        hideSidebar("sidebarEllipse");
      } else if (clickedShapeType === "triangle") {
        showSidebar("sidebarTriangle");
        hideSidebar("sidebarCircle");
        hideSidebar("sidebarRectangle");
        hideSidebar("sidebarEllipse");
      } else if (clickedShapeType === "ellipse") {
        showSidebar("sidebarEllipse");
        hideSidebar("sidebarCircle");
        hideSidebar("sidebarRectangle");
        hideSidebar("sidebarTriangle");
      }
    }
  });

// Helper functions to show/hide sidebars
function showSidebar(sidebarId) {
  var sidebar = document.getElementById(sidebarId);
  if (sidebar) {
    sidebar.style.display = "block";
  }
}

function hideSidebar(sidebarId) {
  var sidebar = document.getElementById(sidebarId);
  if (sidebar) {
    sidebar.style.display = "none";
  }
}

// Example event listener for shape selection
document.getElementById("layers").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    var layerIndex = Array.from(event.target.parentNode.children).indexOf(
      event.target
    );
    selectShapeByLayer(layerIndex);
  }
});

function selectShapeByLayer(layerIndex) {
  if (layerIndex >= 0 && layerIndex < shapes.length) {
    var layers = document.getElementById("layers").getElementsByTagName("li");

    for (var i = 0; i < layers.length; i++) {
      layers[i].classList.remove("selected");
    }

    selectedShape = layerIndex;

    highlightSelectedShape();

    layers[layerIndex].classList.add("selected");

    // Show/hide sidebars based on the clicked shape type
    if (shapes[selectedShape].name.toLowerCase().includes("circle")) {
      showSidebar("sidebarCircle");
      hideSidebar("sidebarRectangle");
      hideSidebar("sidebarTriangle");
      hideSidebar("sidebarEllipse");
    } else if (shapes[selectedShape].name.toLowerCase().includes("rectangle")) {
      showSidebar("sidebarRectangle");
      hideSidebar("sidebarCircle");
      hideSidebar("sidebarTriangle");
      hideSidebar("sidebarEllipse");
    } else if (shapes[selectedShape].name.toLowerCase().includes("triangle")) {
      showSidebar("sidebarTriangle");
      hideSidebar("sidebarCircle");
      hideSidebar("sidebarRectangle");
      hideSidebar("sidebarEllipse");
    } else if (shapes[selectedShape].name.toLowerCase().includes("ellipse")) {
      showSidebar("sidebarEllipse");
      hideSidebar("sidebarCircle");
      hideSidebar("sidebarRectangle");
      hideSidebar("sidebarTriangle");
    }
  }
}
