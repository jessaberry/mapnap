import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Test from "./experience/components/Test";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">ohohoho</header>
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
