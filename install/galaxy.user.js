// ==UserScript==
// @name         Teriash Galaxy - Margonem NI
// @namespace    https://github.com/Teriash/galaxy-theme
// @version      2.0.0
// @description  Kosmiczny motyw Galaxy: okna, belki, chat, sloty, depozyt, sklep i HUD w granacie i fiolecie.
// @author       Teriash
// @icon         https://raw.githubusercontent.com/Teriash/galaxy-theme/main/assets/icon.svg
// @match        https://*.margonem.pl/*
// @exclude      https://www.margonem.pl/*
// @exclude      https://forum.margonem.pl/*
// @exclude      https://pomoc.margonem.pl/*
// @updateURL    https://raw.githubusercontent.com/Teriash/galaxy-theme/main/install/galaxy.user.js
// @downloadURL  https://raw.githubusercontent.com/Teriash/galaxy-theme/main/install/galaxy.user.js
// @run-at       document-end
// @grant        none
// @noframes
// ==/UserScript==

(() => {
 'use strict';
 const match=/^([a-z0-9-]+)\.margonem\.pl$/i.exec(location.hostname);
 if(!match||['www','forum','pomoc'].includes(match[1].toLowerCase()))return;
 if(window.__TERIASH_GALAXY_INSTALL_V2__)return;
 window.__TERIASH_GALAXY_INSTALL_V2__=true;
 const BASE='https://raw.githubusercontent.com/Teriash/galaxy-theme/main/';
 const VERSION='2.0.0';
 const add=()=>{
  document.documentElement.classList.add('teriash-galaxy');
  if(!document.getElementById('teriash-galaxy-css')){
   const css=document.createElement('link');css.id='teriash-galaxy-css';css.rel='stylesheet';
   css.href=BASE+'css/galaxy.css?v='+VERSION;
   css.onerror=()=>console.warn('[Galaxy] Nie mozna pobrac arkusza CSS. Sprawdz publiczne repo i sciezki.');
   document.head.appendChild(css);
  }
  if(!document.getElementById('teriash-galaxy-js')){
   const js=document.createElement('script');js.id='teriash-galaxy-js';
   js.src=BASE+'scripts/galaxy.js?v='+VERSION;
   js.onerror=()=>console.warn('[Galaxy] Nie mozna pobrac skryptu Galaxy.');
   document.head.appendChild(js);
  }
 };
 if(document.head)add();else document.addEventListener('DOMContentLoaded',add,{once:true});
})();
