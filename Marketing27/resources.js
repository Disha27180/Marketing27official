
// Optional: Add interactive flipping if needed
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Optional scroll animation for down arrow
    const scrollDown = document.querySelector('.scroll-down');
    scrollDown?.addEventListener('click', () => {
        document.querySelector('#tools')?.scrollIntoView({ behavior: 'smooth' });
    });
});

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