//import Card from 'react-bootstrap/Card';
//import scraper from '../assets/scraper.png';
//import pick from '../assets/pick.png';
//import anselm from '../assets/anselm.png';

//react icons imports
import { LiaSpiderSolid } from 'react-icons/Lia';
import { FaMotorcycle } from 'react-icons/Fa6';
import { BsPencilSquare } from 'react-icons/bs';
import { RiMovieFill } from 'react-icons/Ri';
import { AiOutlineArrowRight } from 'react-icons/Ai';


function Projects() {
  return (
    <div className="container mt-5 mb-5">
      {/*first row of projects */}
          <div className="row">
           <h3 className='fw-bold'>My Projects</h3>
           <div className="col-md-4 mt-3">
              <div className="card  shadow p-4  d-flex justify-content-center align-items-center">
                  <LiaSpiderSolid  style={{fontSize:"120px", color:"#008080"}}/>
                  <h3 className='mt-3' style={{fontSize:"25px"}}>Web Scrapper</h3>
                  <p className='mt-3 mb-3'>This web scraper is built using javascripts Puppetter library and is used to collect data from various e-cormerce sites based on the user  requirements.
                      It is also able to genetate exel files and CSV files  of the data scraped based on which one is suitable to the user.</p>

                  <a href="#" style={{color: "#008080", display: "inline-block", textDecoration: "none" }}>Learn More<AiOutlineArrowRight className='mx-2'/></a>  
              </div>   
           </div>

           <div className="col-md-4 mt-3">
              <div className="card  shadow p-4  d-flex justify-content-center align-items-center">
                  < FaMotorcycle style={{fontSize:"120px", color:"#008080"}}/>
                  <h3 className='mt-3' style={{fontSize:"25px"}}>Pick Piki Web Portal</h3>
                  <p className='mt-3 mb-3'> This is a  web application portal for a pick up and devivery company  that is used to enables easy and efficient management of their riders, drivers  , employees , customers and cash to ensure accountability and easy tracking of  resources that are owned by the company </p>
                  <a href="#" style={{color: "#008080", display: "inline-block", textDecoration: "none" }}>Learn More<AiOutlineArrowRight className='mx-2'/></a>  
              </div>   
           </div>

           <div className="col-md-4 mt-3">
              <div className="card  shadow p-4  d-flex justify-content-center align-items-center">
                < BsPencilSquare style={{fontSize:"120px", color:"#008080"}}/>
                <h3 className='mt-3' style={{fontSize:"25px"}}>Anselm&apos;s Blog Site</h3> 
                <p className='mt-3 mb-3'>This is a personal portfolio and bog site I designed and created built for a client using HTML5, JavaScript and Bootstrap5. It is used for posting blogs and articles concerning a wide variety of  topics ranging from technology , lifestyle ,sports and many more.</p>
                <a href="#" style={{color: "#008080", display: "inline-block", textDecoration: "none" }}>Learn More<AiOutlineArrowRight className='mx-2'/></a>  
              </div>   
           </div>
      
          </div>

          {/*second row of projects */}
          <div className="row">
            <div className="col-md-4 mt-3">
              <div className="card  shadow p-4  d-flex justify-content-center align-items-center">
                  <LiaSpiderSolid  style={{fontSize:"120px", color:"#008080"}}/>
                  <h3 className='mt-3' style={{fontSize:"25px"}}>TechOps lab Website</h3>
                  <p className='mt-3 mb-3'>This web scraper is built using javascripts Puppetter library and is used to collect data from various e-cormerce sites based on the user  requirements.
                      It is also able to genetate exel files and CSV files  of the data scraped based on which one is suitable to the user.</p>

                  <a href="#" style={{color: "#008080", display: "inline-block", textDecoration: "none" }}>Learn More<AiOutlineArrowRight className='mx-2'/></a>  
              </div>   
           </div>

           <div className="col-md-4 mt-3">
              <div className="card  shadow p-4  d-flex justify-content-center align-items-center">
                  < RiMovieFill style={{fontSize:"120px", color:"#008080"}}/>
                  <h3 className='mt-3' style={{fontSize:"25px"}}>Media Recommendation system</h3>
                  <p className='mt-3 mb-3'> This is a  web application portal for a pick up and devivery company  that is used to enables easy and efficient management of their riders, drivers  , employees , customers and cash to ensure accountability and easy tracking of  resources that are owned by the company </p>
                  <a href="#" style={{color: "#008080", display: "inline-block", textDecoration: "none" }}>Learn More<AiOutlineArrowRight className='mx-2'/></a>  
              </div>   
           </div>

           {/*<div className="col-md-4 mt-3">
              <div className="card  shadow p-4  d-flex justify-content-center align-items-center">
                < BsPencilSquare style={{fontSize:"120px", color:"#008080"}}/>
                <h3 className='mt-3' style={{fontSize:"25px"}}>Anselm&apos;s Blog Site</h3> 
                <p className='mt-3 mb-3'>This is a personal portfolio and bog site I designed and created built for a client using HTML5, JavaScript and Bootstrap5. It is used for posting blogs and articles concerning a wide variety of  topics ranging from technology , lifestyle ,sports and many more.</p>
                <a href="#" style={{color: "#008080", display: "inline-block", textDecoration: "none" }}>Learn More<AiOutlineArrowRight className='mx-2'/></a>  
              </div>   
  </div>*/}
      
          </div>

         
    </div>
  )
}

export default Projects