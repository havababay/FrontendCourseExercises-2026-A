import { Route, Routes } from "react-router-dom";
import "./App.css";
import CandidatesList from "./candidates/CandidatesList";
import CandidateForm from "./candidates/CandidateForm";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

function App() {
  const name = "Students Management System";
  console.log("VITE_FIREBASE_API_KEY:", import.meta.env.VITE_FIREBASE_API_KEY);
  console.log("MODE:", import.meta.env.MODE);

  return (
    <>
      <Header />
      <div>Welcome to {name}</div>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/candidates" element={<CandidatesList />} />
        <Route path="/candidates/new" element={<CandidateForm />} />
        <Route path="/candidates/:id" element={<CandidateForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
