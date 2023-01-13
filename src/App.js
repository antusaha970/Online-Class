import './App.css';
import Courses from './Components/Courses/Courses';
import HeaDer from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';


function App() {
  const allCourses = [
    { title: "Javascript for beginners", author: "David Mion", price: 13.22, img: pic1 },
    { title: "Data structure and algo", author: "Antu Saha", price: 50.99, img: pic2 },
    { title: "Python with fun", author: "Ismail Hossian", price: 40.22, img: pic3 },
    { title: "React with redux", author: "Jasa Ten", price: 30.22, img: pic4 },
    { title: "C++ with development", author: "David Mion", price: 13.22, img: pic1 },
    { title: "English with vocabulary", author: "Babar", price: 50.99, img: pic2 },
    { title: "Content marketing", author: "Ismail Hossian", price: 40.22, img: pic3 },
    { title: "Music with art", author: "Jitu Banik", price: 30.22, img: pic4 },
    { title: "Problem solving with DSA", author: "David Mion", price: 13.22, img: pic1 },
    { title: "Tree structure", author: "Babar", price: 50.99, img: pic2 },
    { title: "Mathematics for computing", author: "Ismail Hossian", price: 40.22, img: pic3 },
    { title: "Art of programming", author: "Jitu Banik", price: 30.22, img: pic4 },
    { title: "Entrepreneurship", author: "David Mion", price: 13.22, img: pic1 },
    { title: "Educatee IELTS", author: "Babar", price: 50.99, img: pic2 },
    { title: "Guitar Playing", author: "Ismail Hossian", price: 40.22, img: pic3 },
    { title: "Google soft skills", author: "Jitu Banik", price: 30.22, img: pic4 },
  ];


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
                  allCourses.map(course => <div className='col-md-6 my-3'> <Courses course={course}></Courses></div>)
                }
              </div>
            </div>

            <div className="courses-cart col-md-4">

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
