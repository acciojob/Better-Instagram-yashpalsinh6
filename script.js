//your code here
let divs = document.querySelectorAll('.image');

divs.forEach((div) => {
  div.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text/plain', this.id);
  });

  div.addEventListener('dragover', function (e) {
    e.preventDefault(); // This is necessary to allow dropping
  });

  div.addEventListener('drop', function (e) {
    e.preventDefault(); // This is necessary to allow dropping

    const draggedId = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedId);

    // Get the background images
    const draggedImage = window.getComputedStyle(draggedElement).backgroundImage;
    const targetImage = window.getComputedStyle(this).backgroundImage;

    // Swap the images
    draggedElement.style.backgroundImage = targetImage;
    this.style.backgroundImage = draggedImage;
  });
});