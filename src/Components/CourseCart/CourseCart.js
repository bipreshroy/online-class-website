import React from 'react';

const CourseCart = (props) => {
    const courseCart = props.courseCart;
    let totalPrice = 0;
    for (let i = 0; i < courseCart.length; i++) {
        const course = courseCart[i];
        totalPrice = totalPrice + parseFloat(course.price);
    }
    const coursePrice = (totalPrice).toFixed(2);
    return (
        <div>
            <h4>Course Summary</h4> 
            <p>Chosen Courses : {courseCart.length}</p>
            <h4>Total Price : $ {coursePrice}</h4> 
        </div>
    );
};

export default CourseCart;