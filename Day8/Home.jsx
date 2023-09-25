import React from 'react'
import ButtonAppBar from './Navbar';
import './Home.css';

function Home() {
  return (
    <div>
    <ButtonAppBar/>
    <div className="tedy">
    <section className="head">
    <h1 >Service Center</h1><br/><h2>"Best Repair Center"</h2><br/><h3>Repair Your Appliances in Low Budget</h3>
    </section>
    </div>
    <section className="about" id="aboutme">
    <div class="bottom" id="scroll">
    <div class="quote1"> 
    <h2 >Home Tech Savers</h2>
    <center><img class="prof" src="https://img.freepik.com/free-vector/variety-broken-home-electrical-appliances-flat-item-set-cartoon-damaged-stove-toaster-vacuum-cleaner-laptop-isolated-vector-illustration-collection-household-equipment-concept_74855-13274.jpg?w=2000"></img></center>
    <center>At [Home Tech Savers], we understand the importance of smoothly running home appliances in your daily life. Whether it's a refrigerator that keeps your groceries fresh, a washing machine that ensures your clothes are clean and ready, or a dishwasher that takes care of your post-meal cleanup, these appliances are essential for a comfortable and efficient household.

We are your dedicated partner for all your home appliance repair and maintenance needs. With a team of highly skilled and experienced technicians, we take pride in providing prompt, reliable, and cost-effective solutions to keep your appliances functioning at their best. </center>
     </div></div></section>
     <section classname="footer" id="footer">
     <div class="footer" id="contact">
          <div class="sb_footer section">
          <div class="sb_footer-links">
          <div class="sb_footer-links-div">
          <h4>Quick Links:</h4>
          <a href='/privacy'>
          <p>Privacy Policy</p>
          </a>
          <a href='/terms'>
              <p>Terms and Conditions</p>
              </a>
              <a href='/about'><p>About us</p></a>
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
