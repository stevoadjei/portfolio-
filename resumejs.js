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
          <h4>Stephen Adjei</h4>
          <p><em>Innovative and deadline-driven Data sceintist with 7+ years of experience designing and developing user-centered problem soling models from initial concept to final, improve and scale exiting automotion systems.</em></p>
          <ul>
            <li>Koblenz, Germany, DE</li>
            <li>(+49) 1234-56789</li>
            <li>steveking@example.com</li>
          </ul>
        </div>

        <h3 class="resume-title">Skills</h3>
        <div class="resume-item pb-0">
          <h4>Hard skills</h4>
          <ul>
            <li>Software development and data analysis</li>
            <li>Reserach skills</li>
            <li>Aviation</li>
             <li>Security</li>
          </ul>
          <h4>Soft skills</h4>
          <ul>
            <li>Team player</li>
            <li>Leadership</li>
            <li>Fast Adaptaion Pace</li>
             <li>Organised</li>
          </ul>
        </div>

        <h3 class="resume-title">Education</h3>
        <div class="resume-item">
          <h4>Master of Electronic Gov </h4>
          <h5>2023 - Present</h5>
          <p><em>Uni Koblenz, Koblenz, DE</em></p>
        </div>
        <div class="resume-item">
          <h4>Bachelor of Computer Sceince</h4>
          <h5>2013 - 2017</h5>
          <p><em>University of Ghana, LEG, GH</em></p>
        </div>
         <div class="resume-item">
          <h4>AIR TRAFFIC CONTROL AND OPERATIONS </h4>
          <h5>2020 - 2022</h5>
          <p><em>Airforce Aviation School, BC, GH</em></p>
        </div>
      </div>
      
      <div class="col-lg-6">
        <h3 class="resume-title">Professional Experience</h3>
        <div class="resume-item">
          <h4>IT officer</h4>
          <h5>2017 - 2017</h5>
          <p><em>Environmental Protection Agency,
Accra Ghana, EPA HQ</em></p>
          <ul>
            <li>A team of 2 under the supervision of the IT
administrator migrated the agency ’s manual operations
to automated processes</li>
            <li>Provided Assistance to Senior Staff at Technical Review
Committee (TRC) Meetings</li>
            <li>Monitored performance and maintain systems according
to requirements</li>
          </ul>
        </div>
        

          <div class="resume-item">
          <h4>Software engineer</h4>
          <h5>2017 - 2017</h5>
          <p><em>MAERSK SHIPPING LIMITED,Tema, GH</em></p>
          <ul>
            <li>	Designed and implemented software solutions to optimize logistics and operational processes.</li>
            <li>Collaborated with cross-functional teams to gather requirements and deliver high-quality software products</li>
          </ul>
        </div>

        <div class="resume-item">
          <h4>Aviation Officer</h4>
          <h5>2017 - Presesnt</h5>
          <p><em>Armed forces, Ghana, GH</em></p>
          <ul>
            <li>Spearheaded air traffic control operations, ensuring seamless and safe air traffic movements</li>
            <li>Collaborated with a diverse team to coordinate and execute critical missions and exercises</li>
            <li>Demonstrated exceptional problem-solving skills in high-pressure situations</li>
          </ul>
        </div>
      </div>
    </div>
    `;

    // Inject the resume content into the container
    resumeContainer.innerHTML = resumeHTML;
});
