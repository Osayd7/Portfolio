import React, { useEffect, useState } from 'react';
import {Link ,NavLink} from 'react-router-dom'
import AnimatedLetters from "../AnimatedLetters";
import 'tachyons'
import Card from '../Cards/Cards';

import './index.scss';







const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(()=> {
         setTimeout(()=> {
            setLetterClass('text-animate-hover')
        },4000)
    
    
    
    
    
    },[])   

    return(
        <div>
            <div className="container home-page"> 
                <div className="text-zone">
                    <h1> 
                    <span className={letterClass}>Hi,</span>
                {/* <span className={`${letterClass} _12`}>i,</span> */}
                <br />
                <span className={`${letterClass} _12`}>I'm</span>
                {/* <span className={`${letterClass} _15`}>'m</span> */}
                <span className={`${letterClass} _13`}>&nbsp; Osayd</span>
                <span className={`${letterClass} _14`}>&nbsp; Hussein</span>
                <br />
                <span className={`${letterClass} _15`}>web/robot</span>
                <span className={`${letterClass} _16`}>&nbsp;developer.</span>
               

            
                    </h1>
                    <h2>Full Stack Developer/Robot Developer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
        
            </div>
                
            <div>
                <Card />
                {/* <span className={`${letterClass} _22`}>{<Card />}</span> */}
            </div>
        </div>

        

        




    );
}

export default Home;