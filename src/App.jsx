import { useState } from 'react';
import { 
  Header,
  About,
  Portfolio,
  NavUI,
  Contact
} from './components/';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <main className='bg-gray-100  dark:bg-gray-900'>
        <NavUI
          darkMode={ darkMode }
          setDarkMode={setDarkMode}/>
        
        <Header />

        <About />

        <Portfolio />

        <Contact />
      </main>
    </div>
  )
}

export default App
