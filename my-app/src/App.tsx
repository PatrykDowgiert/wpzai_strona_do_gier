import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

// Tablica kategorii gier używana do filtrowania
const categories = ['Wszystkie', 'Akcja', 'Puzzle', 'Wyścigi', 'Zręcznościowe', 'Sport', 'Strategia'];

// Tablica obiektów reprezentujących gry (dane statyczne aplikacji)
const games = [
  { id: 1, name: '2048', category: 'Puzzle', image: '/2048.png', url: 'https://classic.play2048.co/' },
  { id: 2, name: 'Slither.io', category: 'Akcja', image: '/SLITHERIO.png', url: 'https://slither.io/' },
  { id: 3, name: 'Agar.io', category: 'Akcja', image: '/AGARIO.png', url: 'https://agar.io/' },
  { id: 4, name: 'Tetris', category: 'Puzzle', image: '/TETRIS.png', url: 'https://play.tetris.com/' },
  { id: 5, name: 'GeoGuessr', category: 'Puzzle', image: '/GEOGUESSR.png', url: 'https://www.geoguessr.com/' },
  { id: 6, name: 'HexGL', category: 'Wyścigi', image: '/HEXGL.png', url: 'https://hexgl.bkcore.com/play/' },
  { id: 7, name: 'QWOP', category: 'Zręcznościowe', image: '/QWOP.png', url: 'https://www.foddy.net/legacy/Athletics.html' },
  { id: 8, name: 'Little Alchemy 2', category: 'Puzzle', image: '/LITTLEALCHEMY2.png', url: 'https://littlealchemy2.com/' },
  { id: 9, name: 'Skribbl.io', category: 'Akcja', image: '/SKRIBBLIO.png', url: 'https://skribbl.io/' },
  { id: 10, name: 'Diep.io', category: 'Akcja', image: '/DIEPIO.png', url: 'https://diep.io/' },
  { id: 11, name: 'Cookie Clicker', category: 'Puzzle', image: '/COOKIECLICKER.png', url: 'https://orteil.dashnet.org/cookieclicker/' },
  { id: 12, name: 'A Dark Room', category: 'Puzzle', image: '/ADARKROOM.png', url: 'https://adarkroom.doublespeakgames.com/' },
  { id: 13, name: 'Krunker.io', category: 'Zręcznościowe', image: '/KRUNKERIO.png', url: 'https://krunker.io/' },
  { id: 14, name: 'Shell Shockers', category: 'Akcja', image: '/SHELLSHOCKERS.png', url: 'https://shellshocker.io/' },
  { id: 15, name: 'Wordle', category: 'Puzzle', image: '/WORDLE.png', url: 'https://www.nytimes.com/games/wordle/index.html' },
  { id: 16, name: 'Gartic Phone', category: 'Akcja', image: '/GARTICPHONE.png', url: 'https://garticphone.com/' },
  { id: 17, name: 'Stumble Guys', category: 'Akcja', image: '/STUMBLEGUYS.png', url: 'https://www.stumbleguys.com/' },
  { id: 18, name: 'Minecraft Classic', category: 'Akcja', image: '/MINECRAFTCLASSIC.png', url: 'https://classic.minecraft.net' },
  { id: 19, name: 'Slope', category: 'Akcja', image: '/SLOPE.png', url: 'https://slope-game.com' },
  { id: 20, name: 'Run 3', category: 'Akcja', image: '/RUN3.png', url: 'https://www.crazygames.com/game/run-3' },
  { id: 21, name: 'Flappy Bird', category: 'Zręcznościowe', image: '/FLAPPYBIRD.png', url: 'https://flappybird.io' },
  { id: 22, name: 'Sudoku', category: 'Puzzle', image: '/SUDOKU.png', url: 'https://sudoku.com' },
  { id: 23, name: 'Paper.io 2', category: 'Akcja', image: '/PAPERIO2.png', url: 'https://paper-io.com' },
  { id: 24, name: 'Hole.io', category: 'Akcja', image: '/HOLEIO.png', url: 'https://hole-io.com' },
  { id: 25, name: 'Among Us Online', category: 'Akcja', image: '/AMONGUSONLINE.png', url: 'https://amongus-online.net/' },
  { id: 26, name: 'Retro Bowl', category: 'Sport', image: '/RETROBOWL.png', url: 'https://www.crazygames.com/game/big-hit-football' },
  { id: 27, name: 'Chess.com', category: 'Puzzle', image: '/CHESSCOM.png', url: 'https://www.chess.com/play' },
  { id: 28, name: 'Lichess', category: 'Puzzle', image: '/LICHESS.png', url: 'https://lichess.org' },
  { id: 29, name: 'Minesweeper', category: 'Puzzle', image: '/MINESWEEPER.png', url: 'https://minesweeper.online' },
  { id: 30, name: 'Cupcakeria', category: 'Puzzle', image: '/2048CUPCAKES.png', url: 'https://www.crazygames.com/game/papas-cupcakeria' },
  { id: 31, name: 'Splix.io', category: 'Akcja', image: '/SPLIXIO.png', url: 'https://splix.io' },
  { id: 32, name: 'Tanki Online', category: 'Akcja', image: '/TANKIONLINE.png', url: 'https://tankionline.com' },
  { id: 33, name: 'Powerline.io', category: 'Akcja', image: '/POWERLINEIO.png', url: 'https://powerline.io' },
  { id: 34, name: 'Lordz.io', category: 'Strategia', image: '/LORDZIO.png', url: 'https://lordz.io' },
  { id: 35, name: 'Surviv.io', category: 'Akcja', image: '/SURVIVIO.png', url: 'https://surviv.io' },
  { id: 36, name: 'Zombs Royale', category: 'Akcja', image: '/ZOMBSROYALE.png', url: 'https://zombsroyale.io' },
];

// Główny komponent aplikacji odpowiedzialny za wyświetlanie listy gier oraz filtrowanie
function App() {

  // Stan przechowujący tekst wyszukiwania wpisany przez użytkownika
  const [search, setSearch] = useState('');

  // Stan przechowujący aktualnie wybraną kategorię
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');

  // Filtrowanie gier na podstawie wyszukiwania oraz wybranej kategorii
  const filteredGames = games.filter(game => {

    // Sprawdza czy nazwa gry lub kategoria zawiera wpisany tekst
    const matchesSearch =
      game.name.toLowerCase().includes(search.toLowerCase()) ||
      game.category.toLowerCase().includes(search.toLowerCase());

    // Sprawdza czy gra należy do wybranej kategorii
    const matchesCategory =
      selectedCategory === 'Wszystkie' || game.category === selectedCategory;

    // Zwraca tylko gry spełniające oba warunki
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Pasek nawigacyjny aplikacji */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between mb-4">

          {/* Logo / nazwa aplikacji */}
          <div className="text-2xl font-bold text-purple-400">🎮 Gierki</div>

          {/* Przycisk losujący grę i otwierający ją w nowej karcie */}
          <button
            onClick={() => {
              const randomGame = games[Math.floor(Math.random() * games.length)];
              window.open(randomGame.url, '_blank');
            }}
            className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg transition"
          >
            🎲 Losowa gra
          </button>
        </div>

        {/* Przyciski wyboru kategorii */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      {/* Sekcja powitalna */}
      <div className="bg-gradient-to-r from-purple-900 to-gray-950 px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Witaj na <span className="text-purple-400">Gierki</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Setki darmowych gier przeglądarkowych w jednym miejscu
        </p>
      </div>

      {/* Główna sekcja z listą gier */}
      <main className="px-6 py-10">
        <div className="flex items-center justify-between mb-6">

          {/* Nagłówek pokazujący aktualną kategorię */}
          <h2 className="text-2xl font-bold text-purple-400">
            {selectedCategory === 'Wszystkie'
              ? '🔥 Wszystkie gry'
              : `🎮 ${selectedCategory}`}
          </h2>

          {/* Pole wyszukiwania gier */}
          <input
            type="text"
            placeholder="Szukaj gry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Siatka z kafelkami gier */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredGames.map((game) => (

            // Link do strony konkretnej gry
            <Link
              key={game.id}
              to={`/game/${game.id}`}
              className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 hover:ring-2 hover:ring-purple-500 transition-all block"
            >
              {/* Obrazek gry */}
              <img src={game.image} alt={game.name} className="w-full h-28 object-cover" />

              {/* Informacje o grze */}
              <div className="p-2">
                <p className="text-sm font-semibold">{game.name}</p>
                <p className="text-xs text-gray-400">{game.category}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Komunikat gdy brak wyników */}
        {filteredGames.length === 0 && (
          <p className="text-center text-gray-400 mt-8">
            Nie znaleziono gier
          </p>
        )}
      </main>
    </div>
  );
}

// Eksport głównego komponentu aplikacji
export default App;
