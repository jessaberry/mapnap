import store from "./reducers/store";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Experience from "./experience/components/Experience";
import Memory from "./memories/components/Memory";
import Trip from "./trip/components/Trip";
import Dashboard from "./Dashboard/components/Dashboard";
import Budget from "./budget/BudgetDashboard";
import { Provider } from "react-redux";

import MapView from "./mapview/components/MapView";
import { AdminPage } from "./content/pages/admin-page";
import { CallbackPage } from "./content/pages/callback-page";
import { HomePage } from "./content/pages/home-page";
import { NotFoundPage } from "./content/pages/not-found-page";
import { ProfilePage } from "./content/pages/profile-page";
import { PageLoader } from "./content/widgets/page-loader.mjs"
import { AuthenticationGuard } from "./helpers/Auth0/authentication-guard";

export const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }
  return (
    <Provider store={store}>

        <div className="App">
          <main>
            <Routes>
              <Route Path="/callback" element={<CallbackPage />} />
              <Route path="/trips/*" element={<Trip />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/memory" element={<Memory />} />
              <Route path="/map" element={<MapView />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/admin" element={<AdminPage />} />
              <Route path="/profile" element={<ProfilePage />} />


            </Routes>
          </main>
        </div>
    </Provider>
  );
}

