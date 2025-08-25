document.addEventListener("DOMContentLoaded", function() {
    // Open modal on .contact-trigger click
    document.querySelectorAll('.contact-trigger').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('contact-modal').style.display = 'block';
        });
    });

    // Close modal on .close-btn click
    document.querySelectorAll('.close-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.getElementById('contact-modal').style.display = 'none';
        });
    });

    // Optional: Close modal when clicking outside modal-content
    document.getElementById('contact-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
});