import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Experience from "./experience/components/Experience";
import Memory from "./memories/components/Memory";
import Trip from "./trip/components/Trip";
import Dashboard from "./Dashboard/components/Dashboard";
import Budget from "./budget/BudgetDashboard";
import { Provider } from "react-redux";
import store from "./reducers/store";
import MediaFileTest from "./Test/MedilaFile/MediaFileTest";
import SocialButtons from "./sharing/SocialButtons";
import MapView from "./mapview/components/MapView"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">Adventoro</header>
          <main>
            <Navbar />
            <SocialButtons />
            <Routes>
              <Route path="/trip" element={<Trip />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/memory" element={<Memory />} />
              <Route path="/map" element={<MapView />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/" element={<Dashboard />} />
              <Route Path="/test/media-file" element={<MediaFileTest />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
