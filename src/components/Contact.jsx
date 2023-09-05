import { FaMapLocationDot } from 'react-icons/Fa6';
import { MdEmail } from 'react-icons/Md';
import { BiSolidPhoneCall } from 'react-icons/Bi';


function Contact() {
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <h3 className='fw-bold'>Contact Me</h3>
          <div className="col-md-6 text-center mt-3 ">
              <div className="card  shadow p-4  d-flex justify-content-center align-items-center">
                <FaMapLocationDot className='icon'/> 
                <h5 className='fw-bold mt-2'>My Address</h5>  
                <p>Nairobi</p>
              </div>   
           
           
           <div className='row mt-3'>
                <div className='col-md-6 text-center mt-3'> 
                  <div className="card  shadow p-4  d-flex justify-content-center align-items-center">
                    <MdEmail className='icon'/> 
                    <h5 className='fw-bold'>Email Me</h5>  
                    <p><a href="mailto:williamsumba2019@gmail.com" className='text-dark' style={{textDecoration:"none"}}>williamsumba2019@gmail.com</a></p>  
                  </div>
                  </div>   
               

                <div className='col-md-6 text-center mt-3'> 
                  <div className="card  shadow p-4  d-flex justify-content-center align-items-center">
                    <BiSolidPhoneCall className='icon'/> 
                    <h5 className='fw-bold'>Call Me</h5>  
                    <p><a href="tel:+254798355522" className='text-dark' style={{textDecoration:"none"}}>+254 798355522</a></p> 
                  </div>
                </div>
          </div>
        </div>

        <div className="col-md-6 text-center mt-3">
           <div className="card shadow p-4">
                <h3 className="text-center mb-4 fw-bold">Send Message</h3>
                <form>
                      <div className="mb-3 d-flex">
                        <input type="text" className="form-control me-2" id="name" placeholder="Enter your name" />
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                      </div>
                      <div className="mb-3">
                        <input type="text" className="form-control" id="subject" placeholder="Enter the subject" />
                      </div>
                      <div className="mb-3">
                        <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                      </div>
                      <button type="submit" className="btn text-white" style={{backgroundColor:"#008080"}}>Send Message</button>
                </form>
            </div>

        </div>
      </div>
      
        
    </div>
  )
}

export default Contact