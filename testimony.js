document.addEventListener("DOMContentLoaded", function() {
    // Find the container where the testimonial content should go
    let testimonialsContainer = document.querySelector('.testimonials-slider .swiper-wrapper');

    // Create the dynamic content as a string
    let testimonialsHTML = `
      <div class="swiper-slide">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
          <h3>Samson</h3>
          <h4>IT Admin EPA</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            Stephen consistently delivered exceptional results by turning complex data into clear, actionable insights.
            His expertise in predictive modeling and data automation played a key role in driving our business growth. He’s a
            collaborative and innovative data scientist, always pushing the boundaries of what’s possible with data.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>
      
      <div class="swiper-slide">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
          <h3>Emmah</h3>
          <h4>Ceo &amp; Founder Beauty company</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            An excellent problem solver who leverages data to drive impactful results. His work on our predictive models
            significantly enhanced business performance.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div class="swiper-slide">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
          <h3>Eva</h3>
          <h4>IT Officer Cal Bank</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            His technical skills and innovative approach to data science helped streamline our workflows and deliver key insights
            for decision-making.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>
    `;

    // Insert the content into the container
    testimonialsContainer.innerHTML = testimonialsHTML;
});
