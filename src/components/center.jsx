import React, { useState } from "react";

function Center() {
  const texts = ["PRODUCT DESIGN.", "WEB DEVELOPMENT.", "3D MODELLING"];
  const [copyText, setCopyText] = useState("COPY EMAIL");
  const [showCheckmark, setShowCheckmark] = useState(false);
  
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("ayobademakinde@example.com");
      setCopyText("COPIED");
      setShowCheckmark(true);
      
      setTimeout(() => {
        setCopyText("COPY EMAIL");
        setShowCheckmark(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <main className="content">
      <section id="intro" className="intro-section">
        <div className="intro-text">
          <div className="intro-line">A CREATIVE</div>
          <div className="intro-line">SPECIALIZED IN</div>
          <div className="intro-line rotating-text">
            {texts.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>ABOUT.</h2>
            <p>
              Makinde, a Product Designer with a background in sales, blending
              empathy, problem-solving, and storytelling into user-centered
              design.
            </p>
            <p>
              I design iOS mobile apps, desktop apps, and websites. I've worked
              across fintech, biotech and telecom. I adapt ideas into intuitive
              experiences.
            </p>
            <p>
              I believe beauty builds trust, simplicity unlocks usability, and
              great questions lead to better outcomes.
            </p>
            <p>
              For me, design is about bringing ideas to life in ways that make
              people's everyday easier and empower them.
            </p>
          </div>
          <div className="about-image">
            <img src="/public/Dog.png" alt="Makinde's dog" />
          </div>
        </div>
      </section>
       <section id="projects" className="projects-section">
         <h2 className="section-title">Projects</h2>
         <div className="project-container">
           <div className="project-visual">
            <img src="/public/Project1.png" alt="Project 1" />
           </div>
           
           <div className="project-details">
             <h2>Specify - Web Design</h2>
             <div className="work-experience">
               <h4>Work Experience</h4>
               <span className="duration">2021 - 2024</span>
             </div>
             
             <div className="project-description">
               <p>From 2021 to 2024, I have been a Motion Designer at Specify, where I was brought on to develop a 3D identity and promote new feature launches.</p>
               
               <p>As the sole 3D nerd on the team, I built an extensive library of highly customizable assets and created an optimized render pipeline to distribute these assets across web pages, social media, and the product itself, in the fastest way possible.</p>
               
               <p>This role taught me to excel under tight deadlines.</p>
               
               <p>I also contributed to the website, refining my ability to craft cool looking and innovative assets. During this time, I gained extensive experience with tools like Figma, Spline, Lottie, Rive, React Three Fiber and Framer.</p>
               
               <p>Heck, we even had a framer award for this page.</p>
             </div>
             
             <button className="next-project-btn">
               View Project →
             </button>
           </div>
         </div>

         <div className="project-container">
           <div className="project-visual">
            <img src="/public/Project1.png" alt="Project 2" />
           </div>
           
           <div className="project-details">
             <h2>E-commerce Platform - Web Development</h2>
             <div className="work-experience">
               <h4>Freelance Project</h4>
               <span className="duration">2023 - 2024</span>
             </div>
             
             <div className="project-description">
               <p>Developed a full-stack e-commerce platform with modern React frontend and Node.js backend.</p>
               
               <p>Implemented responsive design, payment integration, user authentication, and admin dashboard with real-time inventory management.</p>
               
               <p>Used technologies including React, Node.js, MongoDB, Stripe API, and deployed on AWS with CI/CD pipeline.</p>
               
               <p>The platform handles over 1000+ daily transactions with 99.9% uptime and has received positive feedback from users.</p>
             </div>
             
             <button className="next-project-btn">
               View Project →
             </button>
           </div>
         </div>

         <div className="project-container">
           <div className="project-visual">
            <img src="/public/Project1.png" alt="Project 3" />
           </div>
           
           <div className="project-details">
             <h2>3D Architectural Visualization</h2>
             <div className="work-experience">
               <h4>Client Project</h4>
               <span className="duration">2022 - 2023</span>
             </div>
             
             <div className="project-description">
               <p>Created photorealistic 3D architectural visualizations for luxury residential and commercial projects.</p>
               
               <p>Specialized in interior design visualization, lighting design, and material texturing using Blender and Cinema 4D.</p>
               
               <p>Delivered interactive 360° virtual tours and VR experiences for client presentations.</p>
               
               <p>Worked with architects and interior designers to bring their concepts to life with stunning visual fidelity.</p>
             </div>
             
             <button className="next-project-btn">
               View Project →
             </button>
           </div>
         </div>

         <div className="project-container">
           <div className="project-visual">
            <img src="/public/Project1.png" alt="Project 4" />
           </div>
           
           <div className="project-details">
             <h2>Mobile App Design - Fintech</h2>
             <div className="work-experience">
               <h4>Product Design</h4>
               <span className="duration">2023 - 2024</span>
             </div>
             
             <div className="project-description">
               <p>Designed a comprehensive fintech mobile application focusing on user experience and accessibility.</p>
               
               <p>Created wireframes, prototypes, and design systems using Figma, with emphasis on security and ease of use.</p>
               
               <p>Conducted user research and usability testing to optimize the onboarding flow and transaction processes.</p>
               
               <p>The app achieved a 4.8/5 rating on app stores and increased user engagement by 40%.</p>
             </div>
             
             <button className="next-project-btn">
               View Project →
             </button>
           </div>
         </div>
       </section>
      <section id="fun" className="fun-section">
        <h2 className="section-title">Fun</h2>
        <div className="fun-content">
          <div className="fun-text">
            <p className="fun-intro">I'm probably deep into a video game, catching up on Formula 1 races, building the ultimate music playlist, or soaking in some fresh air outdoors.</p>
            <p className="fun-outro">Whether it's screen time or sunshine, I like to keep things fun and fast-paced. 🎮🏎️🎧</p>
          </div>
          
          <div className="fun-gallery">
            <div className="gallery-item">
              <img src="/public/gaming.jpg" alt="Gaming setup" />
              <div className="gallery-overlay">
                <h3>Gaming</h3>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src="/public/f1.jpg" alt="Formula 1 racing" />
              <div className="gallery-overlay">
                <h3>Formula 1</h3>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src="/public/music.jpg" alt="Music studio" />
              <div className="gallery-overlay">
                <h3>Music</h3>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src="/public/outdoors.jpg" alt="Outdoor adventure" />
              <div className="gallery-overlay">
                <h3>Outdoors</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <div className="contact-item">
            <h2>BOOK CALL</h2>
            <p>Via Calendly</p>
          </div>

           <div className="contact-item" onClick={copyEmailToClipboard}>
             <h2>
               {copyText}
               {showCheckmark && <span className="checkmark">✓</span>}
             </h2>
             <p>ayobademakinde@example.com</p>
           </div>

          <div className="contact-divider"></div>

          <div className="social-links">
            <div className="social-row">
              <a href="#">Twitter (X)</a>
              <a href="#">LinkedIn</a>
              <a href="#">Github</a>
              <a href="#">Behance</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Center;
