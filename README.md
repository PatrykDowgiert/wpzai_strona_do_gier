# Gierki

Strona z kolekcją darmowych gier przeglądarkowych w stylu Friv.

## Opis

Gierki to agregator gier online, który pozwala na:
- Przeglądanie kolekcji gier z obrazkami
- Wyszukiwanie gier po nazwie lub kategorii
- Losowe uruchamianie jednej z gier

## Instalacja

```bash
cd my-app
npm install
```

## Uruchomienie

```bash
npm run dev
```

Aplikacja uruchomi się pod adresem `http://localhost:5173`

## Dostępne skrypty

| Skrypt | Opis |
|--------|------|
| `npm run dev` | Uruchomienie serwera deweloperskiego |
| `npm run build` | Budowanie wersji produkcyjnej |
| `npm run preview` | Podgląd wersji produkcyjnej |
| `npm run lint` | Sprawdzanie kodu ESLint |

## Technologie

- **React** 19.2.4 - Biblioteka UI
- **TypeScript** 5.9 - Typowanie JavaScript
- **Vite** 8.0 - Bundler i dev server
- **Tailwind CSS** 4.2 - Stylowanie
- **React Router** 7.13 - Routing (przygotowany do użycia)

## Struktura projektu

```
my-app/
├── public/          # Obrazki gier
├── src/
│   ├── App.tsx      # Główny komponent
│   ├── index.css    # Style Tailwind
│   └── main.tsx     # Punkt wejścia
├── index.html
└── package.json
```
