// Get the buttons
const whatsappButton = document.querySelector('.whatsapp-button');
const backToTopButton = document.getElementById('back-to-top');

// Function to check if the user has reached the bottom of the page
function checkScroll() {
  const scrollPosition = window.scrollY; // Current scroll position
  const pageHeight = document.documentElement.scrollHeight; // Total height of the page
  const viewportHeight = window.innerHeight; // Height of the viewport

  // Show buttons if the user is near the bottom (e.g., within 100px of the bottom)
  if (pageHeight - (scrollPosition + viewportHeight) < 100) {
    whatsappButton.style.display = 'flex'; // Show WhatsApp button
    backToTopButton.style.display = 'block'; // Show Back to Top button
  } else {
    whatsappButton.style.display = 'none'; // Hide WhatsApp button
    backToTopButton.style.display = 'none'; // Hide Back to Top button
  }
}

// Add scroll event listener
window.addEventListener('scroll', checkScroll);

// Back to Top button functionality
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll
  });
});