import React from 'react'
import '../MyCSS/Team.css'
// import {Link} from "react-router-dom";
export default function Team(props) {
  return (
    <>
      <div className="team">
        <video autoPlay muted loop src={props.bgvideo} />

        <div className="team-container">
          <div className="coordies">
            <div className="coordi-heading">
              <h1>Coordinators 2022-23</h1>
            </div>
            <div className="coordi-container">
              <div className="coordi-card">
                <div className="left">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div class="image__overlay ">
                    <div className="contact">
                      <a href="" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:aryanr20@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h4>Aryan Raj</h4>
                  <h4>Y20 ME</h4>
                </div>
              </div>
              <div className="coordi-card">
                <div className="left">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/adi_palmate_7/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/aditya.palmate" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:patukaram20@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h4>Palmate Aditya </h4>
                  <h4>Y20 AE</h4>
                </div>
              </div>
              <div className="coordi-card">
                <div className="left">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/p.s.ingh02/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/prabuddha.singh.73" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:prabuddhas20@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h4>Prabuddha Singh</h4>
                  <h4>Y20 AE</h4>
                </div>
              </div>
              <div className="coordi-card">
                <div className="left">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/sahil.exe_not_responding/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100057870151986" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:sahilk20@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h4>Sahil Kumar</h4>
                  <h4>Y20 PHY</h4>
                </div>
              </div>

            </div>
          </div>
          <div className="secies">
            <div className="secy-heading">
              <h1>Secretaries 2022-23</h1>
            </div>
            <div className="secy-container">
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/abhinaba_iitk/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100075030503180" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:abhinabam21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Abhinaba</h5>
                  <h5>Y21 CHE</h5>
                </div>
              </div>
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/somber.sparkles/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100072143262984" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:aakanksha21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Aakanksha</h5>
                  <h5>Y21 AE</h5>
                </div>
              </div>
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/alka.1308/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100074953073407" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:alka21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Alka </h5>
                  <h5>Y21 ME</h5>
                </div>
              </div>
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/ambujpyne/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100075328710987" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:ambujp21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Ambuj Pyne</h5>
                  <h5>Y21 AE</h5>
                </div>
              </div>
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/_arpit.raj_/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100074288032644" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:arpitr21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Arpit Raj</h5>
                  <h5>Y21 CE</h5>
                </div>
              </div>
            </div>
            
            <div className="secy-container">
            <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/omkar19_c/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100023522828980" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:chavan21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Chavan Omkar</h5>
                  <h5>Y21 ME</h5>
                </div>
              </div>
            <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/himanshoe.24/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100074809706361" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:himansh21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Himanshu</h5>
                  <h5>Y21 ECO</h5>
                </div>
              </div>
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/manasvikweera/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/search/top/?q=manasvi%20kweera" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:manasvi21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Manasvi</h5>
                  <h5>Y21 ES</h5>
                </div>
              </div>
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/netrajj/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100074911556032" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:netraj1@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Netraj</h5>
                  <h5>Y21 AE</h5>
                </div>
              </div>
              
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/mercapt4758/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:piyushkc21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Piyush</h5>
                  <h5>Y21 PHY</h5>
                </div>
              </div>
              
            </div>
            <div className="secy-container">
            <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/prakkhar.mishra/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100075157636818" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:prakharm21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Prakhar</h5>
                  <h5>Y21 MSE</h5>
                </div>
              </div>
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/pulakgautam/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100075222612619" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:pulakg21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Pulak</h5>
                  <h5>Y21 ECO</h5>
                </div>
              </div>
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/arca_ane/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100075474540516" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:rahulkj21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Rahul Jha</h5>
                  <h5>Y21 CE</h5>
                </div>
              </div>
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/rishimaharikumar/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100075280689618" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:rishimah21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Rishima</h5>
                  <h5>Y21 PHY</h5>
                </div>
              </div>
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/s.ritwikk/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/ritwikshankar10" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:ritwiks21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Ritwik</h5>
                  <h5>Y21 AE</h5>
                </div>
              </div>
              
            </div>
            <div className="secy-container">
            <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/sarthakagrwl/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100009897485098" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:asarthak21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Sarthak</h5>
                  <h5>Y21 EE</h5>
                </div>
              </div>
              <div className="secy-card">
                  <div className="left-secy">
                    <img className='image__img' src={props.techkriti} alt="" />
                    <div id='image__overlay__secy' class="image__overlay ">
                      <div className="contact">
                        <a href="https://www.instagram.com/shreypatel1408/" target="blank"><img src={props.insta} alt="" /></a>
                        <a href="https://www.facebook.com/shrey.patel.5243" target="blank"><img src={props.fb} alt="" /></a>
                        <a href="mailto:shreypatel21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <h5>Shrey Patel</h5>
                    <h5>Y21 CE</h5>
                  </div>
                </div>
              <div className="secy-card">
                  <div className="left-secy">
                    <img className='image__img' src={props.techkriti} alt="" />
                    <div id='image__overlay__secy' class="image__overlay ">
                      <div className="contact">
                        <a href="https://www.instagram.com/_._shutter.up_/" target="blank"><img src={props.insta} alt="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100074928835076" target="blank"><img src={props.fb} alt="" /></a>
                        <a href="mailto:shreyashn21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <h5>Shreyash</h5>
                    <h5>Y1 ME</h5>
                  </div>
                </div>
              <div className="secy-card">
                  <div className="left-secy">
                    <img className='image__img' src={props.techkriti} alt="" />
                    <div id='image__overlay__secy' class="image__overlay ">
                      <div className="contact">
                        <a href="https://www.instagram.com/sujeet9437/" target="blank"><img src={props.insta} alt="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100007548798972" target="blank"><img src={props.fb} alt="" /></a>
                        <a href="mailto:sjeet21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <h5>Sujeet</h5>
                    <h5>Y21 ME</h5>
                  </div>
                </div>
              <div className="secy-card">
                  <div className="left-secy">
                    <img className='image__img' src={props.techkriti} alt="" />
                    <div id='image__overlay__secy' class="image__overlay ">
                      <div className="contact">
                        <a href="https://www.instagram.com/suman_b29/" target="blank"><img src={props.insta} alt="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100075126168933" target="blank"><img src={props.fb} alt="" /></a>
                        <a href="mailto:sumanb21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <h5>Suman</h5>
                    <h5>Y21 AE</h5>
                  </div>
                </div>
              
            </div>
            <div className="secy-container">
            <div className="secy-card">
                  <div className="left-secy">
                    <img className='image__img' src={props.techkriti} alt="" />
                    <div id='image__overlay__secy' class="image__overlay ">
                      <div className="contact">
                        <a href="https://www.instagram.com/ujjwalkumartiwary1/" target="blank"><img src={props.insta} alt="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100053853600178" target="blank"><img src={props.fb} alt="" /></a>
                        <a href="mailto:ujjwalk21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <h5>Ujjwal</h5>
                    <h5>Y21 ME</h5>
                  </div>
                </div>
              <div className="secy-card">
                <div className="left-secy">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div id='image__overlay__secy' class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/__v.shaily__/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100075226325364" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:vaibhavs21@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h5>Vaibhav</h5>
                  <h5>Y21 AE</h5>
                </div>
              </div>
              
            </div>
          </div>

          <div className="coordies">
            <div className="coordi-heading">
              <h1>Ex - Coordinators</h1>
            </div>
            <div className="coordi-container">
              <div className="coordi-card">
                <div className="left">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/mo_in_mo_out/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100037357815114" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:moinahmd@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h4>Moin Ahmed</h4>
                  <h4>Y19 EE</h4>
                </div>
              </div>
              <div className="coordi-card">
                <div className="left">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/mohitanand157/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/profile.php?id=100039551982898" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:mohit@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h4>Mohit Anand</h4>
                  <h4>Y19 ME</h4>
                </div>
              </div>
              <div className="coordi-card">
                <div className="left">
                  <img className='image__img' src={props.techkriti} alt="" />
                  <div class="image__overlay ">
                    <div className="contact">
                      <a href="https://www.instagram.com/pranshu2039/" target="blank"><img src={props.insta} alt="" /></a>
                      <a href="https://www.facebook.com/pranshu.singhal.963" target="blank"><img src={props.fb} alt="" /></a>
                      <a href="mailto:psinghal@iitk.ac.in"><img src={props.envelope} alt="" /></a>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <h4>Pranshu Singhal</h4>
                  <h4>Y19 ME</h4>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

