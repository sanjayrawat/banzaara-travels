// Main JavaScript for Banzaara Travels Clone

document.addEventListener('DOMContentLoaded', () => {
  // Placeholder for future interactive features
  // For example: mobile menu toggle, carousel initialization, FAQ accordion, form validation

  // Example: Smooth scroll for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
