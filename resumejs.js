document.addEventListener("DOMContentLoaded", function() {
    // Locate the container where the Resume content will be injected
    let resumeContainer = document.querySelector('#resume .container');

    // Define the resume content in HTML format
    let resumeHTML = `
    <div class="section-title">
      <h2>Resume</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    
    <div class="row">
      <div class="col-lg-6">
        <h3 class="resume-title">Summary</h3>
        <div class="resume-item pb-0">
          <h4>Alice Barkley</h4>
          <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
          <ul>
            <li>Portland par 127, Orlando, FL</li>
            <li>(123) 456-7891</li>
            <li>alice.barkley@example.com</li>
          </ul>
        </div>

        <h3 class="resume-title">Skills</h3>
        <div class="resume-item pb-0">
          <h4>Graphic Design Skills</h4>
          <ul>
            <li>Adobe Creative Suite</li>
            <li>UX/UI Design</li>
            <li>Brand Development</li>
            <li>Illustration</li>
          </ul>
        </div>

        <h3 class="resume-title">Education</h3>
        <div class="resume-item">
          <h4>Master of Fine Arts &amp; Graphic Design</h4>
          <h5>2015 - 2016</h5>
          <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
        </div>
        <div class="resume-item">
          <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
          <h5>2010 - 2014</h5>
          <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
        </div>
      </div>
      
      <div class="col-lg-6">
        <h3 class="resume-title">Professional Experience</h3>
        <div class="resume-item">
          <h4>Senior Graphic Design Specialist</h4>
          <h5>2019 - Present</h5>
          <p><em>Experion, New York, NY</em></p>
          <ul>
            <li>Lead design and production communication materials.</li>
            <li>Supervised design team of 7 members.</li>
            <li>Managed project budgets ranging from $2,000 - $25,000.</li>
          </ul>
        </div>

        <div class="resume-item">
          <h4>Graphic Design Specialist</h4>
          <h5>2017 - 2018</h5>
          <p><em>Stepping Stone Advertising, New York, NY</em></p>
          <ul>
            <li>Developed numerous marketing programs (logos, brochures, infographics, presentations, advertisements).</li>
            <li>Managed 5 projects at a time under pressure.</li>
            <li>Consulted with clients on graphic design strategies.</li>
          </ul>
        </div>
      </div>
    </div>
    `;

    // Inject the resume content into the container
    resumeContainer.innerHTML = resumeHTML;
});
