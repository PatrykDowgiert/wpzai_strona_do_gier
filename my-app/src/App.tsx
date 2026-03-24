function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* NAVBAR */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="text-2xl font-bold text-purple-400">🎮 Gierki</div>
        <div className="flex gap-4 text-sm text-gray-300">
          <a href="#" className="hover:text-purple-400 transition">Wszystkie</a>
          <a href="#" className="hover:text-purple-400 transition">Akcja</a>
          <a href="#" className="hover:text-purple-400 transition">Puzzle</a>
          <a href="#" className="hover:text-purple-400 transition">Wyścigi</a>
          <a href="#" className="hover:text-purple-400 transition">Zręcznościowe</a>
        </div>
        <input
          type="text"
          placeholder="Szukaj gry..."
          className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500"
        />
      </nav>

      {/* HERO */}
      <div className="bg-gradient-to-r from-purple-900 to-gray-950 px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Witaj na <span className="text-purple-400">Gierki</span></h1>
        <p className="text-gray-400 text-lg">Setki darmowych gier przeglądarkowych w jednym miejscu</p>
      </div>

      {/* SIATKA GIER */}
      <main className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">🔥 Popularne gry</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
            <div key={i} className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 hover:ring-2 hover:ring-purple-500 transition-all">
              <div className="bg-gray-700 h-28 flex items-center justify-center text-4xl">🎮</div>
              <div className="p-2">
                <p className="text-sm font-semibold">Gra {i}</p>
                <p className="text-xs text-gray-400">Akcja</p>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  )
}

export default App