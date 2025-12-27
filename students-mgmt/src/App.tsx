import { Route, Routes } from "react-router-dom";
import "./App.css";
import CandidatesList from "./CandidatesList";
import CandidateForm from "./CandidateForm";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

function App() {
  const name = "Students Management System";

  return (
    <>
      <Header />
      <div>
        <Title text="Students Management System" />
      </div>
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
