// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        
        // Simple validation
        let isValid = true;
        form.querySelectorAll('[required]').forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        if (isValid) {
            // In a real site, you would send this data to a server
            alert('Thank you for your inquiry! We will contact you soon.');
            form.reset();
        } else {
            alert('Please fill in all required fields');
        }
    });
}
