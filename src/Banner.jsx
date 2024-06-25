import './index.css'

function Banner() {
  return (
    <>
       <section id="banner">
            <div class="dv_part">
                <h2>Developer</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="banner_text_part">
                            <h4>Hi, I  am</h4>
                            <h1>Mary Hardy</h1>
                            <p>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>

                            <div class="banner_btn">
                           <button class="navbtn"><i class="fa-solid fa-download banner_icon"></i>Download CV</button>
                           <button class="navbtn"><i class="fa-solid fa-phone banner_icon"></i>Contact</button>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-6">
                        <div class="banner_img_part">
                            <div class="circle_one">
                                <img src="/photos/Ellipse 3.png" alt="circle one"/>
                            </div>
                            <div class="circle_two">
                                <img src="/photos/Ellipse 2.png" alt="circle two"/>
                            </div>
                            <div class="circle_three">
                                <img src="/photos/Ellipse 1.png" alt="cicle three"/>
                            </div>
                            <div class="banner_Img">
                                <img src="/photos/banner.png" alt=" banner img"/>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>

        

    </>
  )
}

export default Banner
