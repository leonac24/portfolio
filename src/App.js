import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import Dog from './components/Dog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <WorkExperience />
        <Projects />
        <Contact />
        <Dog />
      </main>
    </div>
  );
}

export default App;
