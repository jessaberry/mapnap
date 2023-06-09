import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Test from './components/experience/Test';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* replace header with proper project title */}
          ohohoho
        </header>
        <main>
          <Navbar />
          <Routes>
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
