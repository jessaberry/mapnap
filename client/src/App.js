import store from "./reducers/store";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Experience from "./experience/components/Experience";
import Memory from "./memories/components/Memory";
import Trip from "./trip/components/Trip";
import Budget from "./budget/BudgetDashboard";
import { Provider } from "react-redux";
import MapView from "./mapview/components/MapView";
import { AdminPage } from "./content/pages/admin-page";
import { CallbackPage } from "./content/pages/callback-page";
import { HomePage } from "./content/pages/home-page";
import { NotFoundPage } from "./content/pages/not-found-page";
import { ProfilePage } from "./content/pages/profile-page";
import { PageLoader } from "./content/widgets/page-loader.mjs";
import { AuthenticationGuard } from "./helpers/Auth0/authentication-guard";
import MediaFileUploaderTest from "./helpers/media-files/media-file-uploader-test.mjs";
import TripForm from "./trip/components/TripForm";

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
            <Route path="/" element={<HomePage />} />
            <Route
              path="/trip"
              element={<AuthenticationGuard component={Trip} />}
            />
            <Route
                path="/trip-single/:id"
                element={<AuthenticationGuard component={Trip} />}
            />
            <Route
              path="/trip-add"
              element={<AuthenticationGuard component={TripForm} />}
            />
            <Route
              path="/experience"
              element={<AuthenticationGuard component={Experience} />}
            />
            <Route
              path="/memory"
              element={<AuthenticationGuard component={Memory} />}
            />
            <Route
              path="/map"
              element={<AuthenticationGuard component={MapView} />}
            />
            <Route
              path="/budget"
              element={<AuthenticationGuard component={Budget} />}
            />
            <Route
              path="/dashboard/*"
              element={<AuthenticationGuard component={Trip} />}
            />
            <Route
              path="/admin"
              element={<AuthenticationGuard component={AdminPage} />}
            />
            <Route
              path="/profile"
              element={<AuthenticationGuard component={ProfilePage} />}
            />
            <Route
              path="/media-file"
              element={
                <AuthenticationGuard component={MediaFileUploaderTest} />
              }
            />
            <Route Path="/callback" element={<CallbackPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Provider>
  );
};
