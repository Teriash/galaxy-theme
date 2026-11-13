// ==UserScript==
// @name         Teriash Galaxy 3.6 - GitHub Details
// @namespace    Teriash/Galaxy/GitHubDetails
// @version      3.6.0
// @description  Dodatkowe grafiki PNG, puste sloty, paski, statystyki i detale dla Galaxy NI.
// @author       Teriash
// @match        https://*.margonem.pl/*
// @exclude      https://www.margonem.pl/*
// @exclude      https://forum.margonem.pl/*
// @exclude      https://pomoc.margonem.pl/*
// @run-at       document-end
// @grant        none
// @noframes
// @updateURL    https://raw.githubusercontent.com/Teriash/galaxy-theme/main/install/galaxy-details.user.js
// @downloadURL  https://raw.githubusercontent.com/Teriash/galaxy-theme/main/install/galaxy-details.user.js
// ==/UserScript==

(() => {
 'use strict';
 const m=/^([a-z0-9-]+)\.margonem\.pl$/i.exec(location.hostname);
 if (!m || /^(www|forum|pomoc)$/i.test(m[1])) return;
 if (window.__TERIASH_GALAXY_36_LOADER__) return;
 window.__TERIASH_GALAXY_36_LOADER__=true;
 const BASE='https://cdn.jsdelivr.net/gh/Teriash/galaxy-theme@main/';
 const VERSION='3.6.0';
 function add(){
   if(!document.getElementById('teriash-galaxy-36-css')){
     const link=document.createElement('link');
     link.id='teriash-galaxy-36-css';link.rel='stylesheet';
     link.href=BASE+'css/galaxy-details.css?v='+VERSION;
     link.onload=()=>console.info('[Galaxy 3.6] CSS pobrany.');
     link.onerror=()=>console.warn('[Galaxy 3.6] Nie udalo sie pobrac CSS; sprawdz sciezki w GitHub.');
     document.head.appendChild(link);
   }
   if(!document.getElementById('teriash-galaxy-36-js')){
     const script=document.createElement('script');
     script.id='teriash-galaxy-36-js';
     script.src=BASE+'scripts/galaxy-details.js?v='+VERSION;
     script.onerror=()=>console.warn('[Galaxy 3.6] Nie udalo sie pobrac JS.');
     document.head.appendChild(script);
   }
 }
 if(document.head)add();else document.addEventListener('DOMContentLoaded',add,{once:true});
})();
