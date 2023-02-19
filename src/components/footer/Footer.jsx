import NavBar from "../navbar/Nav";
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
    <NavBar/>
    <div className="footer-contacts">
        <p>Tel: 0312345678</p>
        <p>Email: onlysweater@jp.com</p>
    </div>
    <div className="footer-link">
        <span>2022@only sweater</span>
    
    </div>
    </div>
  );
}

export default Footer;
