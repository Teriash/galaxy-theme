/* Galaxy - Margonem NI | dodatkowe, bezpieczne zachowanie motywu */
(() => {
  'use strict';
  if (window.__TERIASH_GALAXY_UI__) return;
  window.__TERIASH_GALAXY_UI__ = true;

  // Klasa na <html> pozwala kontrolowac styl bez ruszania logiki gry.
  document.documentElement.classList.add('teriash-galaxy');

  // Po wylaczeniu skryptu w menedzerze i odswiezeniu strony motyw znika.
  // Nie modyfikujemy Engine, mapy, slotow, ekwipunku ani interakcji myszka.
  console.info('[Galaxy] Motyw aktywny.');
})();
