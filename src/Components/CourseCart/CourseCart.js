import React from 'react';
import './CourseCart.css'

const formatNum = (n) => parseFloat(n).toFixed(2);

const CourseCart = (props) => {
    const courseCart = props.courseCart;
    const subTotal = courseCart.reduce((subTotal, crc) => subTotal + crc.price, 0);
    const discount = subTotal * 0.20;
    const tax = subTotal * 0.05;
    return (
        <div className='cart'>
            <h4>Added Courses</h4>
            <ol>
                {
                    courseCart.map(course => <li>{course.title} (${course.price})</li>)
                }
            </ol>

            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            Billing section
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sub-total : </td>
                        <td>$ {formatNum(subTotal)}</td>
                    </tr>
                    <tr>
                        <td>Discount : </td>
                        <td>$ {formatNum(discount)}</td>
                    </tr>
                    <tr>
                        <td>Tax & VAT+ : </td>
                        <td>$ {formatNum(tax)}</td>
                    </tr>
                    <tr>
                        <td>Total-amount : </td>
                        <td>${formatNum((subTotal + tax) - discount)}</td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-sm btn-primary'>Checkout</button>
        </div>
    );
};

export default CourseCart;