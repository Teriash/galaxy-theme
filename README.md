# Galaxy — motyw Margonem NI

Ciemny, granatowo-niebiesko-fioletowy motyw interfejsu Margonem (Nowy Interfejs).

## Instalacja

1. Utwórz **publiczne** repozytorium GitHub o nazwie `galaxy-theme` na koncie `Teriash`.
2. Wrzuć **zawartość** tego folderu do głównego katalogu repozytorium, zachowując ścieżki.
3. Ustaw gałąź domyślną na `main`.
4. Otwórz adres instalacyjny i zaakceptuj skrypt w Tampermonkey:

   https://raw.githubusercontent.com/Teriash/galaxy-theme/main/install/galaxy.user.js

5. Odśwież grę Margonem NI. Przy pierwszej publikacji CDN może potrzebować chwili na udostępnienie plików.

## Struktura

```text
galaxy-theme/
├── install/
│   └── galaxy.user.js        # instalacja i automatyczna aktualizacja
├── css/
│   └── galaxy.css            # kolory i wyglad elementow
├── scripts/
│   └── galaxy.js             # wlaczenie klasy motywu
├── assets/
│   ├── galaxy-icon.svg       # ikona Tampermonkey
│   ├── galaxy-nebula.svg     # kosmiczne tlo okien
│   ├── galaxy-stars.svg      # gwiazdy dla chatu i paneli
│   ├── galaxy-header.svg     # grafika naglowkow i paskow
│   └── galaxy-slot.svg       # tekstura pojedynczego slotu
└── README.md
```

## Zmiana kolorów

Edytuj zmienne `--gx-*` na początku `css/galaxy.css` oraz reguły, w których występują.

## Aktualizacje

Po zmianie CSS/JS zwiększ `VERSION` w `install/galaxy.user.js` i `@version` o ten sam numer (np. `1.0.2`). Zmiana numeru odświeża linki do plików. Po zmianie userscriptu Tampermonkey może pobrać nową wersję automatycznie.

## Jeśli konto lub repozytorium na GitHubie mają inną nazwę

Zmień `Teriash/galaxy-theme` we wszystkich trzech adresach wewnątrz `install/galaxy.user.js` oraz w README.

## Ważne

To **autorski, niezależny zestaw stylów**, a nie kopia oryginalnego Winter Atelier. Selekcje klas są przygotowane na typowe elementy NI, ale nie zostały zweryfikowane na aktualnym DOM gry. Część sekcji może wymagać dopasowania klas poprzez narzędzia programistyczne przeglądarki. Motyw nie wpływa na mechanikę gry.

## Grafiki

Pliki w `assets/` sa rzeczywistymi zasobami motywu. `css/galaxy.css` odwoluje sie do czterech tekstur SVG przez wzgledne adresy `../assets/...`, a ikona jest wykorzystywana przez naglowek userscriptu. SVG mozna edytowac jak zwykle pliki tekstowe.
