# Teriash Galaxy 3.2 — Ultra Details

Nowa wersja samodzielnego motywu do Margonem Nowy Interfejs. Bez GitHuba i CDN.

## Instalacja
1. Wyłącz Winter Atelier oraz starsze wersje Galaxy w Tampermonkey.
2. Zainstaluj `install/teriash-galaxy.user.js`.
3. Odśwież kartę Margonem NI za pomocą Ctrl+F5.

## Co poprawiono
- Bardziej szczegółowe belki górne/dolne, ramki okien i panele HUD.
- Drobne stany slotów (puste, aktywne, hover), zakładek i przycisków.
- Dodatkowe ramki, elementy formularzy, paski, tooltipy, obszary walki, panel klanu, zadania i minmapa.
- Wbudowane 35 autorskich tekstur PNG, bez zewnętrznych adresów.
- Diagnostyka selektorów poprzez `GalaxyTheme.debug()` w konsoli gry.

## Ograniczenia
Bazowano na sposobie działania Winter Atelier i dostępnych wzorcach NI, ale nie pozyskano pełnej treści jego zminifikowanego CSS ani wszystkich oryginalnych grafik, więc nie jest to kompletna zgodność 1:1. Motyw nie został przetestowany w zalogowanym kliencie Margonem. Nie zmienia sprite'ów przedmiotów, mapy, pozycji okien ani ich `z-index`.
