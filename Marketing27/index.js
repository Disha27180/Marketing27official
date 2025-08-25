// Smooth scrolling for navigation links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        // Allow the default behavior
    });
});


document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
    // Accessibility: update aria-expanded
    this.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});


// Scroll down arrow click
document.querySelector('.scroll-down').addEventListener('click', () => {
  const principlesSection = document.getElementById('principles');
  window.scrollTo({
      top: principlesSection.offsetTop,
      behavior: 'smooth'
  });
});

//services mobile
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
      card.classList.toggle('flipped');
  });
});
;

  //modal functionality
  document.addEventListener("DOMContentLoaded", () => {
    // Modal Functionality
    const modal = document.getElementById("contact-modal");
    const triggers = document.querySelectorAll(".contact-trigger");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("contact-form");

    // Show modal when any trigger (Contact link or CTA button) is clicked
    triggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Prevent scrolling
            modal.querySelector("input").focus(); // Focus on first input for accessibility
        });
    });

    // Hide modal when close button is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
    });

    // Hide modal when clicking outside the modal content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Handle form submission (basic example)
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission
        alert("Thank you for your message! We'll get back to you soon.");
        form.reset(); // Clear the form
        modal.style.display = "none"; // Close the modal
        document.body.style.overflow = "auto";
    });
});

 