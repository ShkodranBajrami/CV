  /* ---------- Inline SVG icons (stroke-based) ---------- */
      const ICONS = {
        arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
        sparkles: '<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"/>',
        mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
        pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
        lang: '<path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/>',
        code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
        rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09ZM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
        cap: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/>',
        terminal: '<path d="m4 17 6-6-6-6M12 19h8"/>',
        folder: '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>',
        copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
        check: '<path d="M20 6 9 17l-5-5"/>',
        braces: '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/>',
        layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
        db: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>',
        git: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/><circle cx="18" cy="6" r="3"/>',
        puzzle: '<path d="M19.4 7h-2.2a1 1 0 0 1-1-1.3 2 2 0 1 0-3.9 0 1 1 0 0 1-1 1.3H9a1 1 0 0 0-1 1v2.1a1 1 0 0 1-1.3 1 2 2 0 1 0 0 3.9 1 1 0 0 1 1.3 1V19a1 1 0 0 0 1 1h2.1a1 1 0 0 0 1-1.3 2 2 0 1 1 3.9 0 1 1 0 0 0 1 1.3h2.3a1 1 0 0 0 1-1v-2.2a1 1 0 0 1 1.3-1 2 2 0 1 0 0-3.9 1 1 0 0 1-1.3-1V8a1 1 0 0 0-1-1Z"/>',
      };
      function svg(name, extra) {
        return (
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"' +
          (extra ? ' style="' + extra + '"' : '') +
          '>' +
          (ICONS[name] || '') +
          '</svg>'
        );
      }
      // replace all <i data-i="..."> placeholders
      document.querySelectorAll('i[data-i]').forEach((el) => {
        const style = el.getAttribute('style') || '';
        el.outerHTML = svg(el.getAttribute('data-i'), style);
      });

      /* ---------- Marquee ---------- */
      const marqueeWords = [
        'Anwendungsentwicklung', 'Problemlösung', 'Teamwork',
        'Lernbereitschaft', 'Sauberer Code', 'Neugier',
      ];
      const block = marqueeWords
        .map((w) => '<span>' + w + ' ' + svg('sparkles') + '</span>')
        .join('');
      document.getElementById('marquee').innerHTML = block + block;

      /* ---------- Skills ---------- */
      const skillGroups = [
        { icon: 'braces', title: 'Programmierung', color: 'var(--coral)', items: ['Grundlagen OOP', 'Sauberer Code', 'Debugging', 'Algorithmen & Logik'] },
        { icon: 'layout', title: 'Web & Anwendungen', color: 'var(--grape)', items: ['HTML & CSS', 'Frontend-Grundlagen', 'Benutzeroberflächen', 'Responsive Design'] },
        { icon: 'db', title: 'Datenbanken', color: 'var(--sky)', items: ['SQL-Grundlagen', 'Datenmodellierung', 'CRUD-Operationen'] },
        { icon: 'git', title: 'Werkzeuge & Methoden', color: 'var(--lime)', items: ['Git & Versionierung', 'IDEs', 'Terminal', 'Teamarbeit'] },
      ];
      document.getElementById('skills-grid').innerHTML = skillGroups
        .map((g) =>
          '<div class="card hover reveal"><div class="skill-head"><div class="icon-box" style="background:' +
          g.color + '">' + svg(g.icon) + '</div><h3>' + g.title +
          '</h3></div><div class="chips">' +
          g.items.map((it) => '<span class="chip">' + it + '</span>').join('') +
          '</div></div>'
        )
        .join('');

      /* ---------- Languages ---------- */
      const langs = [
        { name: 'Albanisch', level: 'Muttersprache', pct: 100, color: 'var(--coral)' },
        { name: 'Deutsch', level: 'Verhandlungssicher', pct: 90, color: 'var(--grape)' },
        { name: 'Englisch', level: 'Gute Kenntnisse', pct: 75, color: 'var(--sky)' },
      ];
      document.getElementById('langs').innerHTML = langs
        .map((l) =>
          '<div class="reveal"><div class="lang-top"><span class="lang-name">' +
          l.name + '</span><span class="lang-level">' + l.level +
          '</span></div><div class="bar"><i data-pct="' + l.pct +
          '" style="background:' + l.color + '"></i></div></div>'
        )
        .join('');

      /* ---------- Projects ---------- */
      const projects = [
        { icon: 'layout', title: 'Web-Projekt', color: 'var(--coral)', desc: 'Aufbau einer responsiven Website mit HTML, CSS und ersten Interaktionen – von der Idee bis zur fertigen Oberfläche.' },
        { icon: 'db', title: 'Datenbank-Anwendung', color: 'var(--sky)', desc: 'Entwurf eines Datenmodells und Umsetzung grundlegender CRUD-Funktionen mit SQL.' },
        { icon: 'puzzle', title: 'Programmier-Übungen', color: 'var(--grape)', desc: 'Lösung von Aufgaben rund um Logik, Algorithmen und objektorientierte Programmierung.' },
      ];
      document.getElementById('projects').innerHTML = projects
        .map((p) =>
          '<div class="card hover proj reveal"><div class="icon-box" style="background:' +
          p.color + '">' + svg(p.icon) + '</div><span class="badge">Schulprojekt</span><h3>' +
          p.title + '</h3><p class="muted" style="margin-top:8px;flex:1">' + p.desc + '</p></div>'
        )
        .join('');

      // fix icons that were injected as strings after DOM build
      document.querySelectorAll('i[data-i]').forEach((el) => {
        el.outerHTML = svg(el.getAttribute('data-i'), el.getAttribute('style') || '');
      });

      /* ---------- Year ---------- */
      document.getElementById('year').textContent =
        '© ' + new Date().getFullYear() + ' · Fachinformatiker Anwendungsentwicklung';

      /* ---------- Copy email ---------- */
      const copyBtn = document.getElementById('copyBtn');
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText('bajramishkodran123@gmail.com');
          const t = document.getElementById('copyText');
          const original = t.textContent;
          copyBtn.querySelector('svg').outerHTML = svg('check');
          t.textContent = 'Kopiert!';
          setTimeout(() => {
            t.textContent = original;
            copyBtn.querySelector('svg').outerHTML = svg('copy');
          }, 1800);
        } catch (e) {}
      });

/* ---------- Hamburger Menu Toggle ---------- */
function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

      /* ---------- Scroll reveal ---------- */
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              // animate language bars
              e.target.querySelectorAll('.bar i[data-pct]').forEach((bar) => {
                bar.style.width = bar.getAttribute('data-pct') + '%';
              });
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
