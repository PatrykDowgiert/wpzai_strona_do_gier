import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GamePage from './GamePage.tsx'

// Tworzenie głównego korzenia aplikacji React i renderowanie jej w elemencie o id "root"
createRoot(document.getElementById('root')!).render(

  // StrictMode pomaga wykrywać potencjalne problemy w aplikacji podczas developmentu
  <StrictMode>

    {/* BrowserRouter umożliwia nawigację między stronami bez przeładowania strony */}
    <BrowserRouter>

      {/* Definicja wszystkich ścieżek (routing) w aplikacji */}
      <Routes>

        {/* Strona główna aplikacji */}
        <Route path="/" element={<App />} />

        {/* Strona szczegółów gry, gdzie :id oznacza dynamiczny parametr w URL */}
        <Route path="/game/:id" element={<GamePage />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
