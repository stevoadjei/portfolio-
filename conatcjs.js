  // Initialize EmailJS
  (function () {
    emailjs.init("CyWzhWpjuz4OTxcPD"); // Replace 'YOUR_PUBLIC_KEY' with your actual public key from EmailJS
  })();

  // Wait for the form to be submitted
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Show loading message
    document.querySelector('.loading').style.display = 'block';

    // Collect the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Send the form data using EmailJS
    emailjs.send('service_4vlu25v', 'template_l2zck62s', {
      name: name,
      email: email,
      subject: subject,
      message: message
    })
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      
      // Hide loading message
      document.querySelector('.loading').style.display = 'none';
      
      // Show success message
      document.querySelector('.sent-message').style.display = 'block';  
      document.querySelector('.error-message').style.display = 'none';

      // Clear the form fields
      document.getElementById('contact-form').reset();

      // Hide success message after a short delay (e.g., 3 seconds)
      setTimeout(function() {
        document.querySelector('.sent-message').style.display = 'none';
      }, 3000);

    }, function(error) {
      console.log('FAILED...', error);

      // Hide loading message
      document.querySelector('.loading').style.display = 'none';

      // Show error message
      document.querySelector('.error-message').style.display = 'block';  
      document.querySelector('.sent-message').style.display = 'none';

      // Hide error message after a short delay (e.g., 3 seconds)
      setTimeout(function() {
        document.querySelector('.error-message').style.display = 'none';
      }, 3000);
    });
  });

