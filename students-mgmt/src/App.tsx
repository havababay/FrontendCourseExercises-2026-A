import './App.css'
import Footer from './Footer'
import Header from './Header'

function App() {
  const name = 'Students Management System'
  
  return (
    <>
      <Header />
      <div>
        Welcome to {name}
      </div>
      <Footer />
    </>
  )
}

export default App
