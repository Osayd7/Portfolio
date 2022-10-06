import React from "react";
import './Cards.scss'
import 'tachyons'

import robot from '../../assets/Robot.jpg'






const Card = () => {
    return(
        <div >
            <div className="card">
            <h1 className="center">Projects</h1>
                <article className=" dib br3 pa3 ma2 grow bw2 shadow-1">
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                    <h1 className="f6 tex f4-ns mv0">Autounoums Hospital Service Mobile Robot</h1>
                    
                    </div>
                    <div className="cont">
                    <div className="photo">
                    <img className='robot' src={robot} alt='Robot'></img>
                    </div>
                    <p className="cardp">
                   
                    This is a mobile robot that can travel autonomously as a delivery system between different sections of hospitals.          
                    This work was focused on developing map building and locomotion concepts to find the path with obstacle avoidance 
                    capability to preform the required tasks autonomously.These tasks were implemented using Raspberry pi 4 as a mini-computer 
                    with the integration of the Robot Operating system (ROS) and was coded using c++ and python. 
                   
                    </p>
                    </div>
                    
                    
                </div>
                </article>
            </div>

            <div className="card">
            
                <article className=" dib br3 pa3 ma2 grow bw2 shadow-1">
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                    <h1 className="f3 tex f4-ns mv0">Jerusalem Home Rental (in Progress)</h1>
                    </div>
                    <p className="cardp">
                    Currently working on web page development using the MERN stack (MongoDB,Express.js,ReactJs and Node.js) to develop 
                    a website that makes finding houses for rent easier and accessible for everyone in the Jerusalem district.
                    </p>

              
                    
                
                    
                </div>
                </article>
            </div>


           
        </div>

    );
}

export default Card