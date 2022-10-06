import React, { useEffect, useRef, useState } from 'react';
import {Link ,NavLink} from 'react-router-dom';
import AnimatedLetters from "../AnimatedLetters";
import emailjs from '@emailjs/browser'


import './index.scss'





const Contact = () => {

    const [letterClass,setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(()=> {
         setTimeout(()=> {
            setLetterClass('text-animate-hover')
        },4000)
    
    
    
    
    
    },[])   

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_0enbdsc','template_1o5gfk5',form.current,'YKWbMEVThniESbQ_4')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message,please try again')
                }
            )
    }
    return(
        <div className='container contact2 contact-page'>
            <div className='text-zone'>
                <h1>
                    <span className={`${letterClass} _11`}>Contact</span>
                    <span className={`${letterClass} _13`}>&nbsp; me</span>
                </h1>
                <p>
                 I am interested in freelance opportunities - especially on ambitious
                 or large projects. However, if you have any other requests or
                 questions, don't hesitate to contact me using below form either.
                </p>

                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required  />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='email' required  />
                            </li>
                            <li >
                                <input type='text' name='subject' placeholder='Subject' required  />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required />
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                            
                        </ul>
                    </form>
                </div>


            </div>

        </div>






    );
}

export default Contact

