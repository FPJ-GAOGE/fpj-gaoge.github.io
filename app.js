(() => {
  'use strict';
  const data = window.HOMEPAGE;
  const view = window.HOMEPAGE_VIEW;
  let language = document.documentElement.lang === 'en' ? 'en' : 'zh';
  const state = { type: 'all', topic: 'all' };
  function updateActiveSection() {
    const nav = [...document.querySelectorAll('.section-nav a')];
    let active = 'about';
    for (const link of nav) {
      const target = document.getElementById(link.hash.slice(1));
      if (target && target.getBoundingClientRect().top <= 170) active = target.id;
    }
    for (const link of nav) {
      const selected = link.hash === '#' + active;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
  function renderLanguage() {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.body.innerHTML = view.renderBody(data, language, state);
    const metadata = view.metadata(data, language);
    document.title = metadata.title;
    document.querySelector('meta[name="description"]').content = metadata.description;
    document.querySelector('meta[property="og:title"]').content = metadata.title;
    document.querySelector('meta[property="og:description"]').content = metadata.description;
    document.querySelector('meta[property="og:url"]').content = metadata.canonical;
    document.querySelector('meta[property="og:locale"]').content = language === 'zh' ? 'zh_CN' : 'en_US';
    document.querySelector('link[rel="canonical"]').href = metadata.canonical;
    history.replaceState(null, '', (language === 'en' ? '/en/' : '/') + location.hash);
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant', block: 'start' });
    updateActiveSection();
  }
  function renderFilters(group, value) {
    const result = view.renderPublications(data, language, state);
    document.getElementById('publication-filters').innerHTML = result.filters;
    document.getElementById('publication-list').innerHTML = result.list;
    document.getElementById('publication-count').textContent = result.count;
    const focus = [...document.querySelectorAll('[data-filter-group]')].find(button => button.dataset.filterGroup === group && button.dataset.filter === value);
    focus?.focus({ preventScroll: true });
  }
  document.addEventListener('click', event => {
    const languageLink = event.target.closest('#language-toggle');
    if (languageLink && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey && event.button === 0) {
      event.preventDefault();
      language = language === 'zh' ? 'en' : 'zh';
      try { localStorage.setItem('homepage-language', language); } catch {}
      renderLanguage();
      document.getElementById('language-toggle').focus({ preventScroll: true });
      return;
    }
    const filter = event.target.closest('[data-filter-group]');
    if (filter) {
      const group = filter.dataset.filterGroup;
      if (group !== 'type' && group !== 'topic') return;
      state[group] = filter.dataset.filter;
      renderFilters(group, state[group]);
    }
    if (event.target.closest('[data-reset-filters]')) {
      state.type = state.topic = 'all';
      renderFilters('topic', 'all');
    }
  });
  try {
    if (location.pathname === '/' && localStorage.getItem('homepage-language') === 'en') {
      language = 'en';
      renderLanguage();
    }
  } catch {}
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { updateActiveSection(); scheduled = false; });
  }, { passive: true });
  updateActiveSection();
})();
