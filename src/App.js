import { useState } from 'react';
import './App.css';
import CourseCart from './Components/CourseCart/CourseCart';
import Courses from './Components/Courses/Courses';
import HeaDer from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';


function App() {
  const allCourses = [
    { id: 1, title: "Javascript for beginners", author: "David Mion", price: 13.22, img: pic1 },
    { id: 2, title: "Data structure and algo", author: "Antu Saha", price: 50.99, img: pic2 },
    { id: 3, title: "Python with fun", author: "Ismail Hossian", price: 40.22, img: pic3 },
    { id: 4, title: "React with redux", author: "Jasa Ten", price: 30.22, img: pic4 },
    { id: 5, title: "C++ with development", author: "David Mion", price: 13.22, img: pic1 },
    { id: 6, title: "English with vocabulary", author: "Babar", price: 50.99, img: pic2 },
    { id: 7, title: "Content marketing", author: "Ismail Hossian", price: 40.22, img: pic3 },
    { id: 8, title: "Music with art", author: "Jitu Banik", price: 30.22, img: pic4 },
    { id: 9, title: "Problem solving with DSA", author: "David Mion", price: 13.22, img: pic1 },
    { id: 10, title: "Tree structure", author: "Babar", price: 50.99, img: pic2 },
    { id: 11, title: "Mathematics for computing", author: "Ismail Hossian", price: 40.22, img: pic3 },
    { id: 12, title: "Art of programming", author: "Jitu Banik", price: 30.22, img: pic4 },
    { id: 13, title: "Entrepreneurship", author: "David Mion", price: 13.22, img: pic1 },
    { id: 14, title: "Educatee IELTS", author: "Babar", price: 50.99, img: pic2 },
    { id: 15, title: "Guitar Playing", author: "Ismail Hossian", price: 40.22, img: pic3 },
    { id: 16, title: "Google soft skills", author: "Jitu Banik", price: 30.22, img: pic4 },
  ];

  const [courseCart, setCourseCart] = useState([]);

  const handleAddBtn = (course) => {
    const newCart = [...courseCart, course];
    setCourseCart(newCart);
  }
  console.log(courseCart);

  return (
    <div className="App">
      <header className="App-header">
        <HeaDer></HeaDer>
        <NavBar></NavBar>
      </header>
      <main>
        <div className='main-content container-fluid'>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {
                  allCourses.map(course => <div className='col-md-6 my-3'> <Courses course={course} handleAddBtn={handleAddBtn} ></Courses></div>)
                }
              </div>
            </div>
            <div className="courses-cart col-md-4">
              <CourseCart courseCart={courseCart}></CourseCart>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
