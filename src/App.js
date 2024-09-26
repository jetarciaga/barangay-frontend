import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import AppointmentForm from "./components/Appointment/AppointmentForm";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useAuth } from "./context/AuthContext";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";

const App = () => {
  const auth = useAuth();

  return (
    <div>
      {auth.isAuthenticated && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/appointment"
          element={
            <PrivateRoute>
              <AppointmentForm />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
