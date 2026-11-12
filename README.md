# Teriash Galaxy 3.4 — Dynamic Details

Instalacja: rozpakuj ZIP, a plik `install/teriash-galaxy.user.js` wklej do Tampermonkey. Wyłącz poprzednie wersje motywu. Skrypt jest w pełni samodzielny i zawiera grafiki PNG osadzone jako data URI.

## Nowe funkcje JS
- Obserwowanie nowych paneli i tooltipów przez MutationObserver z ograniczaniem pracy do jednej klatki
- Palety blue, violet, cyan oraz tryby standard/ultra (w konsoli `GalaxyTheme.configure({palette:"violet",details:"ultra"})`)
- Opcjonalna podmiana znacznika ruchu: `GalaxyTheme.configure({marker:true})`
- Diagnostyka: `GalaxyTheme.debug()` i ręczne odświeżanie oznaczeń: `GalaxyTheme.rescan()`
- Trwałe ustawienia i możliwość wyłączenia `GalaxyTheme.disable()`

Uwaga: nie modyfikuje pozycji elementów, z-index ani obrazków przedmiotów/mapy. Podmiana znacznika działa tylko przy udostępnieniu `Engine.imgLoader.checkExist`; domyślnie wyłączona. Nie był testowany w kliencie gry — część selektorów może wymagać dostosowania.
