import { useParams, Link } from 'react-router-dom';

const games = [
  { id: 1, name: '2048', category: 'Puzzle', image: '/2048.png', url: 'https://classic.play2048.co/', description: 'Kultowa gra logiczna, w której przesuwasz kostki z cyframi, aby uzyskać 2048. Prosta w obsłudze, ale wymaga strategicznego myślenia.' },
  { id: 2, name: 'Slither.io', category: 'Akcja', image: '/SLITHERIO.png', url: 'https://slither.io/', description: 'Wciel się w węża i zbieraj kolorowe kuleeczki, aby rosnac. Uważaj, bo inne węże mogą Cię zjeść!' },
  { id: 3, name: 'Agar.io', category: 'Akcja', image: '/AGARIO.png', url: 'https://agar.io/', description: 'Zostań największą komórką w Petriego! Pochłaniaj mniejsze komórki i uciekaj przed większymi.' },
  { id: 4, name: 'Tetris', category: 'Puzzle', image: '/TETRIS.png', url: 'https://play.tetris.com/', description: 'Klasyczny Tetris - układaj spadające klocki, aby wypełnić linie i zdobyć jak najwięcej punktów.' },
  { id: 5, name: 'GeoGuessr', category: 'Puzzle', image: '/GEOGUESSR.png', url: 'https://www.geoguessr.com/', description: 'Zgadnij, gdzie na świecie się znajdujesz na podstawie widoku Street View. Idealna dla fanów geografii!' },
  { id: 6, name: 'HexGL', category: 'Wyścigi', image: '/HEXGL.png', url: 'https://hexgl.bkcore.com/play/', description: 'Futurystyczna gra wyścigowa w neonowym stylu. Leć szybko i unikaj przeszkód na planszy.' },
  { id: 7, name: 'QWOP', category: 'Zręcznościowe', image: '/QWOP.png', url: 'https://www.foddy.net/legacy/Athletics.html', description: 'Biegaj w kółko w tym zabawnym i frustrującym symulatorze biegania. Proste sterowanie, trudna gra!' },
  { id: 8, name: 'Little Alchemy 2', category: 'Puzzle', image: '/LITTLEALCHEMY2.png', url: 'https://littlealchemy2.com/', description: 'Łącz elementy, aby tworzyć nowe przedmioty. Odkryj setki kombinacji w tej wciągającej grze logicznej.' },
  { id: 9, name: 'Skribbl.io', category: 'Akcja', image: '/SKRIBBLIO.png', url: 'https://skribbl.io/', description: 'Rysuj i zgaduj z przyjaciółmi w tej multiplayerowej grze towarzyskiej. Świetna zabawa dla grup!' },
  { id: 10, name: 'Diep.io', category: 'Akcja', image: '/DIEPIO.png', url: 'https://diep.io/', description: 'Zostań czołgiem i walcz z innymi graczami. Zdobywaj punkty, ulepszaj swoją maszynę i dominuj na polu bitwy.' },
  { id: 11, name: 'Cookie Clicker', category: 'Puzzle', image: '/COOKIECLICKER.png', url: 'https://orteil.dashnet.org/cookieclicker/', description: 'Klikaj ciastka i rozwijaj swoje ciastkowe imperium. Uzależniająca gra clicker z elementami rozwijania.' },
  { id: 12, name: 'A Dark Room', category: 'Puzzle', image: '/ADARKROOM.png', url: 'https://adarkroom.doublespeakgames.com/', description: 'Mroczna gra przetrwania, w której budujesz swoją osadę i odkrywasz sekrety ciemnego pokoju.' },
  { id: 13, name: 'Krunker.io', category: 'Zręcznościowe', image: '/KRUNKERIO.png', url: 'https://krunker.io/', description: 'Szybka strzelanka FPS w stylu pixel art. Walcz z innymi graczami w różnych trybach.' },
  { id: 14, name: 'Shell Shockers', category: 'Akcja', image: '/SHELLSHOCKERS.png', url: 'https://shellshocker.io/', description: 'Jesteś jajkiem z bronią! Strzelaj do innych jajek w tej szalonej grze multiplayer.' },
  { id: 15, name: 'Wordle', category: 'Puzzle', image: '/WORDLE.png', url: 'https://www.nytimes.com/games/wordle/index.html', description: 'Zgadnij słowo w 6 próbach. Kolorowe podpowiedzi pomogą Ci odkryć tajemne słowo dnia.' },
  { id: 16, name: 'Gartic Phone', category: 'Akcja', image: '/GARTICPHONE.png', url: 'https://garticphone.com/', description: 'Rysuj, nakreślaj i twórz szalone historie z przyjaciółmi w tej towarzyskiej grze online.' },
  { id: 17, name: 'Stumble Guys', category: 'Akcja', image: '/STUMBLEGUYS.png', url: 'https://www.stumbleguys.com/', description: 'Pokonuj przeszkody w tym kolorowym wyścigu dla wielu graczy. Zostań ostatnim, który stoi!' },
  { id: 18, name: 'Minecraft Classic', category: 'Akcja', image: '/MINECRAFTCLASSIC.png', url: 'https://classic.minecraft.net', description: 'Klasyczna wersja Minecraft w przeglądarce. Buduj i eksploruj świat złożony z bloków.' },
  { id: 19, name: 'Slope', category: 'Akcja', image: '/SLOPE.png', url: 'https://slope-game.com', description: 'Kontrolowuj kulkę zjeżdżającą po nachylonej trasie. Unikaj przeszkód i zbieraj punkty!' },
  { id: 20, name: 'Run 3', category: 'Akcja', image: '/RUN3.png', url: 'https://www.crazygames.com/game/run-3', description: 'Biegnij przez wirujące tunele w kosmosie. Skacz, unikaj dziur i nie spadaj w przepaść!' },
  { id: 21, name: 'Flappy Bird', category: 'Zręcznościowe', image: '/placeholder.png', url: 'https://flappybird.io', description: 'Kultowa gra polegająca na przeprowadzeniu ptaka przez wąskie szczeliny między rurami. Prosta w obsłudze, ale niezwykle trudna do opanowania.' },
  { id: 22, name: 'Sudoku', category: 'Puzzle', image: '/placeholder.png', url: 'https://sudoku.com', description: 'Klasyczna gra logiczna polegająca na wypełnianiu siatki 9x9 cyframi od 1 do 9. Świetnie trenuje logiczne myślenie.' },
  { id: 23, name: 'Paper.io 2', category: 'Akcja', image: '/placeholder.png', url: 'https://paper-io.com', description: 'Zdobądź jak największe terytorium na planszy. Rysuj linie i zamykaj obszary, ale uważaj na innych graczy!' },
  { id: 24, name: 'Hole.io', category: 'Akcja', image: '/placeholder.png', url: 'https://hole-io.com', description: 'Steruj czarną dziurą pochłaniającą obiekty w mieście. Im więcej pochłoniesz, tym większa się stajesz!' },
  { id: 25, name: 'Among Us Online', category: 'Akcja', image: '/placeholder.png', url: 'https://www.crazygames.com/game/among-us-online-edition', description: 'Przeglądarkowa wersja kultowej gry społecznej. Wykonuj zadania i szukaj ukrytego zdrajcy!' },
  { id: 26, name: 'Retro Bowl', category: 'Sport', image: '/placeholder.png', url: 'https://www.crazygames.com/game/retro-bowl', description: 'Futbolowa gra w stylu retro pixel art. Zarządzaj drużyną i rozgrywaj mecze.' },
  { id: 27, name: 'Chess.com', category: 'Puzzle', image: '/placeholder.png', url: 'https://www.chess.com/play', description: 'Najpopularniejsza platforma szachowa. Graj przeciwko komputerowi lub innym graczom.' },
  { id: 28, name: 'Lichess', category: 'Puzzle', image: '/placeholder.png', url: 'https://lichess.org', description: 'Całkowicie darmowa platforma szachowa open source. Turnieje, lekcje i zaawansowana analiza partii.' },
  { id: 29, name: 'Minesweeper', category: 'Puzzle', image: '/placeholder.png', url: 'https://minesweeper.online', description: 'Klasyczna gra logiczna - odkrywaj pola bez trafienia na minę. Trenuje dedukcję.' },
  { id: 30, name: '2048 Cupcakes', category: 'Puzzle', image: '/placeholder.png', url: 'https://www.crazygames.com/game/2048-cupcakes', description: 'Słodka wersja 2048 z babeczkami zamiast cyfr. Łącz babeczki, tworząc nowe wypieki!' },
  { id: 31, name: 'Splix.io', category: 'Akcja', image: '/placeholder.png', url: 'https://splix.io', description: 'Podbijaj terytorium na planszy. Wracaj do swojego obszaru, aby go powiększyć, ale nie daj się złapać!' },
  { id: 32, name: 'Tanki Online', category: 'Akcja', image: '/placeholder.png', url: 'https://tankionline.com', description: 'Przeglądarkowa gra czołgowa multiplayer. Walcz, zdobywaj punkty i ulepszaj swój czołg.' },
  { id: 33, name: 'Powerline.io', category: 'Akcja', image: '/placeholder.png', url: 'https://powerline.io', description: 'Neonowa wersja Snake. Steruj świetlistą linią, rosnij i eliminuj innych graczy.' },
  { id: 34, name: 'Lordz.io', category: 'Strategia', image: '/placeholder.png', url: 'https://lordz.io', description: 'Strategiczna gra multiplayer. Buduj średniowieczne królestwo, rekrutuj wojska i atakuj wrogów.' },
  { id: 35, name: 'Surviv.io', category: 'Akcja', image: '/placeholder.png', url: 'https://surviv.io', description: 'Przeglądarkowe battle royale w widoku z góry. Zbieraj broń i bądź ostatnim survivorem!' },
  { id: 36, name: 'Zombs Royale', category: 'Akcja', image: '/placeholder.png', url: 'https://zombsroyale.io', description: 'Kolorystyczna gra battle royale. Skacz na mapę, zbieraj broń i walcz o przetrwanie.' },
];

function GamePage() {
  const { id } = useParams();
  const game = games.find(g => g.id === parseInt(id || ''));

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Gra nie znaleziona</h1>
          <Link to="/" className="text-purple-400 hover:text-purple-300">← Wróć do strony głównej</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link to="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition">
          🎮 Gierki
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <Link to="/" className="text-gray-400 hover:text-white mb-6 inline-block">
          ← Wróć do gier
        </Link>

        <div className="bg-gray-900 rounded-2xl overflow-hidden">
          <img 
            src={game.image} 
            alt={game.name} 
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl font-bold">{game.name}</h1>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">{game.category}</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {game.description}
            </p>
            <a
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-xl text-xl font-bold transition"
            >
              🎮 Graj teraz!
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GamePage;
