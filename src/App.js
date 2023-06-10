import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Experience from "./experience/components/Experience";
import Dashboard from "./Dashboard/components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">ohohoho</header>
        <main>
          <Navbar />
          <Routes>
            <Route path="/experience" element={<Experience />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
