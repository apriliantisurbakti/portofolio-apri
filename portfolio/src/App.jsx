import './App.css';
import CodeExamples from './components/CodeExamples';
import Education from './components/Education';
import Profile from './components/Profile';
import Skills from './components/Skills';


function App() {
  return (
    <div className="container">
      <Profile />
      <div className="info-section">
        <Education />
        <Skills />
      </div>
      <CodeExamples />
    </div>
  );
}






export default App;
