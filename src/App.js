import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Forms/Login/Login";
import AppointmentForm from "./components/Appointment/AppointmentForm";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/Forms/Signup/Signup";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const auth = useAuth();

  return (
    <div>
      {auth.isAuthenticated && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
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
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
