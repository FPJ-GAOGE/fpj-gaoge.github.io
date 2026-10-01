(() => {
  'use strict';
  const data = window.HOMEPAGE;
  const strings = {
    zh: {
      skip: '跳到正文', home: '学术主页', navigation: '主导航', profile: '个人信息', contents: '页面目录',
      about: '关于我', research: '研究方向', publications: '论文发表', projects: '精选项目', background: '教育与经历', contact: '联系方式',
      onThisPage: '本页内容', sidebarNote: '项目、研究与持续学习。', introTitle: '关于我', news: '最新动态', service: '学术服务',
      contactIntro: '欢迎交流。你可以通过以下渠道找到我。', email: '电子邮箱', cv: '简历', scholar: 'Google Scholar',
      researchEmpty: '研究方向整理中，后续会在这里更新。', papersEmpty: '暂无已公开的论文条目。', projectsEmpty: '项目整理中。',
      backgroundEmpty: '教育与工作经历尚未公开。', updated: '更新于', all: '全部', abstract: '摘要', paper: '论文', code: '代码',
      projectLink: '查看项目', publicProject: '公开项目', education: '教育经历', experience: '工作与研究经历', copied: '已复制',
      siteDescription: '的学术主页：水下机器人、多智能体协同与机器人学习。',
      awards: '荣誉与交流', outreach: '科研传播', outreachLink: '查看 B 站', academicActivities: '学术交流',
      Preprint: '预印本', Conference: '会议论文', Journal: '期刊论文'
    },
    en: {
      skip: 'Skip to content', home: 'Academic homepage', navigation: 'Main navigation', profile: 'Profile', contents: 'Page contents',
      about: 'About', research: 'Research', publications: 'Publications', projects: 'Projects', background: 'Education & Experience', contact: 'Contact',
      onThisPage: 'ON THIS PAGE', sidebarNote: 'Projects, research, and lifelong learning.', introTitle: 'About me', news: 'News', service: 'Academic Service',
      contactIntro: 'Always happy to connect. Find me through the links below.', email: 'Email', cv: 'Curriculum Vitae', scholar: 'Google Scholar',
      researchEmpty: 'Research interests will be added here.', papersEmpty: 'No publications listed yet.', projectsEmpty: 'Projects will be added here.',
      backgroundEmpty: 'Education and experience details have not been shared yet.', updated: 'Updated', all: 'All', abstract: 'Abstract', paper: 'Paper', code: 'Code',
      projectLink: 'View project', publicProject: 'PUBLIC PROJECT', education: 'Education', experience: 'Work & Research', copied: 'Copied',
      siteDescription: "'s academic homepage: underwater robotics, multi-agent coordination, and robot learning.",
      awards: 'Honors & Activities', outreach: 'Science Communication', outreachLink: 'View Bilibili', academicActivities: 'Academic Activities',
      Preprint: 'Preprint', Conference: 'Conference', Journal: 'Journal'
    }
  };
  let language = 'zh';
  let publicationFilter = 'all';
  try { const saved = localStorage.getItem('homepage-language'); if (saved === 'en' || saved === 'zh') language = saved; } catch {}
  const $ = id => document.getElementById(id);
  const t = key => strings[language][key] || key;
  const localized = value => typeof value === 'string' ? value : value?.[language] || value?.en || value?.zh || '';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
  function safeUrl(value, local = false) {
    if (!value) return '';
    try {
      const url = new URL(value, location.href);
      if (['https:', 'http:', 'mailto:'].includes(url.protocol) && (local || /^(https?:|mailto:)/i.test(value))) return escape(value);
    } catch {}
    return '';
  }
  const icons = {
    github: '<path d="M6 14c-3 1-3-1-4-1m8 4v-3c0-1 .2-1.5 .7-2-2.5-.3-5-1.2-5-5a4 4 0 0 1 1-2.7 4 4 0 0 1 .1-2.6s1-.3 2.8 1a9 9 0 0 1 5 0c1.8-1.3 2.8-1 2.8-1a4 4 0 0 1 .1 2.6 4 4 0 0 1 1 2.7c0 3.8-2.5 4.7-5 5 .5.5.7 1.2.7 2V17"/>',
    email: '<rect x="2" y="4" width="16" height="12" rx="2"/><path d="m2 5 8 6 8-6"/>',
    cv: '<path d="M5 2h7l4 4v12H5zM12 2v5h4M8 10h5M8 13h5"/>',
    scholar: '<path d="m1 7 9-5 9 5-9 5zM5 9v6c3 2 7 2 10 0V9M18 8v6"/>'
  };
  const icon = name => `<svg class="link-icon" viewBox="0 0 20 20" aria-hidden="true">${icons[name] || icons.github}</svg>`;
  function link(url, label, iconName, local = false) {
    const href = safeUrl(url, local);
    return href ? `<a href="${href}"${/^mailto:/i.test(url) ? '' : ' target="_blank" rel="noopener noreferrer"'}>${iconName ? icon(iconName) : ''}${escape(label)}</a>` : '';
  }
  const empty = key => `<p class="empty-state">${escape(t(key))}</p>`;
  function profileLinks(detailed = false) {
    return [
      data.email ? link(`mailto:${data.email}`, detailed ? data.email : t('email'), 'email') : '',
      link(data.github, 'GitHub', 'github'), link(data.scholar, t('scholar'), 'scholar'), link(data.cv, t('cv'), 'cv', true)
    ].join('');
  }
  function renderPublications() {
    const papers = data.publications || [];
    const categories = [...new Set(papers.map(p => p.type).filter(Boolean))];
    $('publication-filters').hidden = categories.length < 2;
    $('publication-filters').innerHTML = ['all', ...categories].map(category => `<button type="button" class="filter-button" data-filter="${escape(category)}" aria-pressed="${category === publicationFilter}">${escape(category === 'all' ? t('all') : t(category))}</button>`).join('');
    $('publication-list').innerHTML = papers.length ? papers.filter(p => publicationFilter === 'all' || p.type === publicationFilter).map(p => `
      <article class="publication">
        <div class="publication-meta">${escape(p.year || '')}${p.type ? ' · ' + escape(t(p.type)) : ''}</div>
        <h3>${escape(localized(p.title))}</h3>
        ${p.authors ? `<p class="authors">${localized(p.authors).split(',').map(author => (data.authorNames || []).includes(author.trim()) ? `<strong>${escape(author.trim())}</strong>` : escape(author.trim())).join(', ')}</p>` : ''}
        ${p.venue ? `<p class="venue">${escape(localized(p.venue))}</p>` : ''}
        <div class="paper-links">${link(p.url, t('paper'))}${link(p.pdf, 'PDF', undefined, true)}${link(p.code, t('code'))}</div>
        ${p.abstract ? `<details><summary>${escape(t('abstract'))}</summary><p>${escape(localized(p.abstract))}</p></details>` : ''}
      </article>`).join('') : empty('papersEmpty');
    $('publication-filters').querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      publicationFilter = button.dataset.filter;
      renderPublications();
      [...$('publication-filters').querySelectorAll('button')].find(item => item.dataset.filter === publicationFilter)?.focus();
    }));
  }
  function timeline(entries, heading) {
    if (!entries?.length) return '';
    return `<div class="timeline-group"><h3 class="timeline-label">${escape(t(heading))}</h3>${entries.map(entry => `
      <div class="timeline-entry"><time>${escape(localized(entry.period))}</time><div><h3>${escape(localized(entry.title))}</h3><p>${escape(localized(entry.organization))}</p>${entry.description ? `<p>${escape(localized(entry.description))}</p>` : ''}</div></div>`).join('')}</div>`;
  }
  function render() {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = `${localized(data.name)} · ${t('home')}`;
    document.querySelector('meta[name="description"]').content = localized(data.name) + t('siteDescription');
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = document.querySelector('meta[name="description"]').content;
    document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = t(element.dataset.i18n); });
    $('about').querySelector('.intro-title').innerHTML = escape(t('introTitle')) + '<span class="title-period">.</span>';
    document.querySelectorAll('[data-i18n-aria]').forEach(element => element.setAttribute('aria-label', t(element.dataset.i18nAria)));
    document.querySelector('.wordmark').setAttribute('aria-label', localized(data.name) + ' ' + t('home'));
    $('language-label').textContent = language === 'zh' ? 'EN' : '中文';
    $('language-toggle').setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
    $('profile-name').textContent = localized(data.name);
    $('profile-role').textContent = localized(data.role);
    ['affiliation', 'location'].forEach(key => {
      $(`profile-${key}`).textContent = localized(data[key]);
      $(`profile-${key}`).hidden = !localized(data[key]);
    });
    $('portrait').innerHTML = safeUrl(data.photo, true) ? `<img src="${safeUrl(data.photo, true)}" alt="${escape(localized(data.name))}" width="126" height="126">` : `<span>${escape(data.initials || localized(data.name).slice(0,3))}</span>`;
    $('profile-links').innerHTML = profileLinks();
    $('intro-links').innerHTML = profileLinks();
    $('bio').textContent = localized(data.bio);
    $('research-list').innerHTML = data.research?.length ? data.research.map(item => `<article class="research-item"><h3>${escape(localized(item.title))}</h3><p>${escape(localized(item.description))}</p></article>`).join('') : empty('researchEmpty');
    $('news').hidden = !data.news?.length;
    $('news-list').innerHTML = (data.news || []).map(item => `<div class="news-row"><time datetime="${escape(item.date)}">${escape(item.date)}</time><p>${item.url ? link(item.url, localized(item.text)) : escape(localized(item.text))}</p></div>`).join('');
    renderPublications();
    $('project-list').innerHTML = data.projects?.length ? data.projects.map(project => `<article class="project"><div class="project-meta">${escape(localized(project.category) || t('publicProject'))}${project.period ? ' · ' + escape(localized(project.period)) : ''}</div><h3>${escape(localized(project.title))}</h3><p>${escape(localized(project.description))}</p><div class="project-bottom"><div class="tags">${(project.tags || []).map(tag => `<span class="tag">${escape(tag)}</span>`).join('')}</div>${link(project.url, t('projectLink'))}</div></article>`).join('') : empty('projectsEmpty');
    $('background-list').innerHTML = timeline(data.education, 'education') + timeline(data.experience, 'experience') || empty('backgroundEmpty');
    $('service').hidden = !data.service?.length;
    $('service-list').innerHTML = (data.service || []).map(item => `<p class="service-item">${escape(localized(item))}</p>`).join('');
    $('outreach').hidden = !data.outreach;
    $('outreach-content').innerHTML = data.outreach ? `<article class="research-item"><h3>${escape(localized(data.outreach.title))}</h3><div class="publication-meta">${escape(localized(data.outreach.period))}</div><p>${escape(localized(data.outreach.description))}</p><div class="paper-links">${link(data.outreach.url, t('outreachLink'))}</div></article>` : '';
    $('awards').hidden = !data.awards?.length && !data.academicActivities?.length;
    $('awards-list').innerHTML = (data.awards || []).map(item => `<div class="news-row"><time>${escape(item.date)}</time><p>${escape(localized(item.text))}</p></div>`).join('');
    $('academic-activities').innerHTML = data.academicActivities?.length ? `<h3 class="timeline-label activities-heading">${escape(t('academicActivities'))}</h3>` + data.academicActivities.map(item => `<div class="news-row"><time>${escape(item.date)}</time><p>${escape(localized(item.text))}</p></div>`).join('') : '';
    $('contact-links').innerHTML = profileLinks(true);
    $('copyright').textContent = `© ${data.updated?.slice(0,4) || '2026'} ${localized(data.name)}`;
    $('updated').textContent = data.updated ? `${t('updated')} ${data.updated}` : '';
  }
  $('language-toggle').addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('homepage-language', language); } catch {}
    render();
  });
  render();
  const navLinks = [...document.querySelectorAll('.section-nav a')];
  let scheduled = false;
  function updateActiveSection() {
    let active = 'about';
    for (const link of navLinks) { const section = document.querySelector(link.getAttribute('href')); if (section.getBoundingClientRect().top <= 160) active = section.id; }
    for (const link of navLinks) {
      const selected = link.getAttribute('href') === `#${active}`;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    }
    scheduled = false;
  }
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateActiveSection); } }, { passive: true });
  updateActiveSection();
})();
