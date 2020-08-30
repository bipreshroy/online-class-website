import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Courses = (props) => {
    const {course_name,price} = props.course;
    return (
        <div className = "course-card">
            <h4>{course_name}</h4>
            <p>Course Price : $ {price}</p>
            <button className = "btn-enroll" onClick={()=>props.handleAddCourse(props.course)}><FontAwesomeIcon icon={faPlus} /> Enroll Now</button>
        </div>
    );
};

export default Courses;