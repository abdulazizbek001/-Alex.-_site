import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Info from './Components/Info/Info'

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Hero />
      </div>
      <Info />
      <Footer />
    </>
  )
}

export default App
