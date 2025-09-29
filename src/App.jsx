import { useState } from 'react'
import languages from './languages'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <div className='container'>

      <h1>Learn Web development</h1>

      <div className='buttons-container'>

      </div>

      <div className='card'>

      </div>

    </div>
      
  )
}

export default App
