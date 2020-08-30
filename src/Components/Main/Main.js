import React, { useState } from 'react';
import fakedata from '../../fakedata/fakedata'
import Courses from '../Courses/Courses';
import CourseCart from '../CourseCart/CourseCart';
import './Main.css';

const Main = () => {
    const [courses,setCourses] = useState(fakedata);
    const[courseCart,setCourseCart] = useState([]);
    const handleAddCourse = (course)=>{
        const newCourseCart = [...courseCart,course];
        setCourseCart(newCourseCart);
    }
    return (
        <div className ="main-container">
            <div className="course-container">
                {
                    courses.map(course => <Courses 
                        key ={course.id} course = {course} 
                        handleAddCourse ={handleAddCourse}
                        >
                    </Courses>)
                }
            </div>
            <div className="summary-container">
                <CourseCart courseCart = {courseCart}></CourseCart>
            </div>
        </div>
    );
};

export default Main;