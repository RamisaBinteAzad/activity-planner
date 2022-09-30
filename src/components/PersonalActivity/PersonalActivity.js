import React, { useState } from 'react';
import './PersonalActivity.css'

const PersonalActivity = (props) => {
    console.log(props)
    const { activityPlan } = props;
    let exerciseTime = 0;
    for(const activity of activityPlan){
        
        exerciseTime = exerciseTime + activity.time;
       
    }
    const [breakTime, setBreakTime] = useState(0);
    const addBreakTime = (event) => {
        
        event.target.style.backgroundColor = "green";
        
        event = event.target.innerText;
         
        let number = event.match(/\d/g);
        
        number = number.join("")
         
         
        setBreakTime(number);
         
    } 
   
     
    
    
    return (
        <div className='personal-activity'>
            <div className='container  ps-5 d-flex  align-items-center  pt-4'>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" className="img-fluid w-25 rounded-circle me-3" alt="" />
                <div>
                    <h5>Zahid Hossain</h5>
                    <p className='text-muted '> <i class="me-2 fa-solid fa-location-dot"></i>Sydney,Australia</p>
                </div>


            </div>
      
            <div className=" py-3 mb-5 mt-5 mx-3 border border-light bg-personal-activity-container rounded mt-4 text-center">
                <div class="row  ">
                    <div class="col">
                        <span className='fw-bold  h5'>75</span>
                        <small className='text-muted'>Kg</small>
                    </div>
                    <div class="col">
                        <span className='fw-bold  h5'>6.5</span>

                    </div>
                    <div class="col">
                        <span className='fw-bold  h5'>25 </span>
                        <small className='text-muted'>yrs</small>
                    </div>
                </div>
                <div class="row  ">
                    <div class="col">
                        <span className='text-muted h6'>Weight</span>

                    </div>
                    <div class="col">
                        <span className='text-muted h6'>Height</span>

                    </div>
                    <div class="col">
                        <span className='text-muted h6'>Age</span>
                    </div>
                </div>
            </div>
            <h5 className='ps-3'>Add A Break</h5>
            <div className=" py-3 pe-1   mb-4 mx-3 border border-light bg-light rounded mt-4 text-center">
                <div className="row row-cols-5 ">
                    <div className="col">
                        <button  className="btn btn btn-primary py-2 px-1 rounded-circle" type="submit" onClick={event => addBreakTime(event)}>10m</button>
                    </div>
                    <div className="col">
                        <button className="btn btn btn-primary py-2 px-1 rounded-circle" type="submit" onClick={event => addBreakTime(event)}>20m</button>

                    </div>
                    <div className="col">
                        <button className="btn btn btn-primary py-2 px-1 rounded-circle" type="submit" onClick={event => addBreakTime(event)}>30m</button>
                    </div>
                    <div className="col">
                        <button className="btn btn btn-primary py-2 px-1 rounded-circle" type="submit" onClick={event => addBreakTime(event)}>40m</button>
                    </div>
                    <div className="col">
                        <button className="btn btn btn-primary py-2 px-1 rounded-circle" type="submit" onClick={event => addBreakTime(event)}>50m</button>
                    </div>
                </div>
                 
            </div>
            <h5 className='ps-3'>Activity Details</h5>
            <div className=" py-3   mx-3 border border-light bg-personal-activity-container rounded mt-4 text-center">
                <div class="row  ">
                    <div class="col">
                        <span className='fw-bold  h6'>Exercise time</span>
                         
                    </div>
                    <div class="col">
                        <span className='text-muted  h6'>{exerciseTime} minutes</span>
                         
                    </div>
                    
                </div>
              
                 
            </div>
            <div className="py-3 mb-5  mx-3 border border-light bg-personal-activity-container rounded mt-4 text-center">
                <div class="row  ">
                    <div class="col">
                        <span className='fw-bold  h6'>Break time</span>
                         
                    </div>
                    <div class="col">
                        <span className='text-muted  h6'>{breakTime} minutes </span>
                         
                    </div>
                    
                </div>
              
                 
            </div>
            <div className='mx-3'>
            <button className="btn btn-primary w-100 " type="button">Activity Completed</button>
            </div>
            
            
        </div>
    );
};

export default PersonalActivity;