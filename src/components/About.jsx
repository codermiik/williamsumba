import Profile from '../assets/profile.jpeg';
import { FaUserGraduate } from 'react-icons/Fa6';
import {GoFileCode } from 'react-icons/go';
import {FaDownload } from 'react-icons/Fa6';

function About() {
  

  return (
  <section className='section1 '>
      <div className="container-fluid mb-5"  style={{backgroundColor:"#008080", height:"300px"}}>
        <div className='row'>
          <div className='container mb-5 d-flex justify-content-center align-items-center'>
            <div className='row'>
                <img src={Profile} alt=" profile" className='rounded-circle ' style={{width:"300px", height:"300px", position:"relative", bottom:"-80px" }} />
            </div>   
          </div>
          </div> 
      </div>

      <div className='container  mt-5 mb-3'>
          <div className='row'>
                <div className='col-md-6 mb-2 mt-5'>
                    <div className="card  shadow p-4  d-flex justify-content-center align-items-center">
                      <h4 style={{color:"#008080", font:"17px", marginTop:"5px"}}>Skills,Tools  and Experience</h4>
                      <GoFileCode style={{fontSize:"60px", color:"#008080"}} className='mt-3 mb-3'/>
                      <p className='mt-2' style={{fontSize:"15px"}}>Welcome to my portfolio! I&apos;m William Sumba, a passionate and dedicated Full Stack Web Application Developer and UI/UX Expert. With a diverse skillset and a keen eye for design, I thrive in creating seamless and delightful user experiences.</p>
                      <p className='mt-2' style={{fontSize:"15px"}}>My expertise spans across a range of technologies, including <span style={{backgroundColor:"yellow"}}>Node.js, React.js, Bootstrap 5, Tailwind CSS, SQL, and Vanilla JavaScript.</span>  Leveraging modern development tools such as Vite, Git, and GitHub, I ensure efficient and collaborative workflows in all my projects.</p>
                      <p className='mt-2' style={{fontSize:"15px"}}>As a Software Engineer at TechOps Lab, I&apos;ve had the privilege of working on cutting-edge projects that have allowed me to continuously refine my skills and stay at the forefront of the ever-evolving tech landscape.</p>
                      <p className='mt-2' style={{fontSize:"15px"}}>My passion for problem-solving, combined with a strong foundation in software engineering principles, enables me to craft robust and scalable solutions that meet the unique needs of each project. Whether it&apos;s building interactive web applications or creating visually stunning interfaces, I approach every challenge with enthusiasm and dedication.</p>

                    </div>
                </div>
                <div className='col-md-6 mb-2 mt-5'>
                    <div className="card  shadow p-4   d-flex justify-content-center align-items-center">
                    <h4 style={{color:"#008080", font:"17px"}}>Educational Background</h4>
                    <FaUserGraduate style={{fontSize:"60px", color:"#008080"}} className='mt-3 mb-3'/>
                    <p className='mt-2' style={{fontSize:"15px"}}>My journey in education has been shaped by a pursuit of knowledge and a passion for technology.</p>
                    <p className='mt-2' style={{fontSize:"15px"}}>I laid the foundation for my academic journey at <span style={{backgroundColor:"yellow"}}>Vihiga Friends High School,</span> where I cultivated a strong curiosity for the world of technology and its boundless possibilities.</p>
                    <p className='mt-2' style={{fontSize:"15px"}}>Driven by my passion for creating innovative solutions, I embarked on a <span style={{backgroundColor:"yellow"}}> Bachelor of Science in Software Engineering at Muranga University of Technology.</span> Throughout my four-year journey at the university, I have delved deep into the realms of software development, honing my skills in programming, software design, and problem-solving.</p>
                    <p className='mt-2' style={{fontSize:"15px"}}>My academic journey has instilled in me a strong commitment to continuous learning and professional growth. I am eager to apply my knowledge and skills to real-world challenges, building innovative applications that positively impact people&apos;s lives.. With a vision of creating seamless and user-centric applications, I am dedicated to making a meaningful contribution to the ever-evolving landscape of technology.</p>
                    
                    </div>
                </div>
       </div>
    </div>
    <div className='container-fluid mt-2 d-flex justify-content-center align-items-center' style={{backgroundColor:"#008080", height:"150px" }}>
      <a href="path_to_your_cv_file.pdf" download style={{textDecoration:"none"}}>
        <FaDownload className='mb-1' style={{fontSize: "50px", color: "white" }}  />
        <br />
        <p style={{ fontSize:"17px", color:"white"}}>Download CV</p>
      </a>
    </div>
    </section>
  
  )
}

export default About