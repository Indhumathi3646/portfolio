import './Nav.css'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import TextType from '../bits/bits';

export default function Nav() {
  let navigate = useNavigate();
  const nameRef = useRef();
  const btnRef = useRef();
  const iconsRef = useRef([]);
useEffect(() => {
  // Floating effect for name
  gsap.to(nameRef.current, {
    y: -10,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });
}, []);
  return (
    <div className="name">
      <h1 className="head" ref={nameRef}>Indhumathi</h1>
<TextType 
text={[
         "Frontend Developer,Java Full Stack Developer"
        ]}  
  typingSpeed={85}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter=" "
className='bits'/>
      <div className="btn-group" ref={btnRef}>
        <button onClick={()=>(navigate("/Allprojects"))} className="btn1 btn-primary" >View My Work</button>
        <button className="btn1 btn-primary" onClick={()=>navigate("/Contact")}>Let's Connect</button>
      </div>
      <div className="social-icons">
        <a
          href="https://github.com/Indhumathi3646"
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (iconsRef.current[0] = el)}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/indhumathi046/"
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (iconsRef.current[1] = el)}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rindhumathipkr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (iconsRef.current[2] = el)}
        >
          <FaEnvelope />
        </a>
      </div>
      
    </div>
  );
}
