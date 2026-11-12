// ==UserScript==
// @name         Galaxy - Margonem NI
// @namespace    https://github.com/Teriash/galaxy-theme
// @version      1.0.1
// @description  Ciemny, niebiesko-fioletowy motyw Galaxy dla Margonem NI.
// @icon         https://cdn.jsdelivr.net/gh/Teriash/galaxy-theme@main/assets/galaxy-icon.svg
// @author       Teriash
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
  const host = /^([a-z0-9-]+)\.margonem\.pl$/i.exec(location.hostname);
  if (!host || ['www', 'forum', 'pomoc'].includes(host[1].toLowerCase())) return;
  if (window.__TERIASH_GALAXY_LOADED__) return;
  window.__TERIASH_GALAXY_LOADED__ = true;

  const BASE = 'https://cdn.jsdelivr.net/gh/Teriash/galaxy-theme@main/';
  const VERSION = '1.0.1';
  const STYLESHEET_ID = 'teriash-galaxy-styles';
  const loadCSS = () => {
    if (document.getElementById(STYLESHEET_ID)) return;
    const link = document.createElement('link');
    link.id = STYLESHEET_ID;
    link.rel = 'stylesheet';
    link.href = `${BASE}css/galaxy.css?v=${VERSION}`;
    link.onerror = () => console.warn('[Galaxy] Nie udalo sie wczytac CSS. Sprawdz, czy repozytorium jest publiczne i pliki sa w galezi main.');
    document.head.appendChild(link);
  };
  if (document.head) loadCSS();
  else document.addEventListener('DOMContentLoaded', loadCSS, { once: true });

  const script = document.createElement('script');
  script.src = `${BASE}scripts/galaxy.js?v=${VERSION}`;
  script.onerror = () => console.warn('[Galaxy] Nie udalo sie wczytac skryptu dodatku.');
  (document.head || document.documentElement).appendChild(script);
})();
