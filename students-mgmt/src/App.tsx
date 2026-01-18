import { Route, Routes } from "react-router-dom";
import "./App.css";
import CandidatesList from "./candidates/CandidatesList";
import CandidateForm from "./candidates/CandidateForm";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./auth/Login";
import CreateUser from "./auth/CreateUser";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const name = "Students Management System";
  console.log("VITE_FIREBASE_API_KEY:", import.meta.env.VITE_FIREBASE_API_KEY);
  console.log("MODE:", import.meta.env.MODE);

  return (
    <>
      <Header />
      <div>Welcome to {name}</div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div>Home Page</div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/counter"
          element={
            <ProtectedRoute>
              <Counter />
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidates"
          element={
            <ProtectedRoute>
              <CandidatesList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidates/new"
          element={
            <ProtectedRoute>
              <CandidateForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidates/:id"
          element={
            <ProtectedRoute>
              <CandidateForm />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
