// Array of fun activities
const activities = [
  { text: "Go on a picnic", img: null },
  { text: "Make a blanket fort", img: null },
  { text: "Look at this picture of a petootoo", img: "./resources/images/potato.avif" },
  { text: "Have a movie marathon", img: null },
];

// Get the button and the display element
const button = document.getElementById('inspoButton');
const display = document.getElementById('activityDisplay');
const image = document.getElementById('activityImage');

// Add click event listener
button.addEventListener('click', () => {
  // Pick a random activity
  const randomActivity = activities[Math.floor(Math.random() * activities.length)];
  
  // Set text
  display.textContent = randomActivity.text;

  // Handle image (if present)
  if (randomActivity.img) {
    image.src = randomActivity.img;
    image.style.display = "block"; // show the image
  } else {
    image.style.display = "none"; // hide the image if not applicable
  }
});
