import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import {Link ,NavLink} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';



const About = () => {
    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(()=> {
        setTimeout(()=> {
           setLetterClass('text-animate-hover')
       },3000)
   
   
   },[])   
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <span className={`${letterClass} _11`}>About</span>
                <span className={`${letterClass} _13`}>&nbsp; me</span>
                    
                </h1>
                <p> I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p> I am an engineering graduate who has been involved with integration of mechanical engineering, automation, software
                engineering and control. Possess a strong organizational skill as well as problem-solving skills.
                </p>
               
            </div>


            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                    <FontAwesomeIcon icon = {faPython} color='#4B8BBE' />
                    </div>
                    <div className='face2'>
                    <FontAwesomeIcon icon = {faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                    <FontAwesomeIcon icon = {faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                    <FontAwesomeIcon icon = {faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                    <FontAwesomeIcon icon = {faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                    <FontAwesomeIcon icon = {faGitAlt} color='#EC4D28' />
                    </div>
                </div>
                

            </div>









        </div>






    );
}


export default About