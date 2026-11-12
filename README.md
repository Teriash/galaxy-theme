# Teriash Galaxy — motyw Margonem NI (2.0.0)

Kompletny autorski pakiet motywu kosmicznego do **Nowego Interfejsu** gry Margonem. Granatowo-niebiesko-fioletowe panele, tekstury gwiazd, nagłówki, belki HUD, elementy czatu, log walki, osobne sloty, tooltipy, przyciski, listy i paski przewijania.

## Instalacja na GitHubie

1. Utwórz **publiczne** repozytorium `Teriash/galaxy-theme` (domyślna gałąź `main`).
2. Rozpakuj ZIP i wgraj do **głównego katalogu** repozytorium wszystkie foldery: `assets`, `css`, `scripts`, `install` oraz `README.md`. Nie wgrywaj katalogu nadrzędnego jako dodatkowego poziomu.
3. Otwórz [instalator Galaxy](https://raw.githubusercontent.com/Teriash/galaxy-theme/main/install/galaxy.user.js) i zainstaluj w Tampermonkey, następnie odśwież grę.
4. Wyłącz inne motywy Margonem NI. Dwa aktywne motywy mogą nadpisywać się nawzajem.
5. Gdy GitHub wykorzystuje inną nazwę konta/repozytorium, zamień `Teriash/galaxy-theme` w pliku `install/galaxy.user.js` (4 wystąpienia) i w tym README.

## Struktura

```text
assets/
  nebula.svg          — mgławica do opcjonalnego tła
  stars.svg           — tekstura gwiazd
  panel.svg           — panele i okna
  header.svg          — nagłówki okien
  bar.svg             — górna/dolna belka i HUD
  slot.svg            — sloty puste i zajęte
  slot-active.svg     — aktywne sloty
  button.svg          — przyciski
  tooltip.svg         — tooltipy i menu
  chat.svg            — chat i log walki
  scroll-track.svg    — tor paska przewijania
  scroll-thumb.svg    — suwak paska przewijania
  divider.svg         — poziome separatory
  icon.svg            — ikona motywu
css/galaxy.css        — wszystkie reguły wyglądu (16 sekcji)
scripts/galaxy.js     — aktywacja motywu i opcje lokalne
install/galaxy.user.js — instalator Tampermonkey
README.md
```

## Dodatkowe opcje

W konsoli przeglądarki (F12) można wykonać:

```js
GalaxyTheme.configure({strongNebula:true}); // bardziej kosmiczne tła
GalaxyTheme.configure({strongNebula:false}); // standardowe tła
GalaxyTheme.configure({flat:true});         // panele bez tekstur
GalaxyTheme.configure({flat:false});        // przywróć tekstury
GalaxyTheme.disable();                      // wyłącz na bieżącej karcie
GalaxyTheme.enable();                       // włącz ponownie
```

Ustawienia są zachowywane w `localStorage` danej domeny świata gry.

## Aktualizacje i adresy plików

Instalator pobiera aktualny CSS i JavaScript z `raw.githubusercontent.com` (nie z cache jsDelivr). W celu wydania zmian podnieś **jednocześnie** `@version`, stałą `VERSION` w instalatorze i `version` w `scripts/galaxy.js`. Użytkownicy otrzymają aktualizację Tampermonkey zgodnie z ustawieniami menedżera. Zmiany w `.svg` również docierają z GitHuba, choć cache przeglądarki może wymagać odświeżenia.

## Granice i testowanie

Projekt zawiera wszystkie pliki potrzebne do opublikowania i zainstalowania motywu, ale **nie został przetestowany na aktywnym DOM Margonem NI**. Gra może używać innych klas CSS — wówczas niektóre szczegóły będą wymagały dopasowania selektorów w `css/galaxy.css`. Motyw nie modyfikuje położenia slotów, z-index, mapy, tooltipów, atrybutów przedmiotów, ani mechaniki gry. To własne zasoby SVG i własny kod CSS/JS, nie kopia zasobów Winter Atelier.
