document.addEventListener("DOMContentLoaded", function() {
    // Dynamically load the About Me content
    let aboutMeContainer = document.querySelector('.col-lg-8.pt-4.pt-lg-0.content');
    
    let aboutHTML = `
        <h3>Hi, I am Steve &amp; am a Data scientist</h3>
        <p class="fst-italic">
            I am a dedicated data scientist with a passion for transforming complex data into actionable insights.
        </p>
        <p>
            With expertise in data exploration, predictive modeling, and data-driven decision-making, I excel at using analytics to address real-world challenges. Proficient in tools like Python, SQL, and AWS, I specialize in automating workflows and delivering end-to-end data solutions...
        </p>
    `;
    
    aboutMeContainer.innerHTML = aboutHTML;
});


