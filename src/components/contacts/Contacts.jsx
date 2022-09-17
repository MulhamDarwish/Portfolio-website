import React from 'react'
import './contacts.css'
import {MdEmail} from 'react-icons/md'
import {AiFillFacebook} from 'react-icons/ai'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4i5vm1m', 'template_fjblt4r', form.current, 'lVpaRm4dxN20STmSW')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Conteact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />  
            <h4>Email</h4>
            <h5>mulham.darwish@proton.me</h5>
            <a href="mailto:mulham.darwish@proton.me" target="_blank">Send a messge</a>
          </article>
          <article className="contact__option">
            <AiFillFacebook className="contact__option-icon" />  
            <h4>Messenger</h4>
            <h5>mulham.darwish</h5>
            <a href="https://m.me/mulham.darwish" target="_blank">Send a messge</a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare className="contact__option-icon" />  
            <h4>Whatsapp</h4>
            <h5></h5>
            <a href ="https://api.whatsapp.com/send?phone=+40727295030" target="_blank">Send a messge</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts