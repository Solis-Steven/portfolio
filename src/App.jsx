import { useState, Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { 
  Header,
  About,
  NavUI,
  Contact
} from './components/';
import "react-toastify/dist/ReactToastify.css"

const Projects = lazy(() => import("./components/Projects/Projects"));

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Suspense fallback={<h1>Cargando</h1>}>
        <main className='bg-gray-100  dark:bg-gray-900'>
          <NavUI
            darkMode={ darkMode }
            setDarkMode={setDarkMode}/>
          
          <Header />

          <About />

          <Projects />

          <Contact />

          <ToastContainer />
        </main>
      </Suspense>
    </div>
  )
}

export default App
