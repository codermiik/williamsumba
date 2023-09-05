import "./styles.css";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <section>
      <footer className="text-white py-3 footer" style={{ backgroundColor: "#DCDCDC" }}>
        <div className="row p-2">
            <div className="col-lg-6">
              <p style={{ color: "#008080", fontSize: "20px", fontWeight: "bold" , marginLeft:"5px" }}>William Sumba</p>
            </div>
            <div className="col-lg-6 text-center text-md-end" >
              <a href="https://twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer" className="mx-2 footer_icon">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer" className="mx-2 footer_icon">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer" className="mx-2 footer_icon">
                <FaFacebook />
              </a>
            </div>
          </div>
     
      </footer>
    </section>
  );
}

export default Footer;
