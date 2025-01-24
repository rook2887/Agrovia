let isScrolling = false;

window.addEventListener('wheel', (e) => {
  e.preventDefault(); // Prevent default scrolling behavior

  if (isScrolling) return; // Prevent multiple triggers
  isScrolling = true;

  const sections = document.querySelectorAll('section');
  let currentSection = 0;

  // Find the current visible section
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      currentSection = index;
    }
  });

  // Determine the next section based on scroll direction
  if (e.deltaY > 0 && currentSection < sections.length - 1) {
    currentSection++;
  } else if (e.deltaY < 0 && currentSection > 0) {
    currentSection--;
  }

  // Scroll to the next section
  sections[currentSection].scrollIntoView({ behavior: 'smooth' });

  // Reset the scrolling lock after a delay
  setTimeout(() => {
    isScrolling = false;
  }, 800); // Adjust delay to match scroll duration
});