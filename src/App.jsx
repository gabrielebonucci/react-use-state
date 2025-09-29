import { useState } from "react";
import languages from "./languages";
import "./App.css";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <>
      <header className="page-header">
        <h1>Learn Web development</h1>
      </header>

      <main className="container">
        <div className="buttons-container">
          {languages.map((language) => {
            //stabilisco se questo bottone è quello attivo.
            const isActive = language.id === selectedLanguage.id;
            //Se 'isActive' è true, aggiungo la classe 'active', altrimenti no.
            const buttonClassName = `btn ${isActive ? "active" : ""}`;
            return (
              <button
                key={language.id}
                className={buttonClassName}
                onClick={() => setSelectedLanguage(language)}
              >
                {language.title}
              </button>
            );
          })}
        </div>

        <div className="card">
          <h2>{selectedLanguage.title}</h2>
          <p>{selectedLanguage.description}</p>
        </div>
      </main>
    </>
  );
}

export default App;
