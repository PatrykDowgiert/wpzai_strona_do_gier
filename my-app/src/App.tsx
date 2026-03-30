import { useState } from 'react';
import './index.css';

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
];

function App() {
  const [search, setSearch] = useState('');

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(search.toLowerCase()) ||
    game.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="text-2xl font-bold text-purple-400">🎮 Gierki</div>
        <div className="flex gap-4 text-sm text-gray-300">
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
        <input
          type="text"
          placeholder="Szukaj gry..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500"
        />
      </nav>

      <div className="bg-gradient-to-r from-purple-900 to-gray-950 px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Witaj na <span className="text-purple-400">Gierki</span></h1>
        <p className="text-gray-400 text-lg">Setki darmowych gier przeglądarkowych w jednym miejscu</p>
      </div>

      <main className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">🔥 Popularne gry</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredGames.map((game) => (
            <a
              key={game.id}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 hover:ring-2 hover:ring-purple-500 transition-all block"
            >
              <img src={game.image} alt={game.name} className="w-full h-28 object-cover" />
              <div className="p-2">
                <p className="text-sm font-semibold">{game.name}</p>
                <p className="text-xs text-gray-400">{game.category}</p>
              </div>
            </a>
          ))}
        </div>
        {filteredGames.length === 0 && (
          <p className="text-center text-gray-400 mt-8">Nie znaleziono gier</p>
        )}
      </main>
    </div>
  );
}

export default App;
