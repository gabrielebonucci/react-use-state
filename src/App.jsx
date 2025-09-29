import { useState } from 'react'
import languages from './languages'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <div className='container'>

      <h1>Learn Web development</h1>

      <div className='buttons-container'>

      {languages.map((language) => {
//stabilisco se questo bottone è quello attivo.
          const isActive = language.id === selectedLanguage.id;
//Se 'isActive' è true, aggiungo la classe 'active', altrimenti no.
          const buttonClassName = `btn ${isActive ? 'active' : ''}`;
          return(
            <button
            key={language.id}
            className={buttonClassName}
            onClick={() => setSelectedLanguage(language)}
             >
             {language.title}
             </button>
          )
})}
      </div>

      <div className='card'>

      </div>

    </div>
      
  )
}

export default App
