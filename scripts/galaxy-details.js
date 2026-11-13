/* Galaxy 3.6 - lekkie wykrywanie dynamicznych kontenerow, bez nadpisywania grafiki gry. */
(() => {
  'use strict';
  if (window.__TERIASH_GALAXY36__) return;
  window.__TERIASH_GALAXY36__ = true;
  const root = document.documentElement;
  const timerKey = 'teriash-galaxy-36-timer';
  function sync() {
    try { root.classList.toggle('gx36-no-timer', localStorage.getItem(timerKey)==='off'); }
    catch (_) { root.classList.remove('gx36-no-timer'); }
  }
  sync();
  const inspect = Object.freeze({
    'postac':'.character_wrapper .stats-wrapper',
    'torba':'.inventory_wrapper',
    'puste-sloty':'.inventory_wrapper .slot:empty',
    'przelaczanie-toreb':'.inventory_wrapper .bags-navigation .item',
    'dolny-hud':'.layer.interface-layer .positioner.bottom',
    'chat':'.new-chat-window,.chat-window',
    'walka':'.battle-controller',
    'depozyt':'.depo,.deposit-window',
    'tooltip':'.tip-wrapper[data-type="t_item"]',
    'minutnik':'.elite-timer,.elite-timer-container,.elite-timer-widget'
  });
  window.GalaxyDetails36 = Object.freeze({
    version:'3.6.0',
    setTimer(enabled) {
      try {localStorage.setItem(timerKey,enabled?'on':'off');}catch(_){}
      sync();
    },
    debug() {
      const result = Object.fromEntries(Object.entries(inspect).map(([name,selector])=>[name,document.querySelectorAll(selector).length]));
      console.table(result);
      return {galaxyEnabled:root.classList.contains('teriash-galaxy'), stylesheetLoaded:!!document.getElementById('teriash-galaxy-36-css'),counts:result};
    }
  });
  console.info('[Galaxy 3.6] Detale aktywne. Diagnostyka: GalaxyDetails36.debug()');
})();
