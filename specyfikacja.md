# Gierki - Specyfikacja Aplikacji

## 1. Opis aplikacji

**Nazwa:** Gierki  
**Typ:** Strona agregator gier przeglądarkowych  
**Opis:** Strona internetowa prezentująca kolekcję darmowych gier przeglądarkowych w stylu Friv, umożliwiająca przeglądanie, wyszukiwanie i losowe uruchamianie gier.

## 2. Funkcjonalności

### 2.1 Nawigacja
- **Sticky navbar** - pozostaje widoczny podczas scrollowania
- **Logo** - "🎮 Gierki" w kolorze fioletowym
- **Przycisk "Losowa gra"** - losuje jedną grę z listy i otwiera w nowej karcie
- **Pole wyszukiwania** - filtruje gry po nazwie lub kategorii w czasie rzeczywistym

### 2.2 Hero sekcja
- Nagłówek powitalny z gradientem tła (fiolet → ciemny)
- Krótki opis strony

### 2.3 Galeria gier
- **Siatka responsywna** - 2-6 kolumn w zależności od szerokości ekranu
- **Karta gry zawiera:**
  - Obrazek okładki gry
  - Nazwa gry
  - Kategoria
- **Interakcje:**
  - Hover: powiększenie + fioletowy ring
  - Klik: otwiera grę w nowej karcie (`target="_blank"`)
- **Brak wyników** - komunikat gdy wyszukiwanie nie zwraca gier

### 2.4 Filtrowanie
- Wyszukiwanie po nazwie gry
- Wyszukiwanie po kategorii
- Filtry działają w czasie rzeczywistym (bez przycisku "szukaj")

## 3. Wygląd aplikacji

### 3.1 Paleta kolorów
| Element | Kolor |
|---------|-------|
| Tło główne | `#111827` (gray-950) |
| Tło navbar/hero | `#111827` / `#1e293b` (gray-900) |
| Akcent główny | `#a855f7` (purple-500) |
| Akcent hover | `#c084fc` (purple-400) |
| Tekst główny | `#ffffff` (white) |
| Tekst drugorzędny | `#9ca3af` (gray-400) |

### 3.2 Typografia
- Font: Domyślny systemowy (sans-serif)
- Nagłówek hero: 5xl, bold
- Tytuły sekcji: 2xl, bold
- Nazwy gier: sm, semibold
- Kategorie: xs, gray-400

### 3.3 Layout
- Navbar: sticky, px-6, py-4
- Hero: px-6, py-16, gradient background
- Main: px-6, py-10
- Grid gap: 1rem (gap-4)

### 3.4 Breakpointy
- Mobile: 2 kolumny
- Small (sm): 3 kolumny
- Medium (md): 4 kolumny
- Large (lg): 6 kolumny

## 4. Wymagania techniczne

### 4.1 Stack
- **Framework:** React 19
- **Język:** TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7 (zainstalowany, niewykorzystany)

### 4.2 Struktura plików
```
my-app/
├── public/
│   └── *.png          # Obrazki gier
├── src/
│   ├── App.tsx        # Główny komponent
│   ├── index.css      # Tailwind imports
│   └── main.tsx       # Entry point
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

### 4.3 Wymagania przeglądarki
- Nowoczesne przeglądarki (Chrome, Firefox, Edge, Safari)
- ES2020+

## 5. Struktura danych

### 5.1 Typ gry
```typescript
interface Game {
  id: number;           // Unikalne ID
  name: string;         // Nazwa gry
  category: string;     // Kategoria (Puzzle/Akcja/Wyscigi/Zrecznosciowe)
  image: string;        // Ścieżka do obrazka (/NAZWA.png)
  url: string;          // URL do gry
}
```

### 5.2 Lista gier
```typescript
const games: Game[] = [
  { id: 1, name: '2048', category: 'Puzzle', image: '/2048.png', url: '...' },
  { id: 2, name: 'Slither.io', category: 'Akcja', image: '/SLITHERIO.png', url: '...' },
  // ... 12 gier
];
```

### 5.3 Stan komponentu
```typescript
// Wyszukiwanie
const [search, setSearch] = useState<string>('');

// Filtrowane gry
const filteredGames = games.filter(game => 
  game.name.toLowerCase().includes(search.toLowerCase()) ||
  game.category.toLowerCase().includes(search.toLowerCase())
);
```

## 6. Lista gier

| ID | Nazwa | Kategoria | URL |
|----|-------|-----------|-----|
| 1 | 2048 | Puzzle | https://classic.play2048.co/ |
| 2 | Slither.io | Akcja | https://slither.io/ |
| 3 | Agar.io | Akcja | https://agar.io/ |
| 4 | Tetris | Puzzle | https://play.tetris.com/ |
| 5 | GeoGuessr | Puzzle | https://www.geoguessr.com/ |
| 6 | HexGL | Wyścigi | https://hexgl.bkcore.com/play/ |
| 7 | QWOP | Zręcznościowe | https://www.foddy.net/legacy/Athletics.html |
| 8 | Little Alchemy 2 | Puzzle | https://littlealchemy2.com/ |
| 9 | Skribbl.io | Akcja | https://skribbl.io/ |
| 10 | Diep.io | Akcja | https://diep.io/ |
| 11 | Cookie Clicker | Puzzle | https://orteil.dashnet.org/cookieclicker/ |
| 12 | A Dark Room | Puzzle | https://adarkroom.doublespeakgames.com/ |

## 7. Przyszłe rozszerzenia (TODO)

- [ ] Strona szczegółów gry (`/gra/:id`)
- [ ] Filtrowanie po kategoriach w navbarze
- [ ] Ulubione gry (localStorage)
- [ ] Historia ostatnich gier
- [ ] Responsywne menu mobilne
- [ ] Animacje przejścia
