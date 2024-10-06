document.addEventListener("DOMContentLoaded", function() {
  // Load dynamic content (e.g., testimonials)
  loadTestimonials();
  
  function loadTestimonials() {
    // Simulate loading testimonials dynamically (this could be from an API or local file)
    const testimonials = [
      
    ];

    const testimonialsContainer = document.getElementById('testimonials-content');

    testimonials.forEach(testimonial => {
      const testimonialItem = `
        <div class="swiper-slide">
          <div class="testimonial-item">
            <p>${testimonial.feedback}</p>
            <h3>${testimonial.name}</h3>
          </div>
        </div>
      `;
      testimonialsContainer.insertAdjacentHTML('beforeend', testimonialItem);
    });
  }
});
