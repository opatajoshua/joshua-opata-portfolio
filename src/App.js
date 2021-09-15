// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="App text-white">
      <div className="home-section pb-10">
        <NavBar/>
        <div className="mt-16"></div>
        <Header/>
      </div>
    </div>
  );
}

export default App;
