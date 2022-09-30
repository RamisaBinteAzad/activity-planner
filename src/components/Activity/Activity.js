import React from 'react';

const Activity = (props) => {
     


    const { img, name, age, activityType, about, id, time } = props.activity;
    return (
        <div className="col">
            <div className="card h-100 rounded p-3">
                <img className='img-fluid rounded' src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="pt-3 text-muted"> {about}</p>
                    <p ><span className='fw-bold'>Activity Type:</span> {activityType}</p>
                    <p className='fw-bold'>For Age :{age}</p>
                    <p className='fw-bold'>Time required : {time} min</p>
                    <button onClick={() => props.handleAddToActivityPlan( props.activity)}className="btn btn-primary w-100" type="button">Add To Your Plan</button>
                </div>
            </div>
        </div>







    );
};

export default Activity;