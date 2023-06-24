import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Experience from "./experience/components/Experience";
import Memory from "./memories/components/Memory";
import Trip from "./trip/components/Trip";
import Dashboard from "./Dashboard/components/Dashboard";
import { Provider } from "react-redux";
import store from "./reducers/store";
import SocialButtons from "./sharing/SocialButtons";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">ohohoho</header>
          <main>
            <Navbar />
            <SocialButtons />
            <Routes>
              <Route path="/trip" element={<Trip />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/memory" element={<Memory />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
