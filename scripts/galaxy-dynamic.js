(() => {
'use strict';
const VERSION='3.4.0';
const ROOT=document.documentElement;
if (!/^([a-z0-9-]+)\.margonem\.pl$/i.test(location.hostname) || /^(www|forum|pomoc)\.margonem\.pl$/i.test(location.hostname)) return;
if (window.__TERIASH_GALAXY_340__) return;
window.__TERIASH_GALAXY_340__=true;
const STYLE_ID='teriash-galaxy-340-style';
const STORAGE_KEY='teriash-galaxy-340-settings';
const DEFAULTS=Object.freeze({enabled:true,palette:'blue',details:'ultra',dynamic:true,marker:false});
const PANEL_SEL='.border-window,.world-window,.window,.dialog,.modal,.popup,.inventory_wrapper,.shop-window,.depo-window,.depot-window,.deposit-window,.new-chat-window,.clan-window,.quest-window,.character-window,.battle-result';
const TIP_SEL='.tip-wrapper,.tooltip,.item-tooltip,.game-tooltip,.context-menu';
let observer=null,workScheduled=false,engineMarker=null;
function load(){
 try {const x=JSON.parse(localStorage.getItem(STORAGE_KEY));return x&&typeof x==='object'?{...DEFAULTS,...x}:{...DEFAULTS};}
 catch(e){return {...DEFAULTS};}
}
let settings=load();
if (!['blue','violet','cyan'].includes(settings.palette))settings.palette='blue';
if (!['standard','ultra'].includes(settings.details))settings.details='ultra';
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(settings));}catch(e){console.warn('[Galaxy] Brak dostepu do ustawien.',e);}}
function ensureStyle(){
 let s=document.getElementById(STYLE_ID);
 if (!s){s=document.createElement('style');s.id=STYLE_ID;s.textContent=CSS_CONTENT;(document.head||ROOT).appendChild(s);}
 return s;
}
function apply(){
 ensureStyle();ROOT.classList.toggle('teriash-galaxy',!!settings.enabled);
 ROOT.dataset.gxPalette=settings.palette;ROOT.dataset.gxDetails=settings.details;
 if(settings.enabled&&settings.dynamic) startObserver();else stopObserver();
 if(settings.enabled&&settings.marker) installMarker();else restoreMarker();
}
function decorate(scope){
 if(!scope||scope.nodeType!==1)return;
 const mark=(sel,klass)=>{
  if(scope.matches?.(sel))scope.classList.add(klass);
  // Ograniczenie: nie przechodzimy przez tysiące node'ów mapy/ekwipunku.
  if(scope.querySelectorAll){
   const found=scope.querySelectorAll(sel);
   for(let i=0;i<Math.min(found.length,250);i++)found[i].classList.add(klass);
  }
 };
 mark(PANEL_SEL,'gx-dynamic-panel');mark(TIP_SEL,'gx-dynamic-tooltip');
}
function runScan(){workScheduled=false;if(!settings.enabled||!settings.dynamic)return;
 decorate(document.body||ROOT);
}
function scheduleScan(){if(workScheduled)return;workScheduled=true;
 requestAnimationFrame(runScan);
}
function startObserver(){
 if(observer||!document.body)return;
 decorate(document.body);
 observer=new MutationObserver(changes=>{
  for(const m of changes){if(m.addedNodes.length){scheduleScan();break;}}
 });
 observer.observe(document.body,{childList:true,subtree:true});
}
function stopObserver(){if(observer){observer.disconnect();observer=null;}}
function installMarker(){
 if(engineMarker)return;
 // Odpowiednik podmiany move-marker z Winter Atelier; tylko jeśli API Engine jest dostępne.
 const loader=window.Engine?.imgLoader;
 let img;
 try{img=loader?.checkExist?.('/img/cross.gif',false);}catch(e){return;}
 if(!img||typeof img.src!=='string')return;
 engineMarker={img,original:img.src};
 img.src=MARKER_DATA;
}
function restoreMarker(){
 if(engineMarker){try{if(engineMarker.img.src===MARKER_DATA)engineMarker.img.src=engineMarker.original;}catch(e){}
 engineMarker=null;}
}
function update(next){
 if(!next||typeof next!=='object'||Array.isArray(next))throw Error('Oczekiwany obiekt ustawien');
 const permitted=['enabled','palette','details','dynamic','marker'];
 for(const k of Object.keys(next)){if(!permitted.includes(k))throw Error('Nieznane ustawienie: '+k);}
 const newSettings={...settings,...next};
 if(!['blue','violet','cyan'].includes(newSettings.palette))throw Error('Paleta: blue / violet / cyan');
 if(!['standard','ultra'].includes(newSettings.details))throw Error('Detale: standard / ultra');
 for(const k of ['enabled','dynamic','marker'])if(typeof newSettings[k]!=='boolean')throw Error(k+' musi byc boolean');
 settings=newSettings;save();apply();return {...settings};
}
function debug(){
 const selectors={hud:'.interface-layer',chat:'.new-chat-window,.chat-window',inventory:'.inventory_wrapper',battle:'.battle-controller',windows:'.border-window,.world-window',minimap:'.mini-map,.minimap',tooltip:TIP_SEL,clan:'.clan-members-content,.clan-window',dynamicPanels:'.gx-dynamic-panel',slots:'.inventory-grid-bg .slot,.inventory_wrapper .slot'};
 const found=Object.fromEntries(Object.entries(selectors).map(([k,v])=>[k,document.querySelectorAll(v).length]));
 const result={version:VERSION,settings:{...settings},styleLoaded:!!document.getElementById(STYLE_ID),observerActive:!!observer,markerReplaced:!!engineMarker,found};
 console.table(found);console.info('[Galaxy 3.4]',result);return result;
}
window.GalaxyTheme=Object.freeze({
 version:VERSION,configure:update,enable:()=>update({enabled:true}),disable:()=>update({enabled:false}),
 setPalette:palette=>update({palette}),setDetails:details=>update({details}),
 get options(){return {...settings};},get enabled(){return settings.enabled;},debug,
 rescan:()=>{decorate(document.body||ROOT);return debug();}
});
ensureStyle();apply();
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{apply();scheduleScan();},{once:true});
// Lazy retry znacznika; bez permanentnego interval i bez blokowania gry.
if(settings.marker){let tries=0;const timer=setInterval(()=>{tries++;if(!settings.enabled||!settings.marker||engineMarker||tries>=25){clearInterval(timer);return;}installMarker();},400);}
console.info('[Galaxy 3.4] Aktywny. Opcje: GalaxyTheme.configure({palette:"violet",details:"ultra",marker:true}); GalaxyTheme.debug()');
})();
