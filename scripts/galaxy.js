(() => {
 'use strict';
 if (window.__TERIASH_GALAXY_UI_V210__) return;
 window.__TERIASH_GALAXY_UI_V210__ = true;
 const root = document.documentElement;
 root.classList.add('teriash-galaxy');
 if(document.body) document.body.classList.add('teriash-galaxy-body');
 const KEY='teriash-galaxy-options-v210';
 function read(){ try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } }
 function apply(settings){
  root.classList.toggle('galaxy-nebula-strong', !!settings.strongNebula);
  root.classList.toggle('galaxy-flat', !!settings.flat);
 }
 apply(read());
 window.GalaxyTheme = Object.freeze({
  version:'2.1.0',
  configure(next){ const settings={...read(), ...next}; localStorage.setItem(KEY, JSON.stringify(settings)); apply(settings); return settings; },
  disable(){ root.classList.remove('teriash-galaxy','galaxy-nebula-strong','galaxy-flat'); },
  enable(){ root.classList.add('teriash-galaxy'); apply(read()); },
  get options(){ return read(); }
 });
 console.info('[Galaxy] Motyw aktywny (2.1.0 PNG/jsDelivr).');
})();
