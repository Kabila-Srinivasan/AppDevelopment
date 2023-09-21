import React from 'react'
import ButtonAppBar from './Navbar';
import './Home.css';

function Home() {
  return (
    <div>
    <ButtonAppBar/>
    <div className="bodyss">
    <section className="head">
    <h1 >Service Center</h1><br/><h2>"Best Repair Center"</h2><br/><h3>Repair Your Appliances in Low Budget</h3>
    </section>
    </div>
    <section className="about" id="aboutme">
    <div class="bottom" id="scroll">
    <div class="quote1"> 
    <h2 >About Us:</h2>
    <center><img class="prof" src="https://img.freepik.com/free-vector/variety-broken-home-electrical-appliances-flat-item-set-cartoon-damaged-stove-toaster-vacuum-cleaner-laptop-isolated-vector-illustration-collection-household-equipment-concept_74855-13274.jpg?w=2000"></img></center>
    <center>At [Your Home Appliances Service Center], we're dedicated to ensuring the uninterrupted functionality of your household appliances. Our mission is to be your trusted partner in appliance repair and maintenance, offering expert services by certified technicians. With a commitment to quality, affordability, and customer satisfaction, we use genuine parts and provide flexible scheduling options. Serving [Your City] and neighboring areas, we're your go-to solution for reliable appliance repair, maintenance, and installation. Contact us today for prompt, professional service that keeps your appliances running smoothly.</center>
     </div></div></section>
     <section classname="footer" id="footer">
     <div class="footer" id="contact">
          <div class="sb_footer section">
          <div class="sb_footer-links">
          <div class="sb_footer-links-div">
          <h4>Quick Links:</h4>
          <a href='#aboutme'>
          <p>AboutUs</p>
          </a>
          <a href='/our'>
              <p>Our Services</p>
              </a>
              <a href='/test'><p>Testimonials</p></a>
              <a href='/follow'><p>Follow Us</p></a>
          </div>
          <div class="sb_footer-links-div">
            <h4>Contact Us:</h4>
            <p>Email 1:<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noopener noreferrer">kabilasrini@gmail.com</a></p>
            <p>Email 2:homeappliance@gmail.com</p>
            <p>Mobile Number: 6384842423</p>
            </div>
          
            </div>
            </div>
       <hr></hr>
       <div class="sb_footer-below">
       <div class="sb_footer-copyright">
       <p>
       @Copyright {new Date().getFullYear()} Kabila Srinivasan. All right reserved.</p></div>
       </div>
            </div>
            </section>
    </div>
  )
}

export default Home
