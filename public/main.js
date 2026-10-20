(() => {
  const SECTIONS = { game: 'games', site: 'other' };
  const frame = document.querySelector('.preview .frame');
  const caption = document.querySelector('.preview .caption');

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  const host = (url) => {
    try { return new URL(url).host; } catch { return url; }
  };

  // A screenshot if there is one, otherwise a plain colour card with the name on it.
  const picture = (p) => {
    if (p.image) {
      const img = el('img');
      img.src = p.image;
      img.alt = '';
      img.decoding = 'async';
      return img;
    }
    const card = el('div', 'card');
    card.style.setProperty('--card', p.color || 'var(--ink)');
    card.append(el('span', null, p.name));
    return card;
  };

  // Build each preview once so switching between them doesn't refetch anything.
  const pictures = new Map();
  let shown = null;

  const show = (p, number) => {
    if (shown === p) return;
    shown = p;
    if (!pictures.has(p)) pictures.set(p, picture(p));
    frame.replaceChildren(pictures.get(p));
    caption.textContent = `${number}  ${p.name}`;
  };

  const row = (p, number) => {
    const li = el('li');
    const a = el('a', 'row');
    a.href = p.url;

    const title = el('span', 'title', p.name);
    if (p.note) title.append(el('span', 'note', p.note));

    const meta = el('span', 'meta');
    meta.append(el('span', null, (p.tags || []).join(' / ')), el('span', 'host', host(p.url)));

    a.append(el('span', 'num', number), title, el('span', 'about', p.about), meta, el('span', 'arrow', '↗'));
    a.addEventListener('pointerenter', () => show(p, number));
    a.addEventListener('focus', () => show(p, number));
    li.append(a);
    return li;
  };

  let first = null;
  for (const [kind, id] of Object.entries(SECTIONS)) {
    const items = PROJECTS.filter((p) => (p.kind || 'game') === kind);
    if (!items.length) continue;

    const section = document.getElementById(id);
    const list = section.querySelector('.rows');
    items.forEach((p, i) => {
      const number = String(i + 1).padStart(2, '0');
      list.append(row(p, number));
      if (!first) first = [p, number];
    });
    section.querySelector('.count').textContent = String(items.length).padStart(2, '0');
    section.hidden = false;
    document.querySelector(`.jump a[href="#${id}"]`).hidden = false;
  }

  if (first) show(...first);
  document.querySelector('.year').textContent = new Date().getFullYear();
})();
