(function (root) {
  'use strict';
  const strings = {
    zh: {
      home: '学术主页', skip: '跳到正文', navigation: '主导航', about: '关于我', research: '研究方向', publications: '论文发表', projects: '精选项目', background: '教育与经历', awards: '荣誉与交流', contact: '联系方式', news: '最新动态', outreach: '科研传播', service: '学术服务', contents: '本页内容', email: '电子邮箱', cv: '简历', all: '全部', abstract: '摘要', paper: '论文', code: '代码', projectLink: '查看项目', education: '教育经历', experience: '工作与研究经历', academicActivities: '学术交流', updated: '更新于', older: '查看早期动态', type: '发表类型', topic: '研究主题', noResults: '没有符合当前筛选的论文。', showAll: '显示全部论文', paperCount: '个论文条目', scholarNote: '完整学术档案', contribution: '姓名加粗表示本人；HiCRISP 预印本与会议版本分别列出。', figure: '图源：论文 / 项目', figureAlt: '论文或项目示意图', contactTitle: '一起讨论机器人', contactIntro: '欢迎就研究合作、机器人系统与技术交流联系我。', contactAction: '发送邮件', outreachLink: '查看 B 站', topicUnderwater: '水下机器人', topicLearning: '机器人学习与规划', topicCoordination: '多智能体协同', topicSystems: '机器人系统', topicMechanics: '波与能量采集', Preprint: '预印本', Conference: '会议论文', Journal: '期刊论文', perception: '感知', estimation: '状态估计', control: '控制', feedback: '闭环反馈', communication: '局部通信', coordination: '协同决策', goal: '任务', plan: '规划', action: '执行', correction: '自我修正', diagramNote: '研究方向示意', latestResearch: '近期研究', summary: '从算法到真实机器人系统', introTag: '感知 · 规划 · 控制', description: '方鹏杰（Fong Pangkit），上海交通大学博士生，研究水下机器人、多智能体协同与机器人学习。', cvTitle: '学术简历', cvPrint: '打印 / 保存为 PDF', cvBack: '返回主页', profile: '个人信息'
    },
    en: {
      home: 'Academic homepage', skip: 'Skip to content', navigation: 'Main navigation', about: 'About', research: 'Research', publications: 'Publications', projects: 'Projects', background: 'Education & Experience', awards: 'Honors & Activities', contact: 'Contact', news: 'News', outreach: 'Science Communication', service: 'Academic Service', contents: 'ON THIS PAGE', email: 'Email', cv: 'Curriculum Vitae', all: 'All', abstract: 'Abstract', paper: 'Paper', code: 'Code', projectLink: 'View project', education: 'Education', experience: 'Work & Research', academicActivities: 'Academic Activities', updated: 'Updated', older: 'Show older news', type: 'Publication type', topic: 'Research topic', noResults: 'No publications match these filters.', showAll: 'Show all publications', paperCount: 'publication entries', scholarNote: 'Full academic profile', contribution: 'My name is in bold. The HiCRISP preprint and conference version are listed separately.', figure: 'Figure: paper / project', figureAlt: 'Paper or project overview', contactTitle: 'Let’s talk robotics', contactIntro: 'Get in touch about research collaboration, robotic systems, and technical discussions.', contactAction: 'Email me', outreachLink: 'View Bilibili', topicUnderwater: 'Underwater robotics', topicLearning: 'Robot learning & planning', topicCoordination: 'Multi-agent coordination', topicSystems: 'Robot systems', topicMechanics: 'Waves & energy harvesting', Preprint: 'Preprint', Conference: 'Conference', Journal: 'Journal', perception: 'Perception', estimation: 'Estimation', control: 'Control', feedback: 'Closed-loop feedback', communication: 'Local communication', coordination: 'Cooperative decisions', goal: 'Goal', plan: 'Plan', action: 'Action', correction: 'Self-correction', diagramNote: 'Research illustration', latestResearch: 'RECENT RESEARCH', summary: 'From algorithms to real robotic systems', introTag: 'Perception · Planning · Control', description: 'Fong Pangkit, PhD student at Shanghai Jiao Tong University. Research in underwater robotics, multi-agent coordination, and robot learning.', cvTitle: 'Academic CV', cvPrint: 'Print / Save as PDF', cvBack: 'Back to homepage', profile: 'Profile'
    }
  };
  strings.zh.beyond = '除了学术之外';
  strings.en.beyond = 'Beyond academia';
  const topics = { underwater: 'topicUnderwater', learning: 'topicLearning', coordination: 'topicCoordination', systems: 'topicSystems', mechanics: 'topicMechanics' };
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const localized = (value, language) => typeof value === 'string' ? value : value?.[language] || value?.en || value?.zh || '';
  function url(value) {
    if (!value || !/^(https?:\/\/|mailto:|\/(?!\/)|\.\/assets\/)/i.test(value)) return '';
    return escape(value.replace(/^\.\//, '/'));
  }
  function link(href, label, className = '') {
    const safe = url(href);
    return safe ? `<a href="${safe}"${className ? ` class="${escape(className)}"` : ''}${/^https?:/i.test(href) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escape(label)}</a>` : '';
  }
  function context(language) {
    return { t: key => strings[language][key] || key, l: value => localized(value, language) };
  }
  function profileLinks(data, language, detailed = false) {
    const { t } = context(language);
    const cv = language === 'en' && data.cv === '/cv/' ? '/cv/en/' : data.cv;
    return [link(`mailto:${data.email}`, detailed ? data.email : t('email')), link(data.scholar, 'Google Scholar'), link(data.github, 'GitHub'), link(cv, t('cv'))].join('');
  }
  function figure(item, language, className = 'paper-figure') {
    if (!url(item.image)) return '';
    const { t, l } = context(language);
    const credit = item.imageLicense ? ` · ${link(item.imageLicenseUrl, item.imageLicense)}` : '';
    return `<figure class="${className}"><a href="${url(item.image)}" target="_blank" rel="noopener noreferrer" aria-label="${escape(l(item.imageAlt) || t('figureAlt'))}"><img src="${url(item.image)}" alt="${escape(l(item.imageAlt) || t('figureAlt'))}" loading="lazy" decoding="async" width="640" height="360"></a><figcaption>${link(item.imageSource || item.url, t('figure'))}${credit}</figcaption></figure>`;
  }
  function diagram(kind, language) {
    const { t } = context(language);
    const box = (x, label) => `<rect x="${x}" y="35" width="92" height="44" rx="9"/><text x="${x + 46}" y="62">${escape(t(label))}</text>`;
    let content;
    if (kind === 'coordination') {
      content = '<path class="signal-line" d="M45 50 120 28 188 58 265 35 315 76 240 110 160 98 82 112 45 50M120 28 160 98 265 35M82 112 188 58 240 110" fill="none"/>' + [[45,50],[120,28],[188,58],[265,35],[315,76],[240,110],[160,98],[82,112]].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="${i === 2 ? 15 : 9}"/><circle class="agent-pulse" cx="${x}" cy="${y}" r="18" style="animation-delay:${i * .2}s"/>`).join('') + `<text x="180" y="150">${escape(t('communication'))} → ${escape(t('coordination'))}</text>`;
    } else {
      const labels = kind === 'learning' ? ['goal','plan','action'] : ['perception','estimation','control'];
      content = box(18,labels[0]) + box(134,labels[1]) + box(250,labels[2]) + '<path class="signal-line" d="M110 57h24M226 57h24M296 79v39H64V79" fill="none"/><path d="m128 53 6 4-6 4m116-8 6 4-6 4M60 85l4-6 4 6" fill="none"/>' + `<text x="180" y="150">${escape(t(kind === 'learning' ? 'correction' : 'feedback'))}</text>`;
    }
    return `<svg class="research-diagram" viewBox="0 0 360 176" role="img" aria-label="${escape(t('diagramNote'))}: ${escape(t(kind === 'learning' ? 'topicLearning' : kind === 'coordination' ? 'topicCoordination' : 'topicUnderwater'))}">${content}</svg>`;
  }
  function renderResearch(data, language) {
    const { t, l } = context(language);
    return (data.research || []).map((item, i) => `<article class="research-item research-card" tabindex="0"><div class="research-card-top"><span class="research-index">0${i + 1}</span><span>${escape(t('diagramNote'))}</span></div>${diagram(item.visual || ['underwater','coordination','learning'][i],language)}<h3>${escape(l(item.title))}</h3><p>${escape(l(item.description))}</p></article>`).join('');
  }
  function renderPublications(data, language, state = {}) {
    const { t, l } = context(language);
    const type = state.type || 'all', topic = state.topic || 'all';
    const papers = data.publications || [];
    const matching = papers.filter(p => (type === 'all' || p.type === type) && (topic === 'all' || p.topic === topic));
    const buttons = (values, key, selected, group) => values.map(value => `<button type="button" class="filter-button" data-filter-group="${group}" data-filter="${escape(value)}" aria-pressed="${value === selected}">${escape(value === 'all' ? t('all') : t(key(value)))}</button>`).join('');
    const filters = `<div class="filter-group" role="group" aria-label="${escape(t('topic'))}"><span class="filter-label">${escape(t('topic'))}</span><div>${buttons(['all',...new Set(papers.map(p=>p.topic).filter(Boolean))], value=>topics[value],topic,'topic')}</div></div><div class="filter-group" role="group" aria-label="${escape(t('type'))}"><span class="filter-label">${escape(t('type'))}</span><div>${buttons(['all',...new Set(papers.map(p=>p.type).filter(Boolean))],value=>value,type,'type')}</div></div>`;
    const list = matching.map(p=>`<article class="publication${p.image ? ' publication-with-image' : ''}">${figure(p,language)}<div class="publication-body"><div class="publication-meta"><span>${escape(p.year)}</span><span class="venue-badge">${escape(t(p.type))}</span>${p.topic ? `<span>${escape(t(topics[p.topic]))}</span>` : ''}</div><h3>${url(p.url) ? link(p.url,l(p.title)) : escape(l(p.title))}</h3><p class="authors">${l(p.authors).split(',').map(a=>(data.authorNames || []).includes(a.trim()) ? `<strong>${escape(a.trim())}</strong>` : escape(a.trim())).join(', ')}</p><p class="venue">${escape(l(p.venue))}</p><div class="paper-links">${link(p.url,t('paper'))}${link(p.pdf,'PDF')}${link(p.code,t('code'))}${link(p.project,t('projectLink'))}</div>${p.abstract ? `<details><summary>${escape(t('abstract'))}</summary><p>${escape(l(p.abstract))}</p></details>` : ''}</div></article>`).join('') || `<p class="empty-state">${escape(t('noResults'))} <button type="button" class="text-button" data-reset-filters>${escape(t('showAll'))}</button></p>`;
    return { filters, list, count: `${matching.length} / ${papers.length} ${t('paperCount')}` };
  }
  function renderNews(data, language) {
    const { t, l } = context(language);
    const row = item => `<div class="news-row"><time datetime="${escape(item.date)}">${escape(item.date.replace(/-/g,'.'))}</time><p>${item.url ? link(item.url,l(item.text)) : escape(l(item.text))}</p></div>`;
    const news = data.news || [];
    return news.slice(0,3).map(row).join('') + (news.length > 3 ? `<details class="older-news"><summary>${escape(t('older'))}</summary>${news.slice(3).map(row).join('')}</details>` : '');
  }
  function renderProjects(data, language) {
    const { t, l } = context(language);
    return (data.projects || []).map(project=>`<article class="project${project.image ? ' project-with-image' : ''}">${figure(project,language,'project-figure')}<div class="project-body"><div class="project-meta">${escape(l(project.category))}${project.period ? ' · ' + escape(l(project.period)) : ''}</div><h3>${escape(l(project.title))}</h3><p>${escape(l(project.description))}</p><div class="project-bottom"><div class="tags">${(project.tags || []).map(tag=>`<span class="tag">${escape(tag)}</span>`).join('')}</div>${link(project.url,t('projectLink'))}</div></div></article>`).join('');
  }
  function timeline(entries, language, heading) {
    const { t, l } = context(language);
    return entries?.length ? `<div class="timeline-group"><h3 class="timeline-label">${escape(t(heading))}</h3>${entries.map(entry=>`<div class="timeline-entry"><time>${escape(l(entry.period))}</time><div class="timeline-content">${entry.initials ? `<span class="institution-mark" aria-hidden="true">${escape(entry.initials)}</span>` : ''}<div><h3>${escape(l(entry.title))}</h3><p>${escape(l(entry.organization))}</p>${entry.description ? `<p>${escape(l(entry.description))}</p>` : ''}</div></div></div>`).join('')}</div>` : '';
  }
  function section(id, label, number, content, language, extra = '') {
    const { t } = context(language);
    return `<section id="${id}" class="content-section ${extra}"><div class="section-heading"><span class="heading-index">${number}</span><h2>${escape(t(label))}</h2></div>${content}</section>`;
  }
  function renderBody(data, language, state = {}) {
    const { t, l } = context(language), papers = renderPublications(data,language,state);
    const beyondPath = language === 'zh' ? '/beyond/' : '/beyond/en/';
    const sections = [['about','about','01'],['news','news','—'],['research','research','02'],['publications','publications','03'],['projects','projects','04'],['background','background','05'],['awards','awards','06'],['outreach','outreach','—']].filter(([id]) => !(id==='news' && !data.news?.length) && !(id==='outreach' && !data.outreach));
    const nav = sections.map(([id,label,index])=>`<a href="#${id}"${id==='about' ? ' class="active" aria-current="location"' : ''}><span>${escape(t(label))}</span><span class="section-number">${index}</span></a>`).join('') + link(beyondPath,t('beyond'),'beyond-link');
    const news = data.news?.length ? section('news','news','—',`<div id="news-list" class="news-list">${renderNews(data,language)}</div>`,language) : '';
    const outreach = data.outreach ? section('outreach','outreach','—',`<article class="outreach-card"><p class="eyebrow">${escape(l(data.outreach.period))}</p><h3>${escape(l(data.outreach.title))}</h3><p>${escape(l(data.outreach.description))}</p>${link(data.outreach.url,t('outreachLink'),'outreach-button')}</article>`,language) : '';
    const row = item => `<div class="news-row"><time>${escape(item.date)}</time><p>${escape(l(item.text))}</p></div>`;
    const awards = (data.awards || []).map(row).join('') + (data.academicActivities?.length ? `<h3 class="timeline-label activities-heading">${escape(t('academicActivities'))}</h3>${data.academicActivities.map(row).join('')}` : '');
    return `<a class="skip-link" href="#main">${escape(t('skip'))}</a><header class="site-header"><div class="header-inner"><a class="wordmark" href="#about" aria-label="${escape(l(data.name))}"><span class="brand-initials">PF<span class="brand-dot">.</span></span><span class="wordmark-label">${escape(t('home'))}</span></a><nav class="top-nav" aria-label="${escape(t('navigation'))}">${['about','research','publications','projects'].map(id=>`<a href="#${id}">${escape(t(id))}</a>`).join('')}${link(beyondPath,t('beyond'),'beyond-link')}</nav><a class="language-toggle" id="language-toggle" href="${language === 'zh' ? '/en/' : '/'}" lang="${language === 'zh' ? 'en' : 'zh-CN'}" aria-label="${language === 'zh' ? 'Switch to English' : '切换为中文'}"><span class="language-icon" aria-hidden="true">文/A</span><span>${language === 'zh' ? 'EN' : '中文'}</span></a></div></header>
    <div class="page-layout"><aside class="profile-sidebar" aria-label="${escape(t('profile'))}"><div id="portrait" class="portrait"><img src="${url(data.photo)}" alt="${escape(l(data.name))}" width="208" height="208"></div><h1 id="profile-name">${escape(l(data.name))}</h1><p class="profile-role">${escape(l(data.role))}</p><p class="profile-affiliation">${escape(l(data.affiliation))}</p><p class="profile-location">${escape(l(data.location))}</p><div class="profile-links">${profileLinks(data,language)}</div><div class="sidebar-rule"></div><p class="sidebar-label">${escape(t('contents'))}</p><nav class="section-nav" aria-label="${escape(t('contents'))}">${nav}</nav><p class="sidebar-note">${escape(t('introTag'))}</p></aside>
    <main id="main" tabindex="-1"><section id="about" class="about-section"><p class="eyebrow">${escape(t('introTag'))}</p><h2 class="intro-title">${escape(t('summary'))}<span class="title-period">.</span></h2><p class="intro-bio">${escape(l(data.bio))}</p><div class="intro-links">${profileLinks(data,language)}</div></section>${news}
    ${section('research','research','02',`<div id="research-list" class="research-list">${renderResearch(data,language)}</div>`,language)}
    ${section('publications','publications','03',`<p class="publication-intro">${link(data.scholar,t('scholarNote'))} · ${escape(t('contribution'))}</p><div id="publication-filters" class="publication-filters">${papers.filters}</div><p id="publication-count" class="publication-count" role="status" aria-live="polite">${escape(papers.count)}</p><div id="publication-list" class="publication-list">${papers.list}</div>`,language)}
    ${section('projects','projects','04',`<div class="project-list">${renderProjects(data,language)}</div>`,language)}
    ${section('background','background','05',`<div id="background-list">${timeline(data.education,language,'education')}${timeline(data.experience,language,'experience')}</div>`,language)}
    ${data.service?.length ? section('service','service','—',data.service.map(item=>`<p>${escape(l(item))}</p>`).join(''),language) : ''}
    ${section('awards','awards','06',awards,language)}${outreach}
    <footer class="site-footer"><span>© ${escape(data.updated?.slice(0,4) || '2026')} ${escape(l(data.name))}</span><span>${escape(t('updated'))} ${escape(data.updated)}</span></footer></main></div>`;
  }
  function metadata(data, language) {
    const { t, l } = context(language);
    const origin = data.siteUrl || 'https://fpj-gaoge.github.io/';
    const canonical = origin + (language === 'en' ? 'en/' : '');
    return { title: `${l(data.name)} · ${t('home')}`, description: t('description'), canonical, origin };
  }
  function renderBaseDocument(data, language) {
    const { title, description, canonical, origin } = metadata(data,language);
    const person = { '@context':'https://schema.org', '@type':'Person', name:data.name.en, alternateName:data.name.zh, url:origin, image:origin + data.photo.replace(/^\.\//,''), jobTitle:localized(data.role,'en'), affiliation:{'@type':'CollegeOrUniversity', name:'Shanghai Jiao Tong University'}, alumniOf:{'@type':'CollegeOrUniversity', name:"Xi'an Jiaotong University"}, knowsAbout:data.research.map(item=>localized(item.title,'en')), sameAs:[data.github,data.scholar] };
    return `<!doctype html><html lang="${language === 'zh' ? 'zh-CN' : 'en'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${escape(description)}"><meta name="author" content="Fong Pangkit"><meta name="theme-color" content="#fbf6ef"><link rel="canonical" href="${escape(canonical)}"><link rel="alternate" hreflang="zh-CN" href="${escape(origin)}"><link rel="alternate" hreflang="en" href="${escape(origin)}en/"><link rel="alternate" hreflang="x-default" href="${escape(origin)}"><meta property="og:type" content="website"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${escape(canonical)}"><meta property="og:locale" content="${language === 'zh' ? 'zh_CN' : 'en_US'}"><title>${escape(title)}</title><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%239b4f35'/%3E%3Cpath d='M20 47V17h26v6H27v7h16v6H27v11z' fill='white'/%3E%3C/svg%3E"><link rel="stylesheet" href="/style.css?v=warm-20261003"><script type="application/ld+json">${JSON.stringify(person).replace(/</g,'\\u003c')}</script><script defer src="/profile.js"></script><script defer src="/render.js"></script><script defer src="/app.js"></script></head><body>${renderBody(data,language)}</body></html>\n`;
  }
  function renderDocument(data, language) {
    return renderBaseDocument(data, language).replace('<link rel="stylesheet" href="/style.css?v=warm-20261003">', '<link rel="stylesheet" href="/style.css?v=warm-20261003"><link rel="stylesheet" href="/enhancements.css?v=warm-20261003">').replace(/[ \t]+$/gm, '');
  }
  root.HOMEPAGE_VIEW = { strings, topics, escape, localized, link, context, profileLinks, renderPublications, renderBody, renderDocument, timeline, metadata };
})(typeof window !== 'undefined' ? window : globalThis);
