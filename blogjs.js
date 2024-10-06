  // Sample encrypted text content and image URLs (for demonstration)
  const encryptedContent = {
    photography: {
      text: "Photography is a wonderful hobby that allows you to capture and preserve moments in time...",
      image: "assets/img/testimonials/testimonials-2.jpg"
    },
    hiking: {
      text: "Hiking is a great way to stay fit and enjoy the great outdoors...",
      image: "assets/img/testimonials/testimonials-2.jpg"
    },
    cooking: {
      text: "Cooking is not just a necessity but also a creative and rewarding hobby...",
      image: "assets/img/testimonials/testimonials-2.jpg"
    },
    painting: {
      text: "Painting is a fantastic way to express your creativity and relax...",
      image: "assets/img/testimonials/testimonials-2.jpg"
    }
  };

  // Function to dynamically inject content
  function injectContent() {
    console.log("Injecting content...");
    // For Photography
    document.getElementById('photo-text').innerHTML = encryptedContent.photography.text;
    document.getElementById('photo-img').src = encryptedContent.photography.image;
    console.log("Photography content loaded.");

    // For Hiking
    document.getElementById('hike-text').innerHTML = encryptedContent.hiking.text;
    document.getElementById('hike-img').src = encryptedContent.hiking.image;
    console.log("Hiking content loaded.");

    // For Cooking
    document.getElementById('cook-text').innerHTML = encryptedContent.cooking.text;
    document.getElementById('cook-img').src = encryptedContent.cooking.image;
    console.log("Cooking content loaded.");

    // For Painting
    document.getElementById('paint-text').innerHTML = encryptedContent.painting.text;
    document.getElementById('paint-img').src = encryptedContent.painting.image;
    console.log("Painting content loaded.");
  }

  // Run content injection after page load
  window.onload = injectContent;
