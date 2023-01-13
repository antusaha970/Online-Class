import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const { title, price, author, img } = props.course;
    const handleAddBtn = props.handleAddBtn;
    return (
        <div className='course-box'>
            <div className="feature-img">
                <img src={img} alt="" />
            </div>
            <h4>{title}</h4>
            <p>By: {author}</p>
            <b><p>${price}</p></b>
            <button className="btn btn-success" onClick={() => handleAddBtn(props.course)} >Buy Now</button>
        </div>
    );
};

export default Courses;