const root=document.documentElement;
const themeToggle=document.getElementById('themeToggle');
function setTheme(theme) {
  root.setAttribute('data-theme',theme);
  themeToggle.setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode');
  try {
  localStorage.setItem('ishaan-theme',theme)}

  catch(e) {
  }

}

setTheme(root.getAttribute('data-theme')||'dark');
themeToggle.addEventListener('click',()=>setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark'));
const menuToggle=document.getElementById('menuToggle');
const mobileNav=document.getElementById('mobileNav');
function closeMenu() {
  mobileNav.hidden=true;
  menuToggle.setAttribute('aria-expanded','false');
menuToggle.setAttribute('aria-label','Open navigation')}

menuToggle.addEventListener('click',()=> {
  const willOpen=mobileNav.hidden;
  mobileNav.hidden=!willOpen;
  menuToggle.setAttribute('aria-expanded',String(willOpen));
menuToggle.setAttribute('aria-label',willOpen?'Close navigation':'Open navigation')}

);
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=> {
if(e.key==='Escape')closeMenu()}

);
const filters=[...document.querySelectorAll('.filter-btn')];
const cards=[...document.querySelectorAll('.project-card')];
const empty=document.getElementById('noProjects');
filters.forEach(btn=>btn.addEventListener('click',()=> {
  const category=btn.dataset.filter;
  filters.forEach(b=> {
    const active=b===btn;
    b.classList.toggle('active',active);
  b.setAttribute('aria-pressed',String(active))}

  );
  let count=0;
  cards.forEach(c=> {
    const matches=category==='All'||c.dataset.category===category;
    c.hidden=!matches;
  if(matches)count++}

  );
  empty.hidden=count>0;
}

));
document.getElementById('year').textContent=new Date().getFullYear();
const sectionLinks=[...document.querySelectorAll('.desktop-nav a')];
if('IntersectionObserver'in window) {
  const sections=[...document.querySelectorAll('main section[id]')];
  const observer=new IntersectionObserver(entries=> {
    entries.forEach(entry=> {
      if(entry.isIntersecting) {
      sectionLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}

    }

  )}

  , {
  rootMargin:'-25% 0px -65% 0px'}

  );
sections.forEach(s=>observer.observe(s))}
