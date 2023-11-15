import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Cursor from './components/common/Cursor'

function App() {

  return (
    <>
      <Header />
      <main >
        <About />
        <Projects />
        <About />
      </main>
      <Cursor />
      <Footer />
    </>
  )
}

export default App
