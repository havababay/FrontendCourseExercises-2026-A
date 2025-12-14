import './App.css'
import CandidatesList from './CandidatesList'
import Counter from './Counter'
import Footer from './Footer'
import Header from './Header'
import Title from './Title'

function App() {
  const name = 'Students Management System'
  
  return (
    <>
      <Header />
      <div>
        <Title text="Students Management System" />
      </div>
      <div>
        Welcome to {name}
      </div>
      <Counter />
      <CandidatesList />
      <Footer />
    </>
  )
}

export default App
