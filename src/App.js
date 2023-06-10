import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Experience from "./experience/components/Experience";
import Memory from "./memories/components/Memory";
import { Provider, useSelector } from "react-redux";
import store from "./reducers/store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">ohohoho</header>
          <main>
            <Navbar />
            <Routes>
              <Route path="/experience" element={<Experience />} />
              <Route path="/memory" element={<Memory />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
