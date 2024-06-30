import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hy2z2gv', 'template_q0nbdyd', form.current, 'QelLNbQ4B3KuxmnNo')
      .then((result) => {
        console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Get in touch</h2>
        <span className="section_subtitle">Contact Me</span>

        <div className="contact_container container grid">
            <div className="contact_contact">
                <h3 className="contact_title">Talk to me</h3>

                <div className="contact_info">

                    <div className="contact_card">
                        <i className="bx bx-mail-send contact_card-icon"></i>

                        <h3 className="contact_card-title">Email</h3>
                        <span className="contact_card-data">user@gmail.com</span>

                        <a href="https://www.google.com/?pli=1" className="contact_button">
                            Write me 
                            <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                        </a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-whatsapp contact_card-icon"></i>
                        <h3 className="contact_card-title">Whatsapp</h3>
                        <span className="contact_card-data">01010071040</span>

                        <a href="https://web.whatsapp.com/" className="contact_button">
                            Write me 
                            <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                        </a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-messenger contact_card-icon"></i>
                        <h3 className="contact_card-title">Messenger</h3>
                        <span className="contact_card-data">user.fb123</span>

                        <a href="www.facebook.com" className="contact_button">
                            Write me 
                            <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                        </a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-upwork contact_card-icon"></i>
                        <h3 className="contact_card-title">Upwork</h3>
                        <span className="contact_card-data">My upwork profile</span>

                        <a href="https://www.upwork.com/nx/find-work/best-matches" className="contact_button">
                            Write me 
                            <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                        </a>
                    </div>

                </div>
            </div>

            <div className="contact_contact">
                <h3 className="contact_title">Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact_form">
                    <div className="contact_form-div">
                        <lable className="contact_form-tag">Name</lable>
                        <input type="text" name="name" className="contact_form-input" placeholder='Insert your name' />
                    </div>

                    <div className="contact_form-div">
                        <lable className="contact_form-tag">Mail</lable>
                        <input type="email" name="email" className="contact_form-input" placeholder='Insert your email' />
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <lable className="contact_form-tag">Project</lable>
                        <textarea name="project" cols="30" rows="10" className='contact_form-input' placeholder='Write your project'></textarea>
                    </div>

                    <button className="button_send button" >
                        Send Message
                        
                        {/* <i className='bx bx-send but_message'></i> */}
                        <svg 
                            class="Email_button"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24" 
                            viewBox="0 0 24 24" 
                            id="message" 
                            fill='none' 
                            >
                                <path d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"
                                fill="var(--container-color)" >
                                </path>
                        </svg>
                     </button> 
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact