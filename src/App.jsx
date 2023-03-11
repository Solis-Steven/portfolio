import { useState, Suspense, lazy } from 'react';
import { 
  Header,
  About,
  NavUI,
  Contact
} from './components/';

const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));

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

          <Portfolio />

          <Contact />
        </main>
      </Suspense>
    </div>
  )
}

export default App
