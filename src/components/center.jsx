import React, { useState, useEffect } from "react";

function Center() {
  const texts = ["PRODUCT DESIGN.", "WEB DEVELOPMENT.", "3D MODELLING"];
  const [copyText, setCopyText] = useState("COPY EMAIL");
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [activePreview, setActivePreview] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
    const previewSrcByKey = {
      bottle: "/bottle.png",
      game: "/game.png",
      car: "/car.png",
      camera: "/camera.png",
      headset: "/headset.png",
      image: "/image.png",
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
        {/* Mobile Hamburger Menu */}
        <div className="mobile-menu">
          <div className="mobile-top-bar">
              <img src="/logo.png" alt="Makinde Ayobade" className="mobile-top-logo" />
            <button 
              className="hamburger-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '[CLOSE]' : '[MENU]'}
            </button>
          </div>
          
          <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-nav-content">
              <div className="mobile-brand"></div>
              <nav className="mobile-nav-links">
                <a href="#intro" onClick={() => setIsMenuOpen(false)}>INTRO</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT ME</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
                <a href="#fun" onClick={() => setIsMenuOpen(false)}>FUN</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
              </nav>
              <div className="mobile-hire-section">
                <a href="#contact" className="mobile-hire-btn" onClick={() => setIsMenuOpen(false)}>
                  HIRE ME
                </a>
              </div>
              <div className="mobile-social">
                <div className="social-row">
                  
                  <a href="https://x.com/AyobadeMakinde" target="_blank" rel="noopener noreferrer">Twitter (X)</a>
                  <a href="https://www.linkedin.com/in/ayobade-makinde/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                  <a href="https://github.com/ayobade" target="_blank" rel="noopener noreferrer">Github</a>
                  <a href="https://www.behance.net/ayobademakinde" target="_blank" rel="noopener noreferrer">Behance</a>
                </div>
               
              </div>
            </div>
          </div>
        </div>

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
                  <img src="/heroimg.png" alt="Makinde Ayobade" className="profile-image" />
              </div>
              
              <div className="latest-work" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                <div className="work-title">MAKINDE'S</div>
                <div className="latest-label">LATEST WORK</div>
              </div>
            </div>
            
            
        
          </div>
        </section>
      <section id="about" className="about-section">
        <div className="about-content">
                <div className="about-text">
                  <h2>About Me.</h2>
                  <p>
                    Hey, I'm Makinde Ayobade a designer & developer who enjoys turning wild ideas into sleek, functional digital experiences.
                  </p>
                  <p>
                    I spend my days crafting clean, accessible interfaces that feel like home, and my nights bringing them to life with lines of code (sometimes fueled by too much coffee, sometimes by too many game respawns).
                  </p>
                  <p>
                    I'm big on details, pixel-perfect layouts, smooth interactions, and experiences that don't just work but feel right. Outside the screen, you'll catch me gaming, learning new tricks, or geeking out over fast cars.
                  </p>
                  <p>
                    If you're working on something fun, challenging, or just in need of a creative spark, let's talk, I love projects that push boundaries.
                  </p>
                </div>
          <div className="about-image">
            <img src="/Dog.png" alt="Makinde's dog" />
          </div>
        </div>
      </section>
       <section id="projects" className="projects-section">
         <h2 className="section-title">Projects</h2>
         <div className="projects-grid">
           <div className="project-card">
             <div className="project-image">
               <img src="/project1.png" alt="CrowdFundr" />
             </div>
             <div className="project-info">
               <div className="project-category">Crowdfunding • Community</div>
               <div className="project-title-row">
                 <h3 className="project-title">CrowdFundr</h3>
                 <span className="project-year">• 2025</span>
               </div>
               <div className="tech-stack">
                 <span className="tech-tag">HTML</span>
                 <span className="tech-tag">CSS</span>
                 <span className="tech-tag">JavaScript</span>
               </div>
               <div className="project-links">
                 <a href="https://github.com/ayobade/Fundr" target="_blank" rel="noopener noreferrer" className="project-link">
                   View Project →
                 </a>
               </div>
             </div>
           </div>

           <div className="project-card">
             <div className="project-image">
               <img src="/Project2.png" alt="Ai Chatbot" />
             </div>
             <div className="project-info">
               <div className="project-category">AI • Chatbot</div>
               <div className="project-title-row">
                 <h3 className="project-title">Ai Chatbot</h3>
                 <span className="project-year">• 2025</span>
               </div>
               <div className="tech-stack">
                 <span className="tech-tag">HTML</span>
                 <span className="tech-tag">CSS</span>
                 <span className="tech-tag">JavaScript</span>
               </div>
               <div className="project-links">
                 <a href="https://github.com/ayobade/AI-Chatbot" target="_blank" rel="noopener noreferrer" className="project-link">
                   View Project →
                 </a>
               </div>
             </div>
           </div>

           <div className="project-card">
             <div className="project-image">
               <img src="/project3.png" alt="Highmax3D" />
             </div>
             <div className="project-info">
               <div className="project-category">Movie • Tv Series</div>
               <div className="project-title-row">
                 <h3 className="project-title">Highmax3D</h3>
                 <span className="project-year">• 2025</span>
               </div>
               <div className="tech-stack">
                 <span className="tech-tag">HTML</span>
                 <span className="tech-tag">CSS</span>
                 <span className="tech-tag">JavaScript</span>
               </div>
               <div className="project-links">
                 <a href="https://github.com/ayobade/HighMax3D" target="_blank" rel="noopener noreferrer" className="project-link">
                   View Project →
                 </a>
               </div>
             </div>
           </div>

           <div className="project-card">
             <div className="project-image">
               <img src="/project4.png" alt="Guess Game" />
             </div>
             <div className="project-info">
               <div className="project-category">Game • Guess</div>
               <div className="project-title-row">
                 <h3 className="project-title">Guess Game</h3>
                 <span className="project-year">• 2025</span>
               </div>
               <div className="tech-stack">
                 <span className="tech-tag">HTML</span>
                 <span className="tech-tag">CSS</span>
                 <span className="tech-tag">JavaScript</span>
               </div>
               <div className="project-links">
                 <a href="https://guessggame.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                   View Project →
                 </a>
               </div>
             </div>
           </div>

           <div className="project-card">
             <div className="project-image">
               <img src="/project6.png" alt="Nouvella" />
             </div>
             <div className="project-info">
               <div className="project-category">Fashion • E-commerce</div>
               <div className="project-title-row">
                 <h3 className="project-title">Nouvella</h3>
                 <span className="project-year">• 2025</span>
               </div>
               <div className="tech-stack">
                 <span className="tech-tag">Figma</span>
                 <span className="tech-tag">Design System</span>
                 <span className="tech-tag">Prototyping</span>
               </div>
               <div className="project-links">
                 <a href="https://www.behance.net/gallery/222071613/Nouvela-A-fashion-E-commerce-Website-design" target="_blank" rel="noopener noreferrer" className="project-link">
                   View Project →
                 </a>
               </div>
             </div>
           </div>

           <div className="project-card">
             <div className="project-image">
               <img src="/project7.png" alt="PlayHive" />
             </div>
             <div className="project-info">
               <div className="project-category">Esport • Tournament</div>
               <div className="project-title-row">
                 <h3 className="project-title">PlayHive</h3>
                 <span className="project-year">• 2025</span>
               </div>
               <div className="tech-stack">
                 <span className="tech-tag">Figma</span>
                 <span className="tech-tag">Mobile Design</span>
                 <span className="tech-tag">User Research</span>
               </div>
               <div className="project-links">
                 <a href="https://www.behance.net/gallery/222071969/PlayHive-A-Next-Gen-eSports-Tournament-Platform" target="_blank" rel="noopener noreferrer" className="project-link">
                   View Project →
                 </a>
               </div>
             </div>
           </div>
         </div>
         <div className="view-all-projects">
           <button className="view-all-btn">
             View All Projects →
           </button>
         </div>
       </section>
      <section id="fun" className="fun-section">
        <h2 className="section-title">Fun</h2>
        <div className="fun-content">
          <div className="fun-text">
            <p className="fun-intro">When i'm not working, I'm probably deep into a video game, catching up on Formula 1 races, building the ultimate music playlist, or soaking in some fresh air outdoors.</p>
            <p className="fun-outro">Whether it's screen time or sunshine, I like to keep things fun and fast-paced. 🎮🏎️🎧</p>
          </div>
          
          <div className="fun-gallery single">
            <div className="gallery-item hotspot-container">
                <img src="/Fundesk.png" alt="Fun desk" />
              <button
                className="hotspot"
                style={{left:'63%', top:'10%', width:'10%', height:'22%'}}
                aria-label="Game"
                onMouseEnter={() => setActivePreview('game')}
                onMouseLeave={() => setActivePreview(null)}
                onFocus={() => setActivePreview('game')}
                onBlur={() => setActivePreview(null)}
                onClick={() => setActivePreview(activePreview === 'game' ? null : 'game')}
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
                aria-label="Image"
                onMouseEnter={() => setActivePreview('image')}
                onMouseLeave={() => setActivePreview(null)}
                onFocus={() => setActivePreview('image')}
                onBlur={() => setActivePreview(null)}
                onClick={() => setActivePreview(activePreview === 'image' ? null : 'image')}
              />
               <button
                className="hotspot"
                style={{left:'50%', top:'70%', width:'10%', height:'22%'}}
                aria-label="Car"
                onMouseEnter={() => setActivePreview('car')}
                onMouseLeave={() => setActivePreview(null)}
                onFocus={() => setActivePreview('car')}
                onBlur={() => setActivePreview(null)}
                onClick={() => setActivePreview(activePreview === 'car' ? null : 'car')}
              />
              <button
                className="hotspot"
                style={{left:'68%', top:'65%', width:'10%', height:'22%'}}
                aria-label="Camera"
                onMouseEnter={() => setActivePreview('camera')}
                onMouseLeave={() => setActivePreview(null)}
                onFocus={() => setActivePreview('camera')}
                onBlur={() => setActivePreview(null)}
                onClick={() => setActivePreview(activePreview === 'camera' ? null : 'camera')}
              />
              <button
                className="hotspot"
                style={{left:'18%', top:'66%', width:'10%', height:'22%'}}
                aria-label="Headset"
                onMouseEnter={() => setActivePreview('headset')}
                onMouseLeave={() => setActivePreview(null)}
                onFocus={() => setActivePreview('headset')}
                onBlur={() => setActivePreview(null)}
                onClick={() => setActivePreview(activePreview === 'headset' ? null : 'headset')}
              />
              <div className={`hotspot-preview ${activePreview ? 'show' : ''}`}>
                  {activePreview && previewSrcByKey[activePreview] && (
                    <img src={previewSrcByKey[activePreview]} alt="Preview" />
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="contact-content">
            <div className="contact-item">
              <h2><a href="https://calendly.com/ayobademakinde/30min" target="_blank" rel="noopener noreferrer">BOOK CALL</a></h2>
              <p>Via Calendly</p>
            </div>

           <div className="contact-item" onClick={copyEmailToClipboard}>
             <h2>
               {copyText}
               {showCheckmark && <span className="checkmark">✓</span>}
             </h2>
             <p>ayobademakinde@gmail.com</p>
           </div>

          <div className="contact-divider"></div>

            <div className="social-links">
              <div className="social-row">
                <a href="https://x.com/AyobadeMakinde" target="_blank" rel="noopener noreferrer">Twitter (X)</a>
                <a href="https://www.linkedin.com/in/ayobade-makinde/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/ayobade" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://www.behance.net/ayobademakinde" target="_blank" rel="noopener noreferrer">Behance</a>
              </div>
            </div>
        </div>
      </section>
        </main>
  );
}

export default Center;
