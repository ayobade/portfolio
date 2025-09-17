import React, { useState } from "react";

function Center() {
  const texts = ["PRODUCT DESIGN.", "WEB DEVELOPMENT.", "3D MODELLING"];
  const [copyText, setCopyText] = useState("COPY EMAIL");
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [activePreview, setActivePreview] = useState(null);
  const previewSrcByKey = {
    kb: "/public/preview-kb.jpeg",
    bottle: "/public/preview-bottle.jpeg",
    led: "/public/preview-led.png",
  };
  
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
          <div className="intro-layout">
            
            <div className="main-title">
              CREATIVE 
              <div className="rotating-text">
                <span>DESIGNER.</span>
                <span>DEVELOPER.</span>
                <span>3D ARTIST.</span>
              </div>
            </div>
            
            <div className="content-area">
              <div className="skills-section">
                <div className="skills-list">
                  <div>PRODUCT DESIGNER(UI/UX)</div>
                  <div>WEB DEVELOPER</div>
                  <div>MOTION DESIGNER</div>
                  <div>3D ARTIST</div>
                </div>
              </div>
              
              <div className="profile-section">
                <img src="/public/heroimg.png" alt="Makinde Ayobade" className="profile-image" />
              </div>
              
              <div className="latest-work">
                <div className="latest-label">LATEST WORK</div>
                <div className="work-title">MAKINDE'S</div>
              </div>
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
          
          <div className="fun-gallery single">
            <div className="gallery-item hotspot-container">
              <img src="/public/Fundesk.png" alt="Fun desk" />
              <button
                className="hotspot"
                style={{left:'63%', top:'10%', width:'10%', height:'22%'}}
                aria-label="Keyboard"
                onMouseEnter={() => setActivePreview('kb')}
                onMouseLeave={() => setActivePreview(null)}
                onFocus={() => setActivePreview('kb')}
                onBlur={() => setActivePreview(null)}
                onClick={() => setActivePreview(activePreview === 'kb' ? null : 'kb')}
              />
              <button
                className="hotspot"
                style={{left:'82%', top:'53%', width:'10%', height:'22%'}}
                aria-label="Bottle"
                onMouseEnter={() => setActivePreview('bottle')}
                onMouseLeave={() => setActivePreview(null)}
                onFocus={() => setActivePreview('bottle')}
                onBlur={() => setActivePreview(null)}
                onClick={() => setActivePreview(activePreview === 'bottle' ? null : 'bottle')}
              />
              <button
                className="hotspot"
                style={{left:'50%', top:'45%', width:'10%', height:'22%'}}
                aria-label="Bottle"
                onMouseEnter={() => setActivePreview('bottle')}
                onMouseLeave={() => setActivePreview(null)}
                onFocus={() => setActivePreview('bottle')}
                onBlur={() => setActivePreview(null)}
                onClick={() => setActivePreview(activePreview === 'bottle' ? null : 'bottle')}
              />
               <button
                className="hotspot"
                style={{left:'50%', top:'70%', width:'10%', height:'22%'}}
                aria-label="Bottle"
                onMouseEnter={() => setActivePreview('bottle')}
                onMouseLeave={() => setActivePreview(null)}
                onFocus={() => setActivePreview('bottle')}
                onBlur={() => setActivePreview(null)}
                onClick={() => setActivePreview(activePreview === 'bottle' ? null : 'bottle')}
              />
              <button
                className="hotspot"
                style={{left:'68%', top:'65%', width:'10%', height:'22%'}}
                aria-label="Bottle"
                onMouseEnter={() => setActivePreview('bottle')}
                onMouseLeave={() => setActivePreview(null)}
                onFocus={() => setActivePreview('bottle')}
                onBlur={() => setActivePreview(null)}
                onClick={() => setActivePreview(activePreview === 'bottle' ? null : 'bottle')}
              />
              <button
                className="hotspot"
                style={{left:'18%', top:'66%', width:'10%', height:'22%'}}
                aria-label="LED Panel"
                onMouseEnter={() => setActivePreview('led')}
                onMouseLeave={() => setActivePreview(null)}
                onFocus={() => setActivePreview('led')}
                onBlur={() => setActivePreview(null)}
                onClick={() => setActivePreview(activePreview === 'led' ? null : 'led')}
              />
              <div className={`hotspot-preview ${activePreview ? 'show' : ''}`}>
                <img src={previewSrcByKey[activePreview] || "/public/heroimg.png"} alt="Preview" />
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
