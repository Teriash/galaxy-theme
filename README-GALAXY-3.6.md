# Galaxy 3.6 — mała aktualizacja GitHub

**To nakładka na istniejący motyw Galaxy**. Nie podmieniaj ani nie usuwaj dotychczasowych `galaxy.css`, `galaxy.js` i grafik.

## Wgrywanie

1. Rozpakuj ZIP.
2. W repozytorium `Teriash/galaxy-theme` (publiczne, gałąź `main`) użyj **Add file → Upload files**.
3. Wgraj zawartość ZIP bez dodatkowego folderu nadrzędnego. Nowe pliki trafią do `assets/galaxy36/`, `css/`, `scripts/`, `install/`.
4. Sprawdź otwieranie `https://cdn.jsdelivr.net/gh/Teriash/galaxy-theme@main/css/galaxy-details.css`.
5. Zainstaluj `https://raw.githubusercontent.com/Teriash/galaxy-theme/main/install/galaxy-details.user.js` przez Tampermonkey.
6. Zostaw włączony dotychczasowy Galaxy. **Wyłącz starą nakładkę 3.5**, bo może nadpisywać te same elementy. Odśwież grę.

## Co jest nowe

- 8 nowych, autorskich plików PNG (slot, zaznaczenie, drobne przyciski, panel, nagłówki, rząd minutnika, belka)
- `css/galaxy-details.css`: nowe style bez zmiany wymiarów elementów, bez nadpisywania grafik przedmiotów i mapy
- `scripts/galaxy-details.js`: prosta diagnostyka i opcja wyłączenia stylizacji minutnika
- `install/galaxy-details.user.js`: niezależny instalator nakładki; **nie zastępuje** instalatora głównego motywu

W konsoli: `GalaxyDetails36.debug()` i `GalaxyDetails36.setTimer(false)`.

## Ograniczenia

CSS jest uzależniony od aktualnych klas klienta Margonem oraz obecności klasy `teriash-galaxy` na elemencie HTML. Jeśli podstawowy motyw w repozytorium nie dodaje tej klasy, nakładka nie będzie widoczna. Niektóre dodatki zewnętrzne (w tym minutnik) mogą mieć inne klasy, dlatego nie wszystkie elementy muszą się zmienić. Bez testu w aktywnym kliencie gry nie można zagwarantować pokrycia wszystkich detali Winter Atelier.
