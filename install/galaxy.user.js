// ==UserScript==
// @name         Teriash Galaxy - Margonem NI
// @namespace    Teriash/MotywyNI/Galaxy
// @version      2.1.0
// @author       Teriash
// @icon         https://cdn.jsdelivr.net/gh/Teriash/galaxy-theme@main/assets/icon.png
// @description  Galaxy theme do Margonem NI - wersja PNG + jsDelivr.
// @match        https://*.margonem.pl/*
// @exclude      https://margonem.pl/*
// @exclude      https://www.margonem.pl/*
// @exclude      https://forum.margonem.pl/*
// @exclude      https://pomoc.margonem.pl/*
// @updateURL    https://cdn.jsdelivr.net/gh/Teriash/galaxy-theme@main/install/galaxy.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/Teriash/galaxy-theme@main/install/galaxy.user.js
// @grant        none
// @sandbox      raw
// @run-at       document-end
// @noframes
// ==/UserScript==

(function(){
  'use strict';
  const m=/^([a-z0-9-]+)\.margonem\.pl$/i.exec(location.hostname);
  if(!m||/^(www|forum|pomoc)$/i.test(m[1])) return;
  if(window.__TERIASH_GALAXY_V210__) return;
  window.__TERIASH_GALAXY_V210__=true;

  const cssId='teriash-galaxy-css';
  const jsId='teriash-galaxy-js';
  const base='https://cdn.jsdelivr.net/gh/Teriash/galaxy-theme@main/';
  const version='2.1.0';

  function applyRootClass(){
    document.documentElement.classList.add('teriash-galaxy');
    if(document.body) document.body.classList.add('teriash-galaxy-body');
  }

  function injectCss(){
    if(document.getElementById(cssId)) return;
    const link=document.createElement('link');
    link.id=cssId;
    link.rel='stylesheet';
    link.href=base+'css/galaxy.css?v='+encodeURIComponent(version);
    link.onerror=()=>console.warn('[Galaxy] Nie udalo sie zaladowac CSS z jsDelivr. Sprawdz czy repo jest publiczne i czy pliki sa na branchu main.');
    document.head.appendChild(link);
  }

  function injectJs(){
    if(document.getElementById(jsId)) return;
    const script=document.createElement('script');
    script.id=jsId;
    script.src=base+'scripts/galaxy.js?v='+encodeURIComponent(version);
    script.onerror=()=>console.warn('[Galaxy] Nie udalo sie zaladowac skryptu galaxy.js z jsDelivr.');
    document.head.appendChild(script);
  }

  function init(){
    applyRootClass();
    injectCss();
    injectJs();
  }

  if(document.head) init();
  else document.addEventListener('DOMContentLoaded', init, {once:true});
})();
