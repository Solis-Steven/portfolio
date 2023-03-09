import { useState } from 'react';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Nav } from './components/Header/Nav';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <main className='bg-gray-100  dark:bg-gray-900'>
        <Header>
          <Nav
            darkMode={darkMode}
            setDarkMode={setDarkMode} />
        </Header>

        {/* Second page here */}
        <About />

        {/* Another section */}
        <Portfolio />
      </main>
    </div>
  )
}

export default App
