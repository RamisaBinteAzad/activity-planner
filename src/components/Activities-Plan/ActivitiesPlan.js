import React, { useState, useEffect } from 'react';
import logo from '../../images/exercise.png'
import Activity from '../Activity/Activity';
import PersonalActivity from '../PersonalActivity/PersonalActivity';
import './Activities-Plan.css'
const ActivitiesPlan = () => {
    const [activities, setActivities] = useState([]);
    const [activityPlan, setActivityPlan] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, []);
    const handleAddToActivityPlan = (activity) => {
        
        // console.log(product);
        const newactivityPlan = [...activityPlan, activity]
        setActivityPlan(newactivityPlan);
    }

    return (


        <div className='container-fluid'>
            <div className="row   ">

                <div className="col-lg-9 col-12   activities-container   ">
                    <div className=' container mt-4'>
                        <div className='  ps-3  d-flex align-items-center  pt-4'>
                            <img className='img-fluid  ' src={logo} alt="" />
                            <h2 className='text-primary'>Activity Planner</h2>

                        </div>
                        <h5 className='fw-bold  ps-3 mb-4 pt-3 ' >Select today's activities</h5>
                        <div className='mb-4 pt-3'>
                            <div className='container'>
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    {
                                        activities.map(activity => <Activity
                                            key={activity.id}
                                            activity={activity}
                                            handleAddToActivityPlan={handleAddToActivityPlan}

                                        >

                                        </Activity>)
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container  pt-4 col-12 col-lg-3 ">
                    <PersonalActivity activityPlan={activityPlan}></PersonalActivity>
                    



                </div>
            </div>
        </div>

    );
};

export default ActivitiesPlan;