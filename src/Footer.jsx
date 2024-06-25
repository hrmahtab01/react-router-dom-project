import React from 'react'

const Footer = () => {
  return (
    <>
      
<section id="footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="connect_part">
                  <h2>Lets Connect</h2>
                  <p>Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
                  <div class="connect_icon">
                    <ul>
                      <li>
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="msg_part">
                  <h3>Let’s Message me</h3>
                  <div class="holder_one">
                  <input type="name" placeholder="Your name"/>
                  </div>
                  <div class="holder_one">
                    <input type="email" placeholder="Your email"/>
                    </div>
                    <div class="holder_last">
                      <input type="email" placeholder="Your email"/>
                      </div>
                     <a class="button" href="#">Submit</a>
                </div>
              </div>
            </div>
          </div>

        </section>
    </>
  )
}

export default Footer
