import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Experience from "./experience/components/Experience";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">ohohoho</header>
        <main>
          <Navbar />
          <Routes>
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
