(() => {
  'use strict';
  const map = document.getElementById('travel-map');
  const status = document.getElementById('map-status');
  function selectDestination(code,name) {
    for (const element of document.querySelectorAll('[data-destination]')) {
      const selected=element.dataset.destination===code;
      element.classList.toggle('selected',selected);
      if (element.hasAttribute('aria-pressed')) element.setAttribute('aria-pressed',String(selected));
    }
    map.classList.toggle('has-selection',Boolean(code));
    status.textContent=code ? `${name} · ${status.dataset.visited}` : status.dataset.default;
  }
  document.addEventListener('click',event=>{
    const destination=event.target.closest('[data-destination]');
    if(destination) selectDestination(destination.dataset.destination,destination.dataset.name);
    if(event.target.closest('#map-reset')) selectDestination(null,null);
  });
  map.addEventListener('keydown',event=>{
    const destination=event.target.closest('[data-destination]');
    if(destination && (event.key==='Enter' || event.key===' ')) {
      event.preventDefault();
      selectDestination(destination.dataset.destination,destination.dataset.name);
    }
  });
  document.querySelector('.language-toggle').addEventListener('click',event=>{
    event.currentTarget.href=event.currentTarget.getAttribute('href').split('#')[0]+location.hash;
    try { localStorage.setItem('homepage-language',document.documentElement.lang==='en'?'zh':'en'); } catch {}
  });
})();
