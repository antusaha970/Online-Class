import './App.css';
import HeaDer from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaDer></HeaDer>
        <NavBar></NavBar>
      </header>
      <main>
        <div className='main-content container-fluid'>

          <div className="row">
            <div className="coursers col-md-8">

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
