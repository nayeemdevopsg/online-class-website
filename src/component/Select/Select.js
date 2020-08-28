import React from 'react';


const Select = (props) => {
    return (
        <div style={{border: "1px solid green", margin: "4px", padding: "7px", width: "700px", marginLeft: "30px", backgroundColor: "orange"}}>
            <h3>Course Name: {props.crs.name}</h3>
            <p>Course Duration: {props.crs.duration}</p>
            <p>Course Price: {props.crs.price} TK</p>
            <button style={{backgroundColor: "green", color: "black", borderRadius: "5px", padding: "7px" }}
            onClick={()=> props.handleCourse(props.cart)}
            >Enroll Now!</button>
        </div>
    );
};

export default Select;