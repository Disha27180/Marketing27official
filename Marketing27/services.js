// Scroll-triggered animations for each service section
    gsap.utils.toArray(".service-section").forEach(section => {
        const icon = section.querySelector(".service-icon");
        const content = section.querySelector(".service-content");
        const bgIcons = section.querySelectorAll(".background-icons .icon");

        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
            }
        })
        .from(icon, {
            opacity: 0,
            duration: 2,
        })
        .from(content, {
            opacity: 0,
            y: 50,
            duration: 2,
        }, 0)
        .from(bgIcons, {
            opacity: 0,
            scale: 0.5,
            stagger: 0.2,
            duration: 2,
        }, 0);
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