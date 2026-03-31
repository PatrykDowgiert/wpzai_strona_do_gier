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
## Testowanie

### Test 1
Aplikacja uruchomiła się poprawnie. Po kliknięciu w grafikę przenosi na podstronę z informacjami o grze
 a po kliknięciu przycisku zagraj przenosi na stronę wybranej gry. Działa wyszukiwanie po nazwie, 
 wyszukiwanie po kategoriach oraz losowanie losowej gry.

### Test 2
Aplikacja uruchomiła się poprawnie. Kliknięcie w grafikę gry przenosi na podstronę z informacjami o grze 
a następnie po kliknięciu przycisku zagraj przenosi na stronę gry. 
Wyszukiwanie po nazwie, wyszukiwanie po kategoriach oraz losowanie losowej gry działa poprawnie.

### Test 3
Aplikacja uruchomiła się poprawnie. Kliknięcie w grafikę przenosi na podstronę z informacjami o danej grze 
a po kliknięciu przycisku zagraj przenosi do strony wybranej gry. Wyszukiwanie gry po nazwie, 
wyszukiwanie po kategoriach oraz losowanie działa poprawnie.

### Test 4
Aplikacja uruchomiła się bez błędów. Po kliknięciu w grafikę następuje przeniesienie na podstronę z informacjami o grze 
a po kliknięciu przycisku zagraj przenosi na stronę gry. 
Wyszukiwanie po nazwie, wyszukiwanie po kategoriach i losowanie losowej gry działa bez bledów.

### Test 5
Aplikacja uruchomiła się poprawnie. Kliknięcie w grafikę przekierowuje na podstronę z informacjami o wybranej grze 
a po kliknięciu przycisku zagraj przenosi do strony gry.
 Wyszukiwanie po nazwie, wyszukiwanie po kategoriach oraz losowanie gry działaja bez bledow.

### Podsumowanie
Wszystkie 5 testów przeszło pomyślnie. Aplikacja działa poprawnie, uruchamia się bez błędów, 
a wszystkie funkcje na stronie działają prawidłowo 
